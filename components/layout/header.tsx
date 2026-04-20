"use client";

import { Search, Bell, MessageSquare } from "lucide-react";

export function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
      {/* Search Bar */}
      <div className="relative w-[400px]">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          placeholder="Search internships, certifications, consultants..."
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" />
        </button>

        {/* Messages */}
        <button className="p-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* Upgrade Plan Button */}
        <button className="bg-[#1C1C1C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-black transition-colors shadow-sm">
          Upgrade Plan
        </button>
      </div>
    </header>
  );
}
