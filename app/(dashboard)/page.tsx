import { GreetingBanner } from "@/components/dashboard/greeting-banner";
import { AIWidget } from "@/components/dashboard/ai-widget";
import { TodaysFocus } from "@/components/dashboard/todays-focus";
import { CareerRoadmap } from "@/components/dashboard/career-roadmap";
import { BuildBasics } from "@/components/dashboard/build-basics";
import { MindGym } from "@/components/dashboard/mind-gym";
import { MoodTrends } from "@/components/dashboard/mood-trends";
import { Recommendation } from "@/components/dashboard/recommendation";
import { SkillsProgress } from "@/components/dashboard/skills-progress";

export default function Home() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1400px]">
      <GreetingBanner />

      <AIWidget />

      <TodaysFocus />

      <CareerRoadmap />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="space-y-6">
          <BuildBasics />
          <MindGym />
        </div>

        <div className="space-y-6">
          <MoodTrends />
          <Recommendation />
          <SkillsProgress />
        </div>
      </div>
    </div>
  );
}
