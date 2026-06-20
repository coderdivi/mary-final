import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

export function FadeIn({ children, delay = 0, className = "", direction = "up", distance = 30, duration = 0.75 }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, x: 0, y: 0 });
  }, [inView, controls]);

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up")    initial.y =  distance;
  if (direction === "down")  initial.y = -distance;
  if (direction === "left")  initial.x =  distance;
  if (direction === "right") initial.x = -distance;

  return (
    <motion.div ref={ref} className={className} initial={initial} animate={controls} transition={{ duration, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUp({ value, suffix = "", duration = 1500, delay = 0, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    setTimeout(() => {
      let startTime: number | null = null;
      const step = (ts: number) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        setDisplayed(Math.round((1 - Math.pow(1 - progress, 3)) * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
  }, [inView, value, duration, delay]);

  return <span ref={ref} className={className}>{displayed}{suffix}</span>;
}
