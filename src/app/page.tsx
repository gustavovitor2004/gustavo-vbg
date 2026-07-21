"use client";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import CurrentFocus from "@/components/sections/CurrentFocus";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import GitHubActivity from "@/components/GitHubActivity";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import DiscordServers from "@/components/sections/DiscordServers";
import ConnectSection from "@/components/sections/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <AboutSection />
        <CurrentFocus />
        <ExperienceTimeline />
        <GitHubActivity />
        <ProjectsSection />
        <MyProjectsSection />
        <DiscordServers />
        <ConnectSection />
        <Footer />
      </div>
    </>
  );
}
