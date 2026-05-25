"use client";

import { motion, type Variants } from "framer-motion";
import { socials } from "@/data/socials";
import SocialCard from "@/components/ui/SocialCard";
import SectionTitle from "@/components/ui/SectionTitle";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Socials() {
  return (
    <section id="socials" className="py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          badge="CONNECT"
          title="Find Me Online"
          subtitle="Follow along for content, updates, and community vibes across all platforms."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {socials.map((social) => (
            <motion.div key={social.id} variants={item} style={{ minHeight: "165px" }}>
              <SocialCard social={social} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
