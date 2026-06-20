import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "./FadeIn";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const startup = [
  { title: "Founder Leadership", desc: "Build the clarity, presence, and decision-making range to lead when the roadmap, runway, and team are all moving at once." },
  { title: "Startup Team Dynamics", desc: "Turn speed into trust and momentum into healthy execution through clearer rituals, accountability, and conflict repair." },
  { title: "Operator Performance", desc: "Unlock sustained performance without burning out your best people — focus systems, feedback loops, and resilient delivery habits." },
  { title: "Founder Communication", desc: "Build honest, direct communication for high-context teams: hard conversations, investor updates, team alignment, and fast pivots." },
  { title: "Scale-Up Coaching", desc: "A dedicated partnership for founders and senior operators navigating growth, ambiguity, hiring pressure, and strategic tradeoffs." },
  { title: "Culture Through Growth", desc: "Shape the culture your startup needs before speed turns into chaos — values in action, talent development, and change management." },
];

const personal = [
  { title: "Personal Development", desc: "Build the self-awareness, habits and mindset to grow consistently in every area — identity, values, and emotional resilience." },
  { title: "Confidence Building", desc: "Rediscover your natural confidence as a deep, unshakeable foundation through inner critic work, presence, and courageous action." },
  { title: "Goal Setting", desc: "Set goals that excite you and build the systems to follow through every time — vision mapping, priority frameworks, progress tracking." },
  { title: "Career Direction", desc: "Find clarity on where you're headed and build a path that truly fits you — career mapping, strengths, transition planning." },
  { title: "Mindset Coaching", desc: "Rewire the thought patterns keeping you stuck and replace them with growth beliefs — growth mindset, limiting beliefs, mental fitness." },
  { title: "Accountability Coaching", desc: "Build the structure and momentum that keeps you moving forward consistently — weekly check-ins, commitment devices, sustainable progress." },
];

function AccordionList({ items }: { items: typeof startup }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.title} style={{ borderBottom: i === items.length - 1 ? "none" : "1px solid rgba(28,23,18,0.1)" }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{ width: "100%", textAlign: "left", background: open === i ? "rgba(201,123,46,0.04)" : "transparent", border: "none", cursor: "pointer", padding: "1rem 0.5rem", display: "flex", alignItems: "baseline", gap: "1.2rem", transition: "background 0.25s" }}
          >
            <span style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "1.1rem", color: "var(--accent)", flexShrink: 0, width: "2rem" }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "1.15rem", color: "var(--ink)", flex: 1 }}>{item.title}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} style={{ fontSize: "1.3rem", color: "var(--accent)", flexShrink: 0 }}>+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} style={{ overflow: "hidden", background: "rgba(201,123,46,0.04)" }}>
                <div style={{ padding: "0 0.5rem 1.3rem 3.2rem", fontSize: "0.87rem", color: "var(--muted-txt)", lineHeight: 1.75, maxWidth: "480px" }}>
                  {item.desc}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function Services() {
  const [tab, setTab] = useState(0);
  return (
    <section id="services" style={{ padding: "6rem 1.5rem", background: "var(--background)" }}>
      <style>{`
        .svc-header { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: clamp(1.2rem,4vw,3rem); align-items: end; margin-bottom: 2.8rem; }
        .svc-tabs { display:flex; gap:0.5rem; margin-bottom:1rem; border-bottom:1px solid rgba(28,23,18,0.1); overflow-x:auto; scrollbar-width:none; }
        .svc-tabs::-webkit-scrollbar { display:none; }
        .svc-tab { white-space:nowrap; }
        .svc-card-cta { margin-top:2.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; background:var(--secondary); border-radius:12px; padding:clamp(1.2rem,3vw,1.8rem); }
        @media (max-width: 900px) { .svc-header { grid-template-columns: 1fr; gap: 1.2rem; } }
        @media (max-width: 560px) { .svc-card-cta > a { width:100%; justify-content:center; text-align:center; } }
      `}</style>
      <div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <div style={{ height: "1px", width: 32, background: "var(--accent)" }} />
            <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--accent)" }}>What I Offer</span>
          </div>
          <div className="svc-header">
            <h2 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(1.5rem,4.4vw,2.6rem)", fontWeight: 400, lineHeight: 1.15, color: "var(--ink)" }}>
              Services built for<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>real transformation.</em>
            </h2>
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.92rem", lineHeight: 1.8, color: "var(--muted-txt)" }}>
              Whether you're a founder, a startup team, or an individual building your next chapter — there's a path designed for you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="svc-tabs">
            {["Startup Coaching", "Personal Coaching"].map((label, i) => (
              <button className="svc-tab" key={label} onClick={() => setTab(i)} style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.84rem", fontWeight: 500, color: tab === i ? "var(--accent)" : "var(--muted-txt)", background: "none", border: "none", cursor: "pointer", padding: "0.7rem clamp(0.8rem,3vw,1.2rem)", borderBottom: tab === i ? "2px solid var(--accent)" : "2px solid transparent", transition: "all 0.25s" }}>
                {label}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE }}>
              <AccordionList items={tab === 0 ? startup : personal} />
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="svc-card-cta">
            <div>
              <div style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "1.15rem", color: "var(--ink)", marginBottom: "0.2rem" }}>Not sure where to start?</div>
              <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.82rem", color: "var(--muted-txt)" }}>Book a free 30-minute discovery call — no commitment.</div>
            </div>
            <motion.a href="#contact" style={{ background: "var(--accent)", color: "#fff", padding: "0.72rem 1.5rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none", borderRadius: "4px", flexShrink: 0 }} whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>Book a Free Call →</motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
