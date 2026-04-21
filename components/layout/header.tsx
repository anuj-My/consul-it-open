"use client";

import { Search, Bell, MessageSquare, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-md text-gray-400 hover:text-gray-500 lg:hidden transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-md hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all"
            placeholder="Search internships, certifications, consultants..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button className="relative p-2 rounded-full text-gray-600 hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" />
        </button>

        <button className="p-2 rounded-full text-gray-600 hover:bg-gray-50 transition-colors hidden sm:block">
          <MessageSquare className="w-5 h-5" />
        </button>

        <button className="bg-[#1C1C1C] text-white px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-black transition-colors whitespace-nowrap">
          Upgrade Plan
        </button>
      </div>
    </header>
  );
}
