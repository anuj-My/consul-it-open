"use client";

import { Target } from "lucide-react";

export function JourneyProgress() {
  const percentage = 35;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-amber-500" />
        <h2 className="font-bold text-gray-900">Journey Progress</h2>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="10"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#f97316"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-orange-500">{percentage}%</span>
            <span className="text-[10px] text-gray-500 font-medium">Completed</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">3</p>
          <p className="text-xs text-gray-500">Tasks Done</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">1</p>
          <p className="text-xs text-gray-500">Milestones</p>
        </div>
      </div>
    </div>
  );
}
