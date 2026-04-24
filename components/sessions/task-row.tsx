"use client";

import { CheckCircle2, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types/roadmap";
import { useRoadmapContext } from "@/context/RoadmapContext";

interface TaskRowProps {
  task: Task;
  sessionId: string;
  isLocked?: boolean;
}

export function TaskRow({ task, sessionId, isLocked = false }: TaskRowProps) {
  const isCompleted = task.isCompleted;
  const isStarted = task.isStarted;

  const showContinue = isStarted && !isCompleted && !isLocked;

  const { startTask, completeTask } = useRoadmapContext();

  return (
    <div
      className={`group flex items-center gap-4 border rounded-lg p-5 transition-all relative ${
        isLocked
          ? "bg-[#F5F5F5] border-gray-100"
          : "bg-white border-gray-200 hover:border-teal-100"
      }`}
    >
      <div
        className={`flex items-center gap-4 w-full ${isLocked ? "blur-[2.5px] opacity-50 select-none pointer-events-none" : ""}`}
      >
        <div className="shrink-0">
          {isCompleted ? (
            <div className="w-6 h-6 rounded bg-teal-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div
              className="w-6 h-6 rounded border-2 border-gray-300 bg-white cursor-pointer"
              onClick={() => completeTask(sessionId, task.id)}
            />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-sm tracking-tight truncate ${isCompleted ? "text-gray-400 font-medium line-through decoration-gray-300" : "text-gray-800"}`}
          >
            {task.title}
          </h3>
          <Badge
            className={`${task.subjectColor} text-[10px] font-bold mt-1 px-3 py-0.5 rounded-full border-0`}
          >
            {task.subject}
          </Badge>
        </div>

        <div className="shrink-0 pl-2">
          {isCompleted ? (
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-xs font-bold bg-white transition-opacity">
              Completed
            </button>
          ) : showContinue ? (
            <button
              onClick={() => startTask(sessionId, task.id)}
              className="px-5 py-2 rounded-full border border-teal-200 bg-white text-teal-600 text-xs font-semibold hover:bg-teal-50/50 transition-colors"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => startTask(sessionId, task.id)}
              className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-400 text-xs font-bold"
            >
              Start
            </button>
          )}
        </div>
      </div>

      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <Lock className="w-5 h-5 text-gray-400" />
            <span className="text-xs font-bold text-gray-400">Locked</span>
          </div>
        </div>
      )}
    </div>
  );
}
