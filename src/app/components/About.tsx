import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

const stats = [
  { value: "200+", label: "clients coached" },
  { value: "95%", label: "success rate" },
  { value: "12+", label: "years experience" },
];

export function About() {
  return (
    <section id="about" style={{ position: "relative", background: "var(--secondary)", marginTop: "-96px", zIndex: 1 }}>
      <style>{`
        @keyframes march { to { stroke-dashoffset: -24; } }
        .marching { animation: march 1.2s linear infinite; }
        .about-cols { display: grid; grid-template-columns: minmax(0, 520px) minmax(240px, 1fr); gap: clamp(1.5rem,4vw,2.5rem); align-items: start; }
        .margin-note > div { width: min(100%, 520px); border-top: 2px dashed rgba(201,123,46,0.5); padding-top: 1rem; }
        .stamp-box { position: relative; padding: 0.9rem 1.4rem; text-align: center; min-width: 130px; }
        .stamp-border { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px; }
        .stamp-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .about-cols { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>

      <div style={{ padding: "clamp(8rem,14vw,9rem) 1.5rem clamp(4rem,8vw,5rem)" }}>
        <div style={{ maxWidth: "min(1100px, 100%)", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(1.55rem,4.8vw,2.6rem)", lineHeight: 1.18, color: "var(--ink)", marginBottom: "1.8rem", maxWidth: "700px" }}>
              15 years inside fast-moving startup teams. Now helping people find <em style={{ fontStyle: "italic", color: "var(--accent)" }}>clarity</em> — wherever they're building from.
            </h2>
          </FadeIn>

          <div className="about-cols">
            <FadeIn delay={0.1}>
              <div style={{ fontSize: "0.94rem", color: "var(--ink)", lineHeight: 1.9, maxWidth: "520px" }}>
                A Startup and Personal Life Coach bridging personal growth with the pace, pressure, and ambiguity of building something new. As one founder put it after six months of work together:{" "}
                <span style={{ background: "rgba(201,123,46,0.18)", padding: "2px 5px", borderRadius: "3px", fontStyle: "italic" }}>
                  "I stopped operating in constant fire-drill mode and started leading the startup from a clearer place."
                </span>{" "}
                That's the shift this work is built around — wherever you're building from.
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="margin-note">
              <div>
                <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.62rem", color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "0.3rem" }}>Chris Quintero</div>
                <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.66rem", color: "var(--muted-txt)", lineHeight: 1.5 }}>Founder, early-stage startup operator</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="stamp-row" style={{ marginTop: "2.5rem" }}>
              {stats.map((s) => (
                <div key={s.label} className="stamp-box">
                  <svg className="stamp-border" viewBox="0 0 140 80" preserveAspectRatio="none">
                    <rect x="2" y="2" width="136" height="76" rx="8" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 4" className="marching" />
                  </svg>
                  <div style={{ position: "relative" }}>
                    <div style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "1.7rem", color: "var(--accent)" }}>{s.value}</div>
                    <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.6rem", color: "var(--muted-txt)", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <motion.a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#fff", padding: "0.85rem 2rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.84rem", fontWeight: 500, textDecoration: "none", borderRadius: "4px", marginTop: "2.2rem" }} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              Work With Me →
            </motion.a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
