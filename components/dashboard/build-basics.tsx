"use client";

import { ClipboardCheck, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type TaskStatus = "locked" | "continue" | "completed";

interface BuildTask {
  title: string;
  subject: string;
  subjectColor: string;
  status: TaskStatus;
  score?: number;
}

const TASKS: BuildTask[] = [
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
    subjectColor: "bg-pink-100 text-pink-600",
    status: "locked",
  },
  {
    title: "Practice Algebra Problems Daily",
    subject: "Maths",
    subjectColor: "bg-pink-100 text-pink-600",
    status: "locked",
  },
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
    subjectColor: "bg-blue-100 text-blue-600",
    status: "continue",
  },
  {
    title: "Solve 20 Maths Question Daily",
    subject: "Maths",
    subjectColor: "bg-orange-100 text-orange-600",
    status: "completed",
    score: 98,
  },
  {
    title: "Watch a Science Concept Video",
    subject: "Exploration",
    subjectColor: "bg-red-100 text-red-600",
    status: "completed",
  },
  {
    title: "Follow a Weekly Study Plan",
    subject: "Habits",
    subjectColor: "bg-green-100 text-green-600",
    status: "completed",
  },
];

export function BuildBasics() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <ClipboardCheck className="w-5 h-5 text-teal-600" />
        <h2 className="font-bold text-gray-900">Build Basics</h2>
      </div>

      <div className="space-y-2.5">
        {TASKS.map((task, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
              task.status === "locked"
                ? "bg-gray-50/50 border-gray-100 opacity-60"
                : task.status === "continue"
                ? "bg-white border-gray-200 hover:border-teal-200 hover:shadow-sm"
                : "bg-white border-gray-100"
            }`}
          >
            {/* Status Icon */}
            <div className="shrink-0">
              {task.status === "locked" ? (
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <Lock className="w-3 h-3 text-gray-400" />
                </div>
              ) : task.status === "continue" ? (
                <div className="w-6 h-6 rounded border-2 border-gray-300" />
              ) : (
                <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium ${
                  task.status === "completed"
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {task.title}
              </p>
              <Badge
                variant="secondary"
                className={`${task.subjectColor} text-[10px] font-bold px-2 py-0.5 mt-1 border-0`}
              >
                {task.subject}
              </Badge>
            </div>

            {/* Action */}
            <div className="shrink-0">
              {task.status === "locked" ? (
                <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Locked
                </span>
              ) : task.status === "continue" ? (
                <button className="text-xs text-teal-600 font-bold hover:text-teal-700 transition-colors flex items-center gap-1">
                  Continue <ArrowRight className="w-3 h-3" />
                </button>
              ) : task.score ? (
                <div className="w-11 h-11 rounded-full border-[3px] border-teal-500 flex items-center justify-center">
                  <div className="text-center leading-tight">
                    <span className="text-xs font-bold text-teal-700">{task.score}%</span>
                  </div>
                </div>
              ) : (
                <Badge variant="outline" className="text-[10px] text-gray-500 border-gray-300 font-medium">
                  Completed
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
