"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import DiscordServers from "@/components/sections/DiscordServers";
import BlogSection from "@/components/sections/BlogSection";
import ConnectSection from "@/components/sections/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div style={{ background: "var(--page-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <MyProjectsSection />
        <BlogSection />
        <DiscordServers />
        <ConnectSection />
        <Footer />
      </div>
    </>
  );
}
