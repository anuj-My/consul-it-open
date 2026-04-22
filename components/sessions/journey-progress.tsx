"use client";

import { Target } from "lucide-react";

export function JourneyProgress() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
            <Target className="w-4 h-4 text-orange-500" />
          </div>
          <h2 className="font-bold text-gray-800 tracking-tight">Journey Progress</h2>
        </div>

        {/* Donut Chart */}
        <div className="flex justify-center mb-10">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#F1F5F9"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#F97316"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="314.159"
                strokeDashoffset="204.2" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
              <span className="text-3xl font-black text-orange-500">35%</span>
              <span className="text-[11px] font-bold text-gray-400 mt-2">Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100" />

      {/* Stats Section with Divider */}
      <div className="grid grid-cols-2 divide-x divide-gray-100 py-6">
        <div className="text-center px-2">
          <p className="text-xl font-bold text-gray-900 mb-0.5">3</p>
          <p className="text-[11px] font-bold text-gray-400">Tasks Done</p>
        </div>
        <div className="text-center px-2">
          <p className="text-xl font-bold text-gray-900 mb-0.5">1</p>
          <p className="text-[11px] font-bold text-gray-400">Milestones</p>
        </div>
      </div>
    </div>
  );
}
