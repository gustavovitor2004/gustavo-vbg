"use client";

import Cursor from "@/components/Cursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ConnectSection from "@/components/sections/ConnectSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />

      <div
        className="min-h-screen"
        style={{ background: "#0a0b14", color: "white" }}
      >
        <Navbar />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-5 lg:px-7 py-4 sm:py-5">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
            {/* ── Main content ── */}
            <main className="flex-1 min-w-0 flex flex-col gap-4">
              <Hero />
              <ConnectSection />
              <ProjectsSection />
            </main>

            {/* ── Sidebar ── */}
            <aside className="w-full lg:w-[350px] shrink-0">
              <div className="lg:sticky lg:top-[68px]">
                <Sidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
