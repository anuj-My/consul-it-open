import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F8F9FB] min-h-screen">
      <div className="sticky top-0 h-screen shrink-0">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
