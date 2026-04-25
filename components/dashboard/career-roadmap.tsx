"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { Map, Lock, CheckCircle2, Target } from "lucide-react";

export function CareerRoadmap() {
  const { getProgress, data } = useGlobalContext();
  const { progressPercentage, completedTasks, completedSessions } =
    getProgress();

  const nextSession = data.sessions.find((s) => {
    return !s.tasks.every((t) => t.isCompleted);
  });

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <Map className="w-5 h-5 text-teal-600" />
          <h2 className="font-semibold text-gray-900">Career Roadmap</h2>
        </div>
        <button className="bg-teal-50/60 text-teal-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-teal-100/60 transition-colors">
          View Full Roadmap
        </button>
      </div>

      <div className="relative mb-8 px-4 overflow-x-auto pb-4 scrollbar-hide">
        <div className="absolute top-[18px] left-0 right-0 h-0.5 bg-gray-100 min-w-[500px]" />
        <div
          className="absolute top-[18px] left-0 h-0.5 bg-teal-500"
          style={{ width: `${progressPercentage}%` }}
        />

        <div className="flex justify-between items-start relative z-10 min-w-[500px]">
          {data.sessions.map((s) => {
            const isCompleted = s.tasks.every((t) => t.isCompleted);
            return (
              <div key={s.id} className="flex flex-col items-center gap-3 w-32">
                {isCompleted ? (
                  <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ) : !s.isLocked && !isCompleted ? (
                  <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center shadow-md shadow-orange-100">
                    <Target className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
                  </div>
                )}
                <span
                  className={`text-[11px] font-bold text-center tracking-tight ${isCompleted ? "text-gray-800" : "text-gray-500"}`}
                >
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#F0F9F6] rounded-lg px-5 border py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-teal-500" strokeWidth={2.5} />
          <span className="text-sm font-medium text-teal-500">
            Next Milestone:{" "}
            {nextSession ? nextSession.title : "All Sessions Compelted"}
          </span>
        </div>
        <span className="text-sm font-bold text-teal-500">
          {progressPercentage}%
        </span>
      </div>
    </div>
  );
}
