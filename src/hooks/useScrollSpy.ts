"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (sectionIds.length === 0) {
      setActiveId("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
