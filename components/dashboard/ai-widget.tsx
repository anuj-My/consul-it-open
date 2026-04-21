"use client";

import {  ArrowUpRight, Send } from "lucide-react";
import Image from "next/image";
import { Textarea } from "../ui/textarea";

const QUICK_PROMPTS = [
  "What are the future benefits of choosing PCM in 11th?",
  "How to balance board exams and competitive exams?",
];

export function AIWidget() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
                     <Image src="/images/logo.svg" alt="ConsulTOpen AI" className="w-6 h-6 object-cover" width={32} height={32} />
          
        </div>
        <h2 className="font-semibold text-lg text-gray-900">ConsulTOpen AI</h2>
      </div>

      <div className="flex gap-3 mb-4 overflow-x-auto pb-1 justify-end">
        {QUICK_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-gray-50/50 text-xs text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-all whitespace-nowrap min-w-fit group"
          >
            <span className="line-clamp-1">{prompt}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="relative">
        <Textarea
          placeholder="Type your specific question here..."
          className="resize-none w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 bg-gray-50/50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 transition-all"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center hover:from-teal-600 hover:to-emerald-600 transition-all shadow-sm">
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
