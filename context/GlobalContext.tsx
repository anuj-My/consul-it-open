"use client";

import { initialRoadmapData } from "@/data/data";
import { getMockAIResponse } from "@/data/mock-ai-responses";
import { Message, RoadmapData, Session, Task } from "@/types/roadmap";
import { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextType {
  data: RoadmapData;
  startTask: (sessionId: string, taskId: string) => void;
  completeTask: (sessionId: string, taskId: string) => void;
  getProgress: () => {
    progressPercentage: number;
    completedTasks: number;
    completedSessions: number;
  };
  messages: Message[];
  sendMessage: (content: string) => void;
  isLoading: boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<RoadmapData>(initialRoadmapData);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("roadmapData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const saveDataToStorage = () => {
    localStorage.setItem("roadmapData", JSON.stringify(data));
  };

  useEffect(() => {
    saveDataToStorage();
  }, [data]);

  const startTask = (sessionId: string, taskId: string) => {
    console.log("Starting task", taskId, "in session", sessionId);

    setData((prev) => {
      const newData = JSON.parse(JSON.stringify(prev));
      const session = newData.sessions.find((s: Session) => s.id === sessionId);

      if (session) {
        const task = session.tasks.find((t: Task) => t.id === taskId);

        if (task) {
          task.isStarted = true;
        }
      }

      return newData;
    });
  };

  const completeTask = (sessionId: string, taskId: string) => {
    console.log("complete task", taskId, "in session", sessionId);

    setData((prev) => {
      const newData = JSON.parse(JSON.stringify(prev));

      const session = newData.sessions.find((s: Session) => s.id === sessionId);

      if (session) {
        const task = session.tasks.find((t: Task) => t.id === taskId);

        if (task && !task.isCompleted) {
          task.isCompleted = true;
          task.isStarted = true;

          const allTasksCompleted = session.tasks.every(
            (t: Task) => t.isCompleted,
          );

          if (allTasksCompleted) {
            const sessionIndex = newData.sessions.findIndex(
              (s: Session) => s.id === sessionId,
            );

            if (
              sessionIndex >= 0 &&
              sessionIndex < newData.sessions.length - 1
            ) {
              newData.sessions[sessionIndex + 1].isLocked = false;
            }
          }
        }
      }

      return newData;
    });
  };

  const getProgress = (): {
    progressPercentage: number;
    completedTasks: number;
    completedSessions: number;
  } => {
    const allTasks = data.sessions.flatMap((s: Session) => s.tasks);

    if (allTasks.length === 0) {
      return { progressPercentage: 0, completedTasks: 0, completedSessions: 0 };
    }

    const completedTasks = allTasks.filter((t: Task) => t.isCompleted).length;
    const progressPercentage = Math.round(
      (completedTasks / allTasks.length) * 100,
    );

    // Calculate completed sessions (sessions where all tasks are completed)
    const completedSessions = data.sessions.filter((session: Session) => {
      return session.tasks.every((task: Task) => task.isCompleted);
    }).length;

    return { progressPercentage, completedTasks, completedSessions };
  };

  const getAiResponse = (userMessage: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userMessage.trim()) {
          resolve(getMockAIResponse(userMessage));
        } else {
          reject(new Error("Invalid User Input."));
        }
      }, 1500);
    });
  };

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content,
      timeStamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setIsLoading(true);
      const aiResponse = await getAiResponse(content);
      const aiMessage: Message = {
        id: Date.now().toString(),
        sender: "ai",
        content: aiResponse,
        timeStamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const aiMessage: Message = {
        id: Date.now().toString(),
        sender: "ai",
        content: "Something went wrong.",
        timeStamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        startTask,
        completeTask,
        getProgress,
        sendMessage,
        messages,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }

  return context;
};
