"use client";

import { Star, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface RecommendationProps {
  variant?: "pink" | "emerald";
  badgeText?: string;
  title: string;
  description?: string;
  consultant: {
    name: string;
    role: string;
    image: string;
    rating: number;
    sessions?: string;
  };
  buttonText: string;
  showSpecialHeader?: boolean;
}

export function Recommendation({
  variant = "pink",
  badgeText,
  title,
  description,
  consultant,
  buttonText,
  showSpecialHeader = false,
}: RecommendationProps) {
  const isPink = variant === "pink";
  const mainColor = isPink ? "#ED4694" : "#10B981";
  const bgColor = isPink ? "bg-[#FDF2F8]" : "bg-[#E7F8F7]";

  return (
    <div className={!isPink ? "relative rounded-lg border overflow-hidden bg-white p-6 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-white to-white" : "w-full"}>
      
      {showSpecialHeader && (
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-emerald-500" />
          <h2 className="font-bold text-emerald-500 tracking-tight">Special Recommendation</h2>
        </div>
      )}

      <div className="flex flex-col items-center text-center">
        {badgeText && (
          <div className={`${bgColor} px-4 py-1 rounded-full mb-4`}>
            <span className={`text-[10px] sm:text-xs font-medium whitespace-nowrap`} style={{ color: mainColor }}>
              {badgeText}
            </span>
          </div>
        )}

        <h2 className={`font-bold tracking-tight mb-2 ${isPink ? 'text-lg sm:text-lg' : 'text-xl text-gray-900'}`} style={{ color: isPink ? mainColor : undefined }}>
          {title}
        </h2>

        {description && (
          <p className="text-sm text-gray-500 mb-6 max-w-[240px] leading-relaxed">
            {description}
          </p>
        )}

        <div className={`w-full flex flex-col items-center p-6 ${!isPink ? 'bg-white rounded-lg border mb-6' : ''}`}>
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-1 ring-gray-100 shadow-sm shrink-0">
            <Image
              src={consultant.image}
              alt={consultant.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          <h3 className="font-bold text-gray-900 text-lg mb-0.5">{consultant.name}</h3>
          <p className="text-xs text-gray-500 font-medium mb-3">
            {consultant.role}
          </p>

          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-500 font-medium mr-1">Rating</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-bold text-gray-900">{consultant.rating}</span>
            {consultant.sessions && (
              <span className="text-sm text-gray-400 font-medium ml-1">{consultant.sessions}</span>
            )}
          </div>
        </div>

        <button 
          className="w-full text-white text-sm font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
          style={{ backgroundColor: mainColor }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
