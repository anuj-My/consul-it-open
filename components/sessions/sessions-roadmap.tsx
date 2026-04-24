"use client";

import { CheckCircle2, LoaderCircle, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TaskRow } from "./task-row";
import { useRoadmapContext } from "@/context/RoadmapContext";

export function SessionsRoadmap() {
  const {data} = useRoadmapContext()

  const sessions = data.sessions;

  return (
    <div className="relative">
      <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gray-100 hidden sm:block" />

      <div className="space-y-6">
        {sessions.map((session) => {
          const totalTasks = session.tasks.length;
          const completedTasks = session.tasks.filter(t => t.isCompleted).length;
          const progressPercentage = Math.round((completedTasks / totalTasks) * 100);
          
          const isActive = !session.isLocked;
          
          return (
            <div key={session.id} className="relative flex sm:gap-8">
              <div className="relative z-10 shrink-0 mt-3 hidden sm:block">
                {isActive ? (
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)] ring-4 ring-white">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ring-4 ring-white border-2 border-transparent">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div
                  className={`rounded-lg border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#1a9ba1] p-5 sm:p-8 shadow-sm"
                      : "bg-white border p-4 sm:p-6 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg text-gray-900`}>
                      {session.title}
                    </h3>
                    {isActive ? (
                      <Badge className="bg-[#E7F8F7] text-[#1a9ba1] hover:bg-[#E7F8F7] border-0 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0">
                        <LoaderCircle className="w-3.5 h-3.5 animate-spin-slow" /> In Progress
                      </Badge>
                    ) : (
                      <Badge variant="ghost" className="text-xs text-gray-400 bg-gray-50 font-bold px-2 py-0.5 flex items-center gap-1 shrink-0">
                        <Lock className="w-3 h-3" /> Locked
                      </Badge>
                    )}
                  </div>

                  <p className={`text-sm mb-6 text-gray-500`}>
                    {session.description}
                  </p>

                  {isActive && (
                    <>
                      <div className="mb-6">
                        <div className="flex items-end justify-between mb-2 text-xs">
                          <span className="font-semibold text-gray-800">
                             {completedTasks} of {totalTasks} tasks completed
                          </span>
                          <span className="font-semibold text-[#1a9ba1] text-xs">
                            {progressPercentage}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#1a9ba1] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 pt-2">
                        {session.tasks.map((task) => (
                          <TaskRow 
                            key={task.id} 
                            sessionId={session.id}
                            task={task} 
                            variant="detailed" 
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
