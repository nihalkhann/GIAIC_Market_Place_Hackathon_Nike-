
import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import JordanSlider from "@/components/JordanSlider";

const NotFoundPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-4xl">
          <div className="mb-12 flex flex-col items-center justify-center space-y-8">
            <h1
              className=" bg-clip-text text-center text-8xl font-black text-transparent  sm:text-9xl md:text-[12rem]"
              style={{
                backgroundImage: "url('/hero3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
              }}
            >
              404
            </h1>

            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Page not found
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-600">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
                It might have been moved or deleted.
              </p>
              <Link
                href="/"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-8 py-3 text-white shadow-lg transition-all duration-300 ease-out hover:bg-blue-700 hover:shadow-blue-300"
              >
                <span className="absolute right-0 translate-x-full transition-transform duration-300 group-hover:-translate-x-4">
                  <Home className="h-5 w-5" />
                </span>
                <Home className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[-200%]" />
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-8 w-full">
            <JordanSlider />
          </div>
        </div>
      </div>
    </main>
  );
};



export default NotFoundPage;
