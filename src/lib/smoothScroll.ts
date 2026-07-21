const NAVBAR_HEIGHT = 56;

export function smoothScrollTo(targetId: string, duration = 800): void {
  const el = document.getElementById(targetId);
  if (!el) return;

  const start = window.scrollY;
  const target = el.getBoundingClientRect().top + start - NAVBAR_HEIGHT;
  const distance = target - start;
  let startTime: number | null = null;

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number): void {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      window.history.pushState(null, "", `#${targetId}`);
    }
  }

  requestAnimationFrame(step);
}
