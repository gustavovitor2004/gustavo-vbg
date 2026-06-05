"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import DiscordServers from "@/components/sections/DiscordServers";
import ConnectSection from "@/components/sections/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div style={{ background: "#050816", color: "white", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <MyProjectsSection />
        <DiscordServers />
        <ConnectSection />
        <Footer />
      </div>
    </>
  );
}
