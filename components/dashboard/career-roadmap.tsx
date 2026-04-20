"use client";

import { MapPin, Lock, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const MILESTONES = [
  { name: "Build Basics", status: "completed" as const },
  { name: "Strengthen Concepts", status: "current" as const },
  { name: "Score in Boards", status: "locked" as const },
  { name: "PCM Stream", status: "locked" as const },
];

export function CareerRoadmap() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-teal-600" />
          <h2 className="font-bold text-gray-900">Career Roadmap</h2>
        </div>
        <button className="text-sm text-teal-600 font-semibold hover:text-teal-700 transition-colors hover:underline underline-offset-2">
          View Full Roadmap
        </button>
      </div>

      {/* Timeline */}
      <div className="flex items-center justify-between mb-6 px-2">
        {MILESTONES.map((m, i) => (
          <div key={m.name} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-2 relative z-10">
              {m.status === "completed" ? (
                <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-200">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              ) : m.status === "current" ? (
                <div className="w-9 h-9 rounded-full bg-white border-[3px] border-teal-500 flex items-center justify-center shadow-md shadow-teal-100">
                  <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
              )}
              <span
                className={`text-xs font-medium whitespace-nowrap ${
                  m.status === "completed"
                    ? "text-teal-700"
                    : m.status === "current"
                    ? "text-teal-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {m.name}
              </span>
            </div>
            {/* Connector line */}
            {i < MILESTONES.length - 1 && (
              <div className="flex-1 h-0.5 mx-3 mt-[-20px]">
                <div
                  className={`h-full rounded-full ${
                    m.status === "completed"
                      ? "bg-teal-500"
                      : "bg-gray-200"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3 bg-emerald-50/60 rounded-xl px-4 py-3">
        <span className="text-xs font-semibold text-emerald-700 whitespace-nowrap">
          🎯 Next Milestone: Strengthen Concepts
        </span>
        <div className="flex-1">
          <Progress value={65} className="h-2 bg-emerald-100 [&>[data-slot=indicator]]:bg-emerald-500" />
        </div>
        <span className="text-xs font-bold text-emerald-700">65%</span>
      </div>
    </div>
  );
}
