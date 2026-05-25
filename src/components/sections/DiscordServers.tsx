"use client";

import { motion, type Variants } from "framer-motion";
import { discordServers } from "@/data/servers";
import ServerCard from "@/components/ui/ServerCard";
import SectionTitle from "@/components/ui/SectionTitle";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DiscordServers() {
  return (
    <section id="servers" className="py-24 px-4 sm:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5865F2]/4 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#5865F2]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionTitle
          badge="COMMUNITY"
          title="Discord Servers"
          subtitle="Communities I've built and run. Join thousands of members across gaming, dev, and creative spaces."
          accentColor="text-[#5865F2]"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {discordServers.map((server) => (
            <motion.div key={server.id} variants={item}>
              <ServerCard server={server} />
            </motion.div>
          ))}
        </motion.div>

        {/* Total members banner */}
        <motion.div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(88,101,242,0.2)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div>
            <p className="text-white/35 text-xs mb-1 font-mono tracking-widest uppercase">
              Total Community Size
            </p>
            <p className="text-4xl font-black gradient-text leading-none">5,870+</p>
            <p className="text-white/35 text-sm mt-1">members across all servers</p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1.5">
            <p className="text-white/35 text-sm">New servers coming soon</p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm">Active &amp; growing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
