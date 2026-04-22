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
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1400px]">
      <GreetingBanner />

      <AIWidget />

      <TodaysFocus />

      <CareerRoadmap />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
        <div className="space-y-6">
          <BuildBasics />
          <MindGym />
        </div>

        <div className="space-y-6">

           <div className="bg-white rounded-lg space-y-6 border p-6">
          <MoodTrends />
          <div className="border-b border-gray-100 mb-8"></div>
          <Recommendation 
            variant="pink"
            badgeText="Based on mood log"
            title="Recommended for You"
            consultant={{
              name: "Emma Watson",
              role: "(Student Wellbeing Therapist)",
              image: "/images/Counselor Emma.png",
              rating: 4.9,
              sessions: "(120+ Sessions)"
            }}
            buttonText="Book a Therapy Session"
          />

           </div>
          <SkillsProgress />
        </div>
      </div>
    </div>
  );
}
