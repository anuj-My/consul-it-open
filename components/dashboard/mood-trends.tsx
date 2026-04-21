"use client";

import { BarChart3, AlertTriangle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const MOOD_DATA = [
  { day: "Mon", value: 60, color: "#f97316" },
  { day: "Tue", value: 85, color: "#f97316" },
  { day: "Wed", value: 45, color: "#ef4444" },
  { day: "Thu", value: 70, color: "#eab308" },
  { day: "Fri", value: 90, color: "#22c55e" },
  { day: "Sat", value: 95, color: "#22c55e" },
  { day: "Sun", value: 50, color: "#eab308" },
];

export function MoodTrends() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-orange-500" />
          <h2 className="font-bold text-gray-900">Mood & Activity Trends</h2>
        </div>
        <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2.5 py-1 rounded-md">
          This Week
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        Embrace well-being & positive occupation based on your daily track history.
      </p>

      {/* Bar chart */}
      <div className="h-[140px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MOOD_DATA} barCategoryGap="25%">
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9ca3af" }}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {MOOD_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-700 leading-relaxed">
          Your mood this week suggests increased stress related to your future.
        </p>
      </div>
    </div>
  );
}
