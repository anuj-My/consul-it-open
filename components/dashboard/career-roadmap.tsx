"use client";

import { Map, Lock, CheckCircle2, Target } from "lucide-react";

const MILESTONES = [
  { name: "Build Basics", status: "completed" as const },
  { name: "Strengthen Concepts", status: "locked" as const },
  { name: "Score in Boards", status: "locked" as const },
  { name: "PCM Stream", status: "locked" as const },
];

export function CareerRoadmap() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <Map className="w-5 h-5 text-teal-600" />
          <h2 className="font-semibold text-gray-900">Career Roadmap</h2>
        </div>
        <button className="bg-teal-50/60 text-teal-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-teal-100/60 transition-colors">
          View Full Roadmap
        </button>
      </div>

      <div className="relative mb-8 px-4">
        <div className="absolute top-[18px] left-[5%] right-[5%] h-0.5 bg-gray-100" />
        <div className="absolute top-[18px] left-[5%] w-[15%] h-0.5 bg-teal-500" />

        <div className="flex justify-between items-start relative z-10">
          {MILESTONES.map((m) => {
            const isCompleted = m.status === "completed";
            return (
              <div key={m.name} className="flex flex-col items-center gap-3 w-32">
                {isCompleted ? (
                  <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-100">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
                  </div>
                )}
                <span className={`text-[11px] font-bold text-center tracking-tight ${isCompleted ? "text-gray-800" : "text-gray-500"}`}>
                  {m.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#F0F9F6] rounded-xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-teal-500" strokeWidth={2.5} />
          <span className="text-sm font-medium text-teal-500">
            Next Milestone: Strengthen Concepts
          </span>
        </div>
        <span className="text-sm font-bold text-teal-500">65%</span>
      </div>
    </div>
  );
}
