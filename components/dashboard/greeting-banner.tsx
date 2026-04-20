"use client";

export function GreetingBanner() {
  return (
    <div className="space-y-3">
      {/* Greeting */}
      <h1 className="text-2xl font-bold text-gray-900">
        Good morning, Alex! <span className="inline-block animate-wave">👋</span>
      </h1>

      {/* Inspirational Quote */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl px-5 py-3.5">
        <p className="text-white text-sm font-medium leading-relaxed">
          &quot;The future belongs to those who believe in the beauty of their dreams.&quot;
        </p>
        <p className="text-white/70 text-xs mt-1">— Eleanor Roosevelt</p>
      </div>
    </div>
  );
}
