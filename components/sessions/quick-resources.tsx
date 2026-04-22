"use client";

import { BookOpen, ExternalLink, Download } from "lucide-react";

interface Resource {
  title: string;
  source: string;
  type: "video" | "pdf";
  icon: string;
  iconBg: string;
}

const RESOURCES: Resource[] = [
  {
    title: "Motion & Energy Explained in 10 Minutes",
    source: "Channel: Khan Academy",
    type: "video",
    icon: "▶",
    iconBg: "bg-red-500",
  },
  {
    title: "Motion & Energy Pdf",
    source: "NCERT",
    type: "pdf",
    icon: "A",
    iconBg: "bg-red-600",
  },
];

export function QuickResources() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen className="w-5 h-5 text-orange-500" />
        <h2 className="font-bold text-gray-900">Quick Learning Resources</h2>
      </div>

      <div className="space-y-3">
        {RESOURCES.map((resource) => (
          <div
            key={resource.title}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all cursor-pointer group"
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 ${resource.iconBg} rounded-lg flex items-center justify-center shrink-0`}
            >
              <span className="text-white text-sm font-bold">{resource.icon}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-tight mb-0.5 line-clamp-2">
                {resource.title}
              </p>
              <p className="text-xs text-gray-500">{resource.source}</p>
            </div>

            {/* Action */}
            <div className="shrink-0">
              {resource.type === "video" ? (
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
              ) : (
                <Download className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
