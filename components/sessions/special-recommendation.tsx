"use client";

import { Sparkles, Star, ArrowRight } from "lucide-react";

export function SpecialRecommendation() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Sparkles className="w-5 h-5 text-red-500" />
        <h2 className="font-bold text-red-500">Special Recommendation</h2>
      </div>

      <div className="flex flex-col items-center text-center">
        <h3 className="font-bold text-gray-900 text-lg mb-1">Need Help Planning?</h3>
        <p className="text-sm text-gray-500 mb-5 max-w-[220px]">
          Discuss your current progress and board preparation strategy.
        </p>

        {/* Consultant Card */}
        <div className="w-full bg-gray-50 rounded-xl p-5 mb-5">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden mb-3 ring-2 ring-amber-200/50 ring-offset-2">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mukund&backgroundColor=fde68a"
                alt="Mukund Tyagi"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-gray-900">Mukund Tyagi</h4>
            <p className="text-xs text-gray-500 mb-2">(Academic Planner & Counsellor)</p>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">Rating</span>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-bold text-amber-600">4.2</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-bold py-3.5 rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all shadow-md shadow-teal-200/50 flex items-center justify-center gap-2 group">
          Book a Session
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
