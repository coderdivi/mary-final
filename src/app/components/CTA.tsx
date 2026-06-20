import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function CTA() {
  return (
    <section id="cta" style={{ padding: "clamp(5rem,10vw,7rem) 1.5rem", background: "var(--ink)", textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
      <style>{`
        .cta-flow { position: relative; padding-bottom: 0.4rem; }
        .cta-squiggle {
          position: absolute;
          top: 3.25rem;
          width: clamp(145px, 14vw, 185px);
          height: clamp(92px, 9vw, 118px);
          overflow: visible;
          pointer-events: none;
        }
        .cta-squiggle-left { right: calc(50% + clamp(82px, 8vw, 96px)); }
        .cta-squiggle-right { left: calc(50% + clamp(82px, 8vw, 96px)); }
        @media (max-width: 860px) {
          .cta-squiggle { display: none; }
        }
      `}</style>
      <div style={{ position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,123,46,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.62rem", color: "rgba(245,217,168,0.5)", letterSpacing: "0.3em", textTransform: "uppercase" as const, marginBottom: "1.4rem" }}>Ready when you are</div>
          <h2 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(1.8rem,6.2vw,4rem)", fontWeight: 400, lineHeight: 1.05, color: "#fff", marginBottom: "1.2rem" }}>
            Invest in your <em style={{ fontStyle: "italic", color: "var(--accent-lt)" }}>growth.</em>
          </h2>
          <div className="cta-flow">
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.92rem", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 2.35rem" }}>
              Book a free 30-minute discovery call. No commitment — just a real conversation about where you are and where you want to be.
            </p>
            <svg className="cta-squiggle cta-squiggle-left" width="185" height="118" viewBox="0 0 185 118" aria-hidden="true">
              <defs>
                <marker id="cta-arrow-left" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M1,1 L11,6 L1,11 Z" fill="var(--accent)" />
                </marker>
              </defs>
              <path className="cta-squiggle-path" d="M91,8 C68,0 37,6 39,29 C41,48 66,44 61,25 C55,3 23,28 47,52 C76,81 117,86 166,88" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#cta-arrow-left)" />
            </svg>
            <svg className="cta-squiggle cta-squiggle-right" width="185" height="118" viewBox="0 0 185 118" aria-hidden="true">
              <defs>
                <marker id="cta-arrow-right" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M1,1 L11,6 L1,11 Z" fill="var(--accent)" />
                </marker>
              </defs>
              <path className="cta-squiggle-path" d="M94,8 C117,0 148,6 146,29 C144,48 119,44 124,25 C130,3 162,28 138,52 C109,81 68,86 19,88" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#cta-arrow-right)" />
            </svg>
            <div style={{ position: "relative", display: "inline-block" }}>
              <motion.a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#fff", padding: "0.92rem 2.2rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.86rem", fontWeight: 500, textDecoration: "none", borderRadius: "4px" }} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                Book a Free Call →
              </motion.a>
            </div>
          </div>
          <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.2)", marginTop: "0.8rem" }}>No commitment. Just a conversation.</div>
        </FadeIn>
      </div>
    </section>
  );
}
