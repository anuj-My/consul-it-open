"use client";

import { CheckCircle2, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types/roadmap";

interface TaskRowProps {
  task: Task;
  variant?: "summary" | "detailed";
  isLocked?: boolean;
}

export function TaskRow({ task, variant = "detailed", isLocked = false }: TaskRowProps) {
  const isCompleted = task.isCompleted;
  const isStarted = task.isStarted;
  
  // Decide if we show Continue or Start
  const showContinue = isStarted && !isCompleted && !isLocked; 

  return (
    <div
      className={`group flex items-center gap-4 border rounded-lg p-5 transition-all relative ${
        isLocked 
          ? "bg-[#F5F5F5] border-gray-100" 
          : "bg-white border-gray-200 hover:border-teal-100"
      }`}
    >
      {/* 1. Blur Container */}
      <div className={`flex items-center gap-4 w-full ${isLocked ? "blur-[2.5px] opacity-50 select-none pointer-events-none" : ""}`}>
        
        {/* Left Checkmark/Box */}
        <div className="shrink-0">
          {isCompleted ? (
            <div className="w-6 h-6 rounded bg-teal-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded border-2 border-gray-300 bg-white" />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-sm tracking-tight truncate ${isCompleted ? "text-gray-400 font-medium line-through decoration-gray-300" : "text-gray-800"}`}>
            {task.title}
          </h3>
          <Badge className={`${task.subjectColor} text-[10px] font-bold mt-1 px-3 py-0.5 rounded-full border-0`}>
            {task.subject}
          </Badge>
        </div>

        {/* Right Action: All states as Buttons */}
        <div className="shrink-0 pl-2">
          {task.score ? (
            /* Circular Score (Highest preference) */
            <div className="relative w-14 h-14 shrink-0">
               <svg className="w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="24" fill="none" stroke="#F3F4F6" strokeWidth="4" />
                  <circle
                    cx="28" cy="28" r="24" fill="none" stroke="#1a9ba1" strokeWidth="4"
                    strokeDasharray="150.8" strokeDashoffset="3" strokeLinecap="round"
                  />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                  <span className="text-sm mb-0.5 font-bold text-gray-900">{task.score}%</span>
                  <span className="text-[10px] font-medium text-gray-400 capitalize">Score</span>
               </div>
            </div>
          ) : isCompleted ? (
             /* COMPLETED BUTTON */
             variant === "detailed" ? (
               <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-xs font-bold bg-white transition-opacity">
                  Completed
               </button>
             ) : null // Hide on dashboard
          ) : showContinue ? (
            /* CONTINUE BUTTON */
            <button className="px-5 py-2 rounded-full border border-teal-200 bg-white text-teal-600 text-xs font-semibold hover:bg-teal-50/50 transition-colors">
              Continue
            </button>
          ) : (
            /* START BUTTON (Locked or un-started) */
            <button className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-400 text-xs font-bold">
              Start
            </button>
          )}
        </div>
      </div>

      {/* Locked Center Indicator */}
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
