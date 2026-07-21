"use client";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WorkSection from "@/components/sections/WorkSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
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
        <WorkSection />
        <ManifestoSection />
        <DiscordServers />
        <ConnectSection />
        <Footer />
      </div>
    </>
  );
}
