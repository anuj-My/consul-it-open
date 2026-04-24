"use client";

import { initialRoadmapData } from "@/data/data";
import { RoadmapData, Session, Task } from "@/types/roadmap";
import { createContext, useContext, useEffect, useState } from "react";

interface RoadmapContextType {
  data: RoadmapData;
  startTask: (sessionId: string, taskId: string) => void;
  completeTask: (sessionId: string, taskId: string) => void;
  getProgress: () => {
    progressPercentage: number;
    completedTasks: number;
    completedSessions: number;
  };
}

const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);

const RoadmapProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<RoadmapData>(initialRoadmapData);

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

  return (
    <RoadmapContext.Provider
      value={{ data, startTask, completeTask, getProgress }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};

export default RoadmapProvider;

export const useRoadmapContext = () => {
  const context = useContext(RoadmapContext);

  if (!context) {
    throw new Error("useRoadmapContext must be used within RoadmapProvider");
  }

  return context;
};
