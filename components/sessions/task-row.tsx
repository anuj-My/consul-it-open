"use client";

import { CheckCircle2, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type TaskStatus = "locked" | "continue" | "completed";

export interface SessionTask {
  title: string;
  subject: string;
  subjectColor: string;
  status: TaskStatus;
  score?: number;
}

export function TaskRow({ task }: { task: SessionTask }) {
  const isLocked = task.status === "locked";
  const isContinue = task.status === "continue";
  const isCompleted = task.status === "completed";

  return (
    <div
      className={`group flex items-center gap-4 p-4 rounded-lg border transition-all ${
        isLocked
          ? "bg-gray-50/50 border-gray-100"
          : "bg-white border-gray-100 hover:border-teal-100 hover:shadow-md hover:shadow-teal-50/50"
      }`}
    >
      <div className="shrink-0">
        {isCompleted ? (
          <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        ) : (
          <div className={`w-6 h-6 rounded-md border-2 ${isLocked ? "border-gray-200 bg-gray-50" : "border-gray-300 bg-white"}`} />
        )}
      </div>

      <div className={`flex-1 min-w-0 ${isLocked ? "relative" : ""}`}>
        <div className="flex flex-col">
          <p
            className={`text-sm font-bold tracking-tight mb-1 ${
              isLocked ? "text-gray-400 blur-[1.5px] select-none" : "text-gray-800"
            } ${isCompleted || task.score ? "line-through opacity-50" : ""}`}
          >
            {task.title}
          </p>
          <Badge
            variant="secondary"
            className={`${task.subjectColor} text-[10px] font-bold px-2.5 py-0.5 w-fit border-0 rounded-full`}
          >
            {task.subject}
          </Badge>
        </div>

        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="flex items-center gap-1.5 opacity-60">
                <Lock className="w-3.5 h-3.5 text-gray-400" strokeWidth={2.5} />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Locked</span>
             </div>
          </div>
        )}
      </div>

      <div className="shrink-0 pl-2">
        {isLocked ? (
          <button className=" text-teal-500 border border-teal-500 text-xs font-bold px-6 py-2 rounded-full transition-all active:scale-95">
            Start
          </button>
        ) : isContinue ? (
          <button className="border-2 border-teal-50 hover:bg-teal-50/30 text-teal-600 text-xs font-medium px-5 py-2 rounded-full transition-all active:scale-95">
            Continue
          </button>
        ) : task.score ? (
          <div className="relative w-14 h-14 shrink-0">
             <svg className="w-full h-full -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="#F3F4F6"
                  strokeWidth="4"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="#1a9ba1"
                  strokeWidth="4"
                  strokeDasharray="150.8"
                  strokeDashoffset="3"
                  strokeLinecap="round"
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                <span className="text-sm mb-0.5 font-bold text-gray-900">98%</span>
                <span className="text-[10px] font-medium text-gray-400 capitalize">Score</span>
             </div>
          </div>
        ) : (
          <button className="border border-gray-200 text-gray-400 text-xs font-medium px-4 py-2 rounded-full pointer-events-none">
            Completed
          </button>
        )}
      </div>
    </div>
  );
}
