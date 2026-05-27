"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/config/site";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#030712]"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Orbs */}
          <div
            className="orb w-80 h-80 bg-purple-600/20 top-1/4 left-1/4"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="orb w-64 h-64 bg-cyan-600/15 bottom-1/4 right-1/4"
            style={{ animationDelay: "3s" }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Logo/icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl glass neon-border-purple flex items-center justify-center text-4xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦
            </motion.div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-3xl font-bold gradient-text mb-1">{profile.name}</h1>
              <p className="text-white/40 text-sm font-mono tracking-widest uppercase">
                Loading...
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-white/30 text-xs font-mono">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
