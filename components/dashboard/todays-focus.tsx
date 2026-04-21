"use client";

import { Target, Atom, Calculator } from "lucide-react";

const TASKS = [
  {
    text: "Understand speed, velocity, and acceleration",
    icon: Atom,
    done: false,
  },
  {
    text: "Solve 5–10 basic numerical problems",
    icon: Calculator,
    done: false,
  },
];

export function TodaysFocus() {
  return (
    <div className="flex gap-5 items-stretch">
      <div className="flex-1 bg-white rounded-lg border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-pink-500" />
          <h2 className="font-semibold text-gray-900">Today's Focus!</h2>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">
          Study Motion and Energy Concepts
        </h3>

        <div className="space-y-3">
          {TASKS.map((task, i) => (
            <label
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="w-5 h-5 mt-0.5 rounded-full border-2 border-gray-300 group-hover:border-teal-400 transition-colors shrink-0" />
              <span className="text-sm text-gray-700">{task.text}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="w-[320px] shrink-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-lg border p-5 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 mb-3 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-200/60 to-teal-200/60 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
            <span className="text-3xl">🧘</span>
          </div>
        </div>
        <h3 className="font-bold text-emerald-800 text-sm mb-1">
          You Are Calm Today
        </h3>
        <p className="text-[11px] text-emerald-600/80 leading-relaxed">
          Mindfulness levels indicate a positive state, ideal for focused learning.
        </p>
      </div>
    </div>
  );
}
