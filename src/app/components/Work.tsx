import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const stories = [
  { category: "1-on-1 Founder Coaching", text: "A founder on the edge of burnout rebuilt her operating rhythm — and found the clarity to lead the next raise without losing herself.", rotate: -1.5, align: "flex-start" as const, width: "62%" },
  { category: "Startup Team Workshop", text: "A product team moving too fast to talk clearly rebuilt trust, sharpened rituals, and stopped letting tension hide inside velocity.", rotate: 1.5, align: "flex-end" as const, width: "72%" },
  { category: "Scale-Up Coaching · Featured", text: "A senior operator who dreaded every leadership sync now runs them with calm, clarity, and follow-through — one healthier operating system at a time.", rotate: -0.5, align: "center" as const, width: "88%" },
];

function TornTopCard({ rotate, children }: { rotate: number; children: React.ReactNode }) {
  return (
    <motion.div
      style={{ width: "100%", position: "relative" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <svg width="100%" height="20" viewBox="0 0 280 20" preserveAspectRatio="none" style={{ display: "block", filter: "drop-shadow(0 6px 10px rgba(28,23,18,0.1))", transform: `rotate(${rotate}deg)` }}>
        <polygon points="0,5 14,1 28,6 42,2 56,6 70,1 84,6 98,2 112,6 126,1 140,6 154,2 168,6 182,1 196,6 210,2 224,6 238,1 252,6 266,2 280,5 280,20 0,20" fill="var(--surface)" />
      </svg>
      <div style={{ background: "var(--surface)", marginTop: -2, padding: "0 1.4rem 1.3rem", boxShadow: "0 10px 20px rgba(28,23,18,0.06)", transform: `rotate(${rotate}deg)` }}>
        {children}
      </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" style={{ padding: "6rem 1.5rem", background: "var(--secondary)" }}>
      <style>{`
        .work-card-shell { max-width:100%; }
        @media (max-width: 640px) {
          .work-card-shell { width:100% !important; }
        }
      `}</style>
      <div style={{ maxWidth: "min(900px, 100%)", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <div style={{ height: "1px", width: 32, background: "var(--accent)" }} />
            <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--accent)" }}>Coaching In Action</span>
          </div>
          <h2 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(1.5rem,4.4vw,2.6rem)", fontWeight: 400, lineHeight: 1.15, color: "var(--ink)", marginBottom: "2.5rem" }}>
            Real shifts, <em style={{ fontStyle: "italic", color: "var(--accent)" }}>real people.</em>
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: "2.2rem" }}>
          {stories.map((s, i) => (
            <FadeIn key={s.category} delay={i * 0.12}>
              {/* wrapper div carries the alignment */}
              <div style={{ display: "flex", justifyContent: s.align === "flex-start" ? "flex-start" : s.align === "flex-end" ? "flex-end" : "center" }}>
                <div className="work-card-shell" style={{ width: `clamp(18rem, ${s.width}, 100%)` }}>
                  <TornTopCard rotate={s.rotate}>
                    <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.66rem", color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.06em", paddingTop: "0.6rem", marginBottom: "0.6rem" }}>
                      {s.category}
                    </div>
                    <div style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "1.05rem", color: "var(--ink)", lineHeight: 1.45 }}>
                      {s.text}
                    </div>
                  </TornTopCard>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <motion.a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#fff", padding: "0.85rem 2rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.84rem", fontWeight: 500, textDecoration: "none", borderRadius: "4px", marginTop: "2.5rem" }} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
            See How This Could Look For You →
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
