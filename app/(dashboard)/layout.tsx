"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-white min-h-screen relative overflow-x-hidden">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white transition duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:h-screen
        ${isSidebarOpen 
          ? "translate-x-0 shadow-2xl pointer-events-auto" 
          : "-translate-x-full lg:shadow-none pointer-events-none lg:pointer-events-auto"
        }
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <div className="z-30">
          <Header onMenuClick={() => {
            console.log("Hamburger Menu Clicked");
            setSidebarOpen(true);
          }} />
        </div>
        
        <main className="flex-1 w-full min-w-0 overflow-y-auto scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
