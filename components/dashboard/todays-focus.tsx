"use client";

import { Target, ArrowRightCircle, Clock } from "lucide-react";
import Image from "next/image";

const TASKS = [
  {
    text: "Understand speed, velocity, and acceleration",
  },
  {
    text: "Solve 5–10 basic numerical problems",
  },
];

export function TodaysFocus() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-stretch">
      <div className="flex-1 bg-white rounded-lg border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-pink-500" />
          <h2 className="font-semibold text-gray-900">Today's Focus!</h2>
        </div>

        <div className="rounded-lg border p-5">
          <h3 className="font-semibold text-gray-900 mb-3">
            Study Motion and Energy Concepts
          </h3>

          <div className="space-y-1">
            {TASKS.map((task, i) => {
              const Icon = i === 0 ? ArrowRightCircle : Clock;
              return (
                <div key={i}>
                  {i > 0 && (
                    <div className="border-t border-dotted border-gray-300 my-2 mx-3" />
                  )}
                  <label className="flex items-center py-2 gap-3 transition-colors">
                    <Icon
                      className={`w-5 h-5 shrink-0 ${i === 0 ? "text-teal-500" : "text-gray-400"}`}
                    />
                    <span className="text-sm text-gray-800 font-medium">
                      {task.text}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-[320px] shrink-0 bg-gradient-to-br from-[#F4FBEB] to-[#F9FEF2] rounded-lg border p-8 flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/Subtract.png"
          alt=""
          width={100}
          height={100}
          className="absolute h-13 w-13 -bottom-2 -left-2 opacity-80"
        />
        <Image
          src="/images/Subtract2.png"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-2  h-13 w-13 -right-2 opacity-80"
        />

        <div className="relative z-10 w-12 h-12 mb-4">
          <Image
            src="/images/Layer 2.png"
            alt="Calm"
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>

        <h3 className="relative z-10 font-semibold text-[#70AD40] text-xl mb-3 tracking-tight">
          You Are Calm Today
        </h3>
        <p className="relative z-10 text-[12px] text-[#475569] leading-relaxed font-medium">
          Staying calm helps you think clearly and make better decisions. Take a
          deep breath and continue your day with a peaceful mind.
        </p>
      </div>
    </div>
  );
}
