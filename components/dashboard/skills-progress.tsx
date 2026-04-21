import { Activity, Calculator, FlaskConical } from "lucide-react";

const SKILLS = [
  { 
    name: "Math Problem Solving", 
    value: 80,
    icon: Calculator,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    valueColor: "text-green-600"
  },
  { 
    name: "Science Concepts", 
    value: 70,
    icon: FlaskConical,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    valueColor: "text-gray-500"
  },
];

export function SkillsProgress() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-teal-600" />
        <h2 className="font-semibold text-gray-900 text-base">Skills Progress</h2>
      </div>

      <div className="space-y-4">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="flex gap-4">
            <div className={`w-9 h-9 rounded-lg ${skill.iconBg} flex items-center justify-center shrink-0`}>
              <skill.icon className={`w-5 h-5 ${skill.iconColor}`} />
            </div>
            
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                <span className={`text-sm font-medium ${skill.valueColor}`}>{skill.value}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
