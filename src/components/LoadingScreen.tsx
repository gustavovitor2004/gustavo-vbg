"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("visited")) {
      setVisible(false);
      return;
    }

    const steps = [15, 35, 60, 80, 100];
    let i = 0;
    const tick = () => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
        setTimeout(tick, 160 + i * 60);
      } else {
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("visited", "1");
        }, 300);
      }
    };
    tick();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#090909",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "48px",
              fontWeight: 700,
              color: "#E8E4DE",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            GG
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: "120px",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                background: "#C8935A",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
