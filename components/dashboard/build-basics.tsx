'use client'
import { CheckSquare } from "lucide-react";
import { TaskRow } from "@/components/sessions/task-row";
import { useRoadmapContext } from "@/context/RoadmapContext";

export function BuildBasics() {

  const {data}  = useRoadmapContext()

  const buildBasicsSession = data.sessions[0];
  const tasks = buildBasicsSession.tasks;

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <CheckSquare className="w-5 h-5 text-teal-500" strokeWidth={2.5} />
        <h2 className="font-semibold text-gray-900 text-base">Build Basics</h2>
      </div>

      <div className="space-y-4">
        {tasks.map((task, i) => (
          <TaskRow 
            key={i} 
            task={task} 
            sessionId={buildBasicsSession.id}
            variant="summary" 
          />
        ))}
      </div>
    </div>
  );
}
