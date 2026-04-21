"use client";

import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Recommendation() { 
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#FDF2F8] px-4 py-1 rounded-full mb-4">
        <span className="text-[10px] sm:text-xs text-[#ED4694] font-medium whitespace-nowrap">
          Based on mood log
        </span>
      </div>

      <h2 className="text-lg sm:text-lg font-semibold text-[#ED4694] mb-6">
        Recommended for You
      </h2>

      <div className="flex flex-col items-center text-center w-full">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-1 ring-gray-100 shadow-sm">
          <Image
            src="/images/Counselor Emma.png"
            alt="Emma Watson"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        <h3 className="font-semibold text-gray-900 text-lg mb-0.5">Emma Watson</h3>
        <p className="text-xs text-gray-500 font-medium mb-3">
          (Student Wellbeing Therapist)
        </p>

        <div className="flex items-center gap-1.5 mb-8">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-bold text-amber-500">4.9</span>
          <span className="text-sm text-gray-400 font-medium">(120+ Sessions)</span>
        </div>

        <button className="w-full bg-[#ED4694] hover:bg-[#D43D82] text-white text-sm font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm">
          Book a Therapy Session
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
