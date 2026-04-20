"use client";

import { BookOpen } from "lucide-react";

const SKILLS = [
  { name: "Math Problem Solving", value: 80 },
  { name: "Science Concepts", value: 70 },
];

export function SkillsProgress() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen className="w-5 h-5 text-teal-600" />
        <h2 className="font-bold text-gray-900">Skills Progress</h2>
      </div>

      <div className="space-y-4">
        {SKILLS.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700 font-medium">{skill.name}</span>
              <span className="text-sm font-bold text-gray-900">{skill.value}%</span>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  i === 0 ? "bg-teal-500" : "bg-amber-500"
                }`}
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
