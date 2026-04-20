"use client";

import { Sparkles, Star, ArrowRight } from "lucide-react";

export function Recommendation() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-xs text-gray-400 font-medium">Based on mood analysis</span>
        </div>
      </div>

      <h2 className="font-bold text-amber-600 text-center mb-4">
        Recommended for You
      </h2>

      {/* Consultant card */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden mb-3 ring-2 ring-amber-200/50 ring-offset-2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mukund&backgroundColor=fde68a"
            alt="Mukund Tyagi"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-gray-900 text-sm">Mukund Tyagi</h3>
        <p className="text-xs text-gray-500 mb-2">Student Wellbeing Therapist</p>
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-bold text-amber-600">4.2</span>
          <span className="text-xs text-gray-400">(120+ Sessions)</span>
        </div>

        <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-bold py-3 rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md shadow-teal-200/50 flex items-center justify-center gap-2 group">
          Book a Therapy Session
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
