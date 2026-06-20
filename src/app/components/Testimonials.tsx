import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const testimonials = [
  { quote: "Working with Mary changed how I show up when everything is moving fast. I finally lead with [intention] instead of reacting to every fire.", name: "Chris Quintero", role: "Founder, early-stage startup operator" },
  { quote: "She holds a mirror to your patterns and helps you see yourself [clearly]. The shift in how I lead our product team has been extraordinary.", name: "Priya Sharma", role: "Head of People, Seed-stage SaaS" },
  { quote: "I came in thinking I needed founder advice. What I got was a complete [shift] in how I think about growth, pressure, and pace.", name: "Marcus Chen", role: "COO, venture-backed startup" },
];

function renderQuote(quote: string) {
  const parts = quote.split(/\[(.+?)\]/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ position: "relative", display: "inline-block", color: "var(--accent-lt)" }}>
        {part}
        <svg viewBox="0 0 100 10" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 10 }} preserveAspectRatio="none">
          <path d="M2,6 Q25,1 50,5 T98,4" stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" style={{ padding: "6rem 1.5rem", background: "var(--ink)", textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
      <style>{`
        .testi-quote { font-family:'Fraunces',Georgia,serif; font-style:italic; font-size:clamp(1.15rem,4.4vw,2.1rem); line-height:1.35; color:#fff; max-width:640px; margin:0 auto 1.8rem; }
      `}</style>

      <div style={{ position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,123,46,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.62rem", color: "rgba(245,217,168,0.5)", letterSpacing: "0.3em", textTransform: "uppercase" as const, marginBottom: "2rem" }}>
          What Clients Say — {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5, ease: EASE }}>
            <div className="testi-quote">{renderQuote(testimonials[active].quote)}</div>
            <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>
              {testimonials[active].name} · {testimonials[active].role}
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "2.2rem" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{ width: i === active ? 22 : 7, height: 4, borderRadius: 3, background: i === active ? "var(--accent)" : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
