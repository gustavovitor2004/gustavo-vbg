"use client";

import Cursor from "@/components/Cursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import ConnectSection from "@/components/sections/ConnectSection";
import DiscordServers from "@/components/sections/DiscordServers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <div style={{ background: "#050816", color: "white", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <ProjectsSection />
        <BlogSection />
        <ConnectSection />
        <DiscordServers />
        <Footer />
      </div>
    </>
  );
}
