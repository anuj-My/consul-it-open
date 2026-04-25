"use client";

import { ArrowUpRight, Loader, Send } from "lucide-react";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { QUICK_PROMPTS } from "@/data/mock-ai-responses";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

export function AIWidget() {
  const { messages, sendMessage, isLoading } = useGlobalContext();
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleSuggestionChip = (chip: string) => {
    if (!isLoading) {
      sendMessage(chip);
      setInput("");
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
          <Image
            src="/images/logo.svg"
            alt="ConsulTOpen AI"
            className="w-6 h-6 object-cover"
            width={32}
            height={32}
          />
        </div>
        <h2 className="font-semibold text-lg text-gray-900">ConsulTOpen AI</h2>
      </div>

      <div
        className="space-y-2 mb-4 max-h-60 overflow-y-auto"
        ref={containerRef}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-lg text-sm w-fit max-w-[80%] ${
              msg.sender === "user"
                ? "bg-teal-500 text-white ml-auto"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.content}
            <div className="text-[10px] text-white mt-1 opacity-85">
              {new Date(msg.timeStamp).toLocaleString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="mb-3 text-xs text-gray-500 flex items-center gap-2">
          <span className="animate-pulse">AI is typingâ€¦</span>
          <Loader className="animate-spin" />
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-4 overflow-x-auto pb-1 justify-end scrollbar-hide">
        {QUICK_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-gray-50/50 text-xs ${isLoading ? "text-gray-400 cursor-not-allowed opacity-60" : "text-gray-600 hover:bg-gray-100 hover:border-gray-300"} transition-all group`}
            disabled={isLoading}
            onClick={() => handleSuggestionChip(prompt)}
          >
            <span className="line-clamp-1">{prompt}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors shrink-0" />
          </button>
        ))}
      </div>

      <form className="relative" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Type your specific question here..."
          className="resize-none w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 bg-gray-50/50 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-linear-to-br from-teal-500 to-emerald-500 flex items-center justify-center hover:from-teal-600 hover:to-emerald-600 transition-all ${isLoading ? "bg-gray-400 cursor-not-allowed opacity-60" : ""}`}
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </form>
    </div>
  );
}
