"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Clock,
  HeartPulse,
  Users,
  Bot,
  CreditCard,
  Wallet,
  Settings,
  LogOut,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";

const TOP_LINKS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Career Roadmap", href: "/career-roadmap", icon: Map },
  { name: "Session", href: "/session", icon: Clock },
  { name: "Mental Wellness", href: "/wellness", icon: HeartPulse },
  { name: "Consultant Marketplace", href: "/marketplace", icon: Users },
  { name: "ConsulTOpen AI", href: "/ai", icon: Bot },
];

const BOTTOM_LINKS = [
  { name: "Subscription", href: "/subscription", icon: CreditCard },
  { name: "Wallet & Payments", href: "/wallet", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col pt-6 pb-4">
      <div className="px-6 mb-8 flex items-center gap-2">
           <Image src="/images/logo.svg" alt="consult-it-open" width={32} height={32} />
        <span className="font-bold text-xl text-gray-900 tracking-tight">ConsulTOpen</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {TOP_LINKS.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-teal-600 text-white"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              {link.name}
            </Link>
          );
        })}

        <div className="my-6 border-t border-gray-100 mx-2" />

        <div className="space-y-1">
          {BOTTOM_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="mt-auto px-4 pt-4">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-green-200 overflow-hidden shrink-0">
            <img 
               src="/images/Student Avatar.png" 
               alt="User Avatar" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-none mb-1">Alex Miller</span>
            <span className="text-[10px] font-bold text-amber-500 bg-amber-100/50 w-fit px-1.5 py-0.5 rounded uppercase tracking-wide">Elite</span>
          </div>
          <button className="p-1 hover:bg-gray-200 rounded-full text-gray-400 transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
