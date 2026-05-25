"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const quickSocials = [
  { label: "Discord", url: "https://discord.gg/yourserver", color: "#5865F2", icon: "💬" },
  { label: "GitHub", url: "https://github.com/yourname", color: "#ffffff", icon: "🐙" },
  { label: "YouTube", url: "https://youtube.com/@YourChannel", color: "#FF0000", icon: "▶" },
  { label: "Twitter", url: "https://x.com/yourname", color: "#ffffff", icon: "✕" },
];

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Social items */}
      <AnimatePresence>
        {open &&
          quickSocials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className="flex items-center gap-2 glass border border-white/10 rounded-full px-3 py-2 text-sm hover:border-white/20 transition-all group"
              style={{ boxShadow: `0 0 12px ${s.color}30` }}
            >
              <span className="text-lg">{s.icon}</span>
              <span className="text-white/70 group-hover:text-white text-xs pr-1 font-medium">
                {s.label}
              </span>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-glow-purple hover:scale-110 transition-transform"
        whileTap={{ scale: 0.92 }}
        animate={open ? { rotate: 45 } : { rotate: 0 }}
        title="Quick links"
      >
        <span className="text-xl leading-none">+</span>
      </motion.button>
    </div>
  );
}
