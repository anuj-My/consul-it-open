"use client";

import { Activity, AlertTriangle } from "lucide-react";
import Image from "next/image";

const MOOD_HISTORY = [
  { day: "Mon", height: "120px", color: "bg-gradient-to-t from-[#9760CE] to-[#C7A3E5]", icon: "/images/Layer 1.svg" },
  { day: "Tue", height: "120px", color: "bg-gradient-to-t from-[#70AD40] to-[#9CD072]", icon: "/images/calm 1.svg" },
  { day: "Wed", height: "120px", color: "bg-gradient-to-t from-[#D82675] to-[#F18EB8]", icon: "/images/Group 427319065.svg" },
  { day: "Thu", height: "120px", color: "bg-gradient-to-t from-[#00BEBF] to-[#6EE7E7]", icon: "/images/Group 427319068.svg" },
  { day: "Fri", height: "120px", color: "bg-gradient-to-t from-[#EF4D4D] to-[#FF9090]", icon: "/images/Group 427319066.svg" },
  { day: "Sat", height: "120px", isPlaceholder: true },
  { day: "Sun", height: "120px", isPlaceholder: true },
];

export function MoodTrends() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div>

      <div className="flex items-center justify-between mb-1">
        <div className="flex gap-3">
          <div className="mt-1">
            <Activity className="w-5 h-5 text-[#E91E63]" />
          </div>
          
            <h2 className="font-semibold text-gray-900 text-base leading-tight">Mood & Activity Trends</h2>
            
        </div>
        <button className="text-xs font-medium text-gray-900 border border-gray-100 rounded-md px-2 py-1.5 hover:bg-gray-50 transition-colors">
          This Week
        </button>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
              Emotional wellbeing & platform engagement based on your daily check-ins.
            </p>
      </div>

      <div className="flex items-end justify-between px-2 mb-4 mt-5">
        {MOOD_HISTORY.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-end h-full w-8">
            {!item.isPlaceholder && (
              <div className="relative w-6 h-6 z-10 shrink-0 mb-1">
                <Image
                  src={item.icon}
                  alt={item.day}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            <div 
              className={`w-[24px] rounded-sm relative transition-all duration-700 ease-out ${
                item.isPlaceholder 
                  ? "bg-gray-100" 
                  : item.color
              }`}
              style={{ height: item.height }}
            />
            
            <span className="text-sm font-medium text-[#94a3b8] mt-3 whitespace-nowrap">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 mt-6">
        <div className="mt-1">
          <AlertTriangle className="w-5 h-5 text-orange-500" />
        </div>
        <p className="text-sm text-[#334155] leading-relaxed font-medium">
          Your mood this week suggests increased stress related to your future.
        </p>
      </div>
    </div>
  );
}
