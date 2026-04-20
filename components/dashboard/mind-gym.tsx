"use client";

import { Brain, ArrowRight } from "lucide-react";

interface GymCard {
  title: string;
  subtitle: string;
  duration: string;
  bgFrom: string;
  bgTo: string;
  emoji: string;
}

const CARDS: GymCard[] = [
  {
    title: "Breathing Exercises",
    subtitle: "Calm and relax",
    duration: "3-5 minutes",
    bgFrom: "from-purple-500",
    bgTo: "to-violet-600",
    emoji: "🌬️",
  },
  {
    title: "Focus Exercises",
    subtitle: "Boost concentration",
    duration: "5-10 minutes",
    bgFrom: "from-emerald-400",
    bgTo: "to-teal-500",
    emoji: "🎯",
  },
  {
    title: "Muscle Relaxation",
    subtitle: "Release body tension",
    duration: "20-30 minutes",
    bgFrom: "from-teal-400",
    bgTo: "to-cyan-500",
    emoji: "💆",
  },
  {
    title: "Study Focus Reset",
    subtitle: "Sharpen your mind",
    duration: "3 minutes",
    bgFrom: "from-rose-400",
    bgTo: "to-pink-500",
    emoji: "📖",
  },
];

export function MindGym() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <Brain className="w-5 h-5 text-purple-600" />
        <h2 className="font-bold text-gray-900">Mind Gym</h2>
      </div>
      <p className="text-xs text-gray-500 mb-5">
        Suggested brain, body and focus exercises to keep you strong and sharp.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className={`bg-gradient-to-br ${card.bgFrom} ${card.bgTo} rounded-xl p-4 text-white relative overflow-hidden group hover:shadow-lg hover:shadow-current/10 transition-all cursor-pointer`}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-4 -mt-4 blur-xl" />

            <div className="text-2xl mb-2">{card.emoji}</div>
            <h3 className="text-sm font-bold mb-0.5 leading-tight">{card.title}</h3>
            <p className="text-[10px] text-white/70 mb-3">{card.subtitle}</p>

            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/60 flex items-center gap-1">
                ⏱ {card.duration}
              </span>
              <button className="flex items-center gap-1 text-[10px] font-bold text-white bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-lg transition-colors">
                Start <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
