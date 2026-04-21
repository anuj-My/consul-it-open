import { Square, CheckSquare, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type TaskStatus = "locked" | "continue" | "completed";

interface BuildTask {
  title: string;
  subject: string;
  status: TaskStatus;
}

const TASKS: BuildTask[] = [
  {
    title: "Units",
    subject: "Test",
    status: "locked",
  },
  {
    title: "Practice Algebra Problems Daily",
    subject: "Maths",
    status: "locked",
  },
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
    status: "continue",
  },
  {
    title: "Solve 20 Maths Question Daily",
    subject: "Maths",
    status: "completed",
  },
  {
    title: "Watch a Science Concept Video",
    subject: "Exploration",
    status: "completed",
  },
  {
    title: "Follow a Weekly Study Plan",
    subject: "Habbit",
    status: "completed",
  },
];

const SUBJECT_COLORS: Record<string, string> = {
  Science: "bg-[#FDF8E6] text-[#A18131] border-0",
  Maths: "bg-[#E7F9EF] text-[#2D9B63] border-0",
  Exploration: "bg-[#E7F9EF] text-[#2D9B63] border-0",
  Habbit: "bg-[#FCEEF4] text-[#C44D7D] border-0",
  Test: "bg-[#EBEAFE] text-[#6366F1] border-0",
};

export function BuildBasics() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <CheckSquare className="w-6 h-6 text-teal-500" strokeWidth={2.5} />
        <h2 className="font-bold text-gray-900 text-lg">Build Basics</h2>
      </div>

      <div className="space-y-4">
        {TASKS.map((task, i) => {
          const isLocked = task.status === "locked";
          const isContinue = task.status === "continue";
          const isCompleted = task.status === "completed";

          return (
            <div
              key={i}
              className={`relative overflow-hidden group border rounded-lg p-5 transition-all ${
                isLocked 
                  ? "bg-[#F5F5F5] border-gray-100 flex items-center justify-between" 
                  : "bg-white border-gray-200"
              }`}
            >
              <div className={`flex items-center gap-4 w-full ${isLocked ? "blur-[2.5px] opacity-40 select-none pointer-events-none" : ""}`}>
                <div className="shrink-0">
                  {isCompleted ? (
                    <div className="w-6 h-6 rounded bg-teal-400 flex items-center justify-center">
                      <CheckSquare className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <Square className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className={`font-bold text-sm tracking-tight ${isCompleted ? "text-gray-400 font-medium line-through" : "text-gray-800"}`}>
                    {task.title}
                  </h3>
                  <Badge className={`${SUBJECT_COLORS[task.subject]} text-[11px] font-bold mt-1 px-3 py-0.5 rounded-full`}>
                    {task.subject}
                  </Badge>
                </div>

                {!isLocked && (
                  <div className="shrink-0">
                    {isContinue ? (
                      <button className="px-4 py-2 rounded-full border border-teal-200 bg-white text-teal-600 text-sm font-semibold hover:bg-teal-50/50 transition-colors">
                        Continue
                      </button>
                    ) : isCompleted ? (
                      null
                    ) : (
                      <button className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-400 text-sm font-bold">
                        Start
                      </button>
                    )}
                  </div>
                )}
              </div>

              {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                   <div className="flex flex-col items-center gap-1">
                      <Lock className="w-5 h-5 text-gray-400" />
                      <span className="text-xs font-bold text-gray-400">Locked</span>
                   </div>
                   
                   <div className="absolute right-5">
                      <div className="px-6 py-2 rounded-full border border-teal-500 bg-white/50 text-teal-500 text-sm font-bold blur-[1px]">
                        Start
                      </div>
                   </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
