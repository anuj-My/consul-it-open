import {  Map } from "lucide-react";
import { SessionsRoadmap } from "@/components/sessions/sessions-roadmap";
import { JourneyProgress } from "@/components/sessions/journey-progress";
import { Recommendation } from "@/components/dashboard/recommendation";
import { QuickResources } from "@/components/sessions/quick-resources";

export default function CareerRoadmapPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Map className="w-7 h-7 text-teal-600" />
          <h1 className="text-2xl font-bold text-gray-900">Sessions</h1>
        </div>
        <p className="text-sm text-gray-500 ml-10">
          Track your learning milestones and prepare for the PCM stream selection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        <SessionsRoadmap />

        <div className="space-y-6">
          <JourneyProgress />
          <Recommendation 
            variant="emerald"
            showSpecialHeader={true}
            title="Need Help Planning?"
            description="Discuss your current progress and board preparation strategy."
            consultant={{
              name: "Mukund Tyagi",
              role: "(Academic Planner & Counsellor)",
              image: "/images/mukund_tyagi.png",
              rating: 4.2
            }}
            buttonText="Book a Session"
          />
          <QuickResources />
        </div>
      </div>
    </div>
  );
}
