"use client";

import { CheckCircle2, LoaderCircle, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TaskRow, type SessionTask } from "./task-row";

interface Milestone {
  title: string;
  description: string;
  status: "active" | "locked";
  tasks?: SessionTask[];
  taskProgress?: { completed: number; total: number };
}

const BUILD_BASICS_TASKS: SessionTask[] = [
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
    subjectColor: "bg-[#FFF4ED] text-[#EA580C]",
    status: "locked",
  },
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
    subjectColor: "bg-[#FFF4ED] text-[#EA580C]",
    status: "locked",
  },
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
    subjectColor: "bg-[#FFF4ED] text-[#EA580C]",
    status: "continue",
  },
  {
    title: "Solve 20 Maths Question Daily",
    subject: "Maths",
    subjectColor: "bg-[#E7F8F7] text-[#1a9ba1]",
    status: "completed",
    score: 98,
  },
  {
    title: "Watch a Science Concept Video",
    subject: "Video • 10 Mins",
    subjectColor: "bg-[#FDF2F8] text-[#DB2777]",
    status: "completed",
  },
];

const MILESTONES: Milestone[] = [
  {
    title: "Build Basics",
    description:
      "You'll build a strong foundation in foundational math and science principles.",
    status: "active",
    tasks: BUILD_BASICS_TASKS,
    taskProgress: { completed: 3, total: 6 },
  },
  {
    title: "Strengthen Concepts",
    description:
      "Dive deeper into advanced topics to prepare for your board exams.",
    status: "locked",
  },
  {
    title: "Score in Boards",
    description:
      "Achieve target scores in preliminary and final board examinations.",
    status: "locked",
  },
  {
    title: "PCM Stream Selection",
    description:
      "Finalize stream choice based on aptitude and board results.",
    status: "locked",
  },
];

export function SessionsRoadmap() {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gray-100" />

      <div className="space-y-6">
        {MILESTONES.map((milestone, index) => {
          const isActive = milestone.status === "active";
          
          return (
            <div key={milestone.title} className="relative flex gap-8">
              <div className="relative z-10 shrink-0 mt-3">
                {isActive ? (
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)] ring-4 ring-white">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ring-4 ring-white border-2 border-transparent">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#1a9ba1] p-8"
                      : "bg-white border p-6 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg text-gray-900`}>
                      {milestone.title}
                    </h3>
                    {isActive ? (
                      <Badge className="bg-[#E7F8F7] text-[#1a9ba1] hover:bg-[#E7F8F7] border-0 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0">
                        <LoaderCircle className="w-3.5 h-3.5 animate-spin-slow" /> In Progress
                      </Badge>
                    ) : (
                      <Badge variant="ghost" className="text-xs text-gray-400 bg-gray-50 font-bold px-2 py-0.5 flex items-center gap-1 shrink-0">
                        <Lock className="w-3 h-3" /> Locked
                      </Badge>
                    )}
                  </div>

                  <p className={`text-sm mb-6 text-gray-500`}>
                    {milestone.description}
                  </p>

                  {isActive && (
                    <>
                      <div className="mb-6">
                        <div className="flex items-end justify-between mb-2 text-xs">
                          <span className="font-semibold text-gray-800">
                             3 of 6 tasks completed
                          </span>
                          <span className="font-semibold text-[#1a9ba1] text-xs">
                            60%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#1a9ba1] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>

                      {milestone.tasks && (
                        <div className="space-y-4 pt-2">
                          {milestone.tasks.map((task, i) => (
                            <TaskRow key={i} task={task} />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
