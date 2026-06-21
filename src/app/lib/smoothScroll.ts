export function smoothScrollTo(targetId: string, duration = 900, offset = 80) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + startY - offset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}