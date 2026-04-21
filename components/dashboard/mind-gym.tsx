"use client";

import { Brain, Wind, Zap, Dumbbell, Clock, ChevronRight, HeartPulse } from "lucide-react";

interface GymCard {
  title: string;
  subtitle: string;
  duration: string;
  bgColor: string;
  gradientTo: string;
  accentBg: string;
  iconColor: string;
  icon: any;
}

const CARDS: GymCard[] = [
  {
    title: "Breathing Exercises",
    subtitle: "Calm and relax",
    duration: "3-5 minutes",
    bgColor: "#C7E9FF",
    gradientTo: "#E4FFFF",
    accentBg: "bg-white/40",
    iconColor: "text-[#00BCD4]",
    icon: Wind,
  },
  {
    title: "Focus Exercises",
    subtitle: "Boost concentration",
    duration: "5-10 minutes",
    bgColor: "#FEEF7B",
    gradientTo: "#FEF5DC",
    accentBg: "bg-white/40",
    iconColor: "text-[#FBC02D]",
    icon: Zap,
  },
  {
    title: "Muscle Relaxation",
    subtitle: "Release body tension",
    duration: "25-30 minutes",
    bgColor: "#CEC3FF",
    gradientTo: "#F3E8FF",
    accentBg: "bg-white/40",
    iconColor: "text-[#9C27B0]",
    icon: Dumbbell,
  },
  {
    title: "Study Focus Reset",
    subtitle: "Sharpen your mind",
    duration: "3 minutes",
    bgColor: "#FFD1EB",
    gradientTo: "#FAE8FF",
    accentBg: "bg-white/40",
    iconColor: "text-[#E91E63]",
    icon: Brain,
  },
];

export function MindGym() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
          <HeartPulse className="w-6 h-6 text-orange-500" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-gray-900 text-base leading-none mb-1.5">Mind Gym</h2>
          <p className="text-xs text-gray-500 leading-tight">
            Suggests mindfulness and focus activities to keep your mind sharp and calm.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARDS.map((card) => (
          <div
            key={card.title}
            style={{ 
              background: `linear-gradient(to right, ${card.bgColor}, ${card.gradientTo})` 
            }}
            className="p-4 rounded-lg overflow-hidden flex flex-col group cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-bold text-gray-800 leading-tight">{card.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{card.subtitle}</p>
              </div>
            </div>

            <div className={`${card.accentBg} p-3 rounded-lg flex mt-4 items-center justify-between`}>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium">{card.duration}</span>
              </div>
              <button className="bg-white text-gray-900 text-xs font-bold py-1.5 pl-4 pr-3.5 rounded-full flex items-center gap-1 hover:shadow-md transition-shadow">
                Start <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
