"use client";

export function GreetingBanner() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-teal-500">
        Good morning, Alex! <span className="inline-block animate-wave">👋</span>
      </h1>

      <div className="relative overflow-hidden bg-gradient-to-r from-teal-50 to-emerald-50/30 rounded-xl flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-500" />
        <div className="px-8 py-5">
          <p className="text-gray-700 text-base font-medium">
            &quot;The future belongs to those who believe in the beauty of their dreams.&quot;
          </p>
          <p className="text-gray-500 text-xs font-semibold mt-2 flex items-center gap-2">
            <span className="w-4 h-px bg-gray-500" /> Eleanor Roosevelt
          </p>
        </div>
      </div>
    </div>
  );
}
