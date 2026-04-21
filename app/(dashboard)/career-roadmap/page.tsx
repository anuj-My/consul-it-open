import { Columns3 } from "lucide-react";
import { SessionsRoadmap } from "@/components/sessions/sessions-roadmap";
import { JourneyProgress } from "@/components/sessions/journey-progress";
import { SpecialRecommendation } from "@/components/sessions/special-recommendation";
import { QuickResources } from "@/components/sessions/quick-resources";

export default function CareerRoadmapPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Columns3 className="w-7 h-7 text-teal-600" />
          <h1 className="text-2xl font-bold text-gray-900">Sessions</h1>
        </div>
        <p className="text-sm text-gray-500 ml-10">
          Track your learning milestones and prepare for the PCM stream selection.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Left Column — Roadmap */}
        <SessionsRoadmap />

        {/* Right Column — Sidebar widgets */}
        <div className="space-y-6">
          <JourneyProgress />
          <SpecialRecommendation />
          <QuickResources />
        </div>
      </div>
    </div>
  );
}
