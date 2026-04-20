"use client";

import {
  CheckCircle2,
  Lock,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type TaskStatus = "locked" | "continue" | "completed";

interface SessionTask {
  title: string;
  subject: string;
  subjectColor: string;
  status: TaskStatus;
  score?: number;
}

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
    subjectColor: "bg-pink-100 text-pink-600",
    status: "locked",
  },
  {
    title: "Study Motion and Energy Concepts",
    subject: "Science",
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
    subject: "Video • 10 Mins",
    subjectColor: "bg-green-100 text-green-600",
    status: "completed",
  },
];

const MILESTONES: Milestone[] = [
  {
    title: "Build Basics",
    description:
      "You'll built a strong foundation in foundational math and science principles.",
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

function TaskRow({ task }: { task: SessionTask }) {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
        task.status === "locked"
          ? "bg-gray-50/80 border-gray-100 opacity-70"
          : task.status === "continue"
          ? "bg-white border-gray-200"
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
          <div className="flex items-center gap-3">
            <Badge className="bg-teal-500 hover:bg-teal-600 text-white text-[10px] font-bold px-3 py-1 border-0 rounded-full">
              Start
            </Badge>
            <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
              <Lock className="w-3 h-3" /> Locked
            </span>
          </div>
        ) : task.status === "continue" ? (
          <button className="text-sm text-teal-600 font-bold hover:text-teal-700 transition-colors flex items-center gap-1">
            Continue
          </button>
        ) : task.score ? (
          <div className="w-12 h-12 rounded-full border-[3px] border-teal-500 flex items-center justify-center">
            <div className="text-center leading-tight">
              <span className="text-xs font-bold text-teal-700">
                {task.score}%
              </span>
              <p className="text-[8px] text-gray-400">Score</p>
            </div>
          </div>
        ) : (
          <Badge
            variant="outline"
            className="text-[10px] text-gray-500 border-gray-300 font-medium"
          >
            Completed
          </Badge>
        )}
      </div>
    </div>
  );
}

export function SessionsRoadmap() {
  return (
    <div className="space-y-4">
      {MILESTONES.map((milestone, index) => (
        <div key={milestone.title} className="flex gap-4">
          {/* Timeline dot */}
          <div className="flex flex-col items-center pt-6">
            {milestone.status === "active" ? (
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shadow-md shadow-teal-200 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
            )}
            {index < MILESTONES.length - 1 && (
              <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-6">
            <div
              className={`rounded-2xl border p-6 ${
                milestone.status === "active"
                  ? "bg-white border-teal-200 shadow-sm"
                  : "bg-white border-gray-100"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900 text-lg">
                  {milestone.title}
                </h3>
                {milestone.status === "active" ? (
                  <Badge className="bg-teal-50 text-teal-600 hover:bg-teal-100 border-0 text-xs font-semibold gap-1">
                    <RefreshCw className="w-3 h-3" /> In Progress
                  </Badge>
                ) : (
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {milestone.description}
              </p>

              {/* Task progress */}
              {milestone.taskProgress && (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      {milestone.taskProgress.completed} of{" "}
                      {milestone.taskProgress.total} tasks completed
                    </span>
                    <span className="text-sm font-bold text-teal-600">
                      {Math.round(
                        (milestone.taskProgress.completed /
                          milestone.taskProgress.total) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={
                      (milestone.taskProgress.completed /
                        milestone.taskProgress.total) *
                      100
                    }
                    className="h-2.5 bg-gray-100 [&>[data-slot=indicator]]:bg-teal-500"
                  />
                </div>
              )}

              {/* Tasks list */}
              {milestone.tasks && (
                <div className="space-y-2.5">
                  {milestone.tasks.map((task, i) => (
                    <TaskRow key={i} task={task} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
