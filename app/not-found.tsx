import { FileQuestion, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">

        <div className="bg-white rounded-lg p-8 sm:p-12 border">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="text-8xl font-black text-gray-100 select-none">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center rotate-12 shadow-sm">
                  <FileQuestion className="w-8 h-8 text-[#1a9ba1] -rotate-12" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            The page you are looking for doesn't exist.
          </p>

          <Link
            href="/"
            className="w-fit mx-auto bg-[#1a9ba1] hover:bg-[#16858a] text-white font-bold py-2.5 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
