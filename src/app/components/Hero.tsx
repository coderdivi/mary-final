import { useEffect, useState } from "react";
import { motion } from "motion/react";
import maryPhoto from "../../assets/mary-hero.png";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);

  return (
    <section style={{ background: "var(--background)", overflow: "hidden", position: "relative", zIndex: 2 }}>
      <style>{`
        .hero-wrap {
          position:relative;
          max-width:965px;
          margin:0 auto;
          padding:clamp(6.5rem,10vw,8rem) clamp(1.25rem,4vw,2.5rem) clamp(2rem,5vw,3.5rem);
          min-height:min(88vh,780px);
          display:grid;
          grid-template-columns:minmax(0,1.12fr) minmax(260px,0.88fr);
          gap:clamp(1.5rem,5vw,4rem);
          align-items:center;
        }
        .hero-text { position:relative; z-index:1; max-width:min(560px,100%); grid-column:1; }
        .hero-photo-overlap {
          position:relative;
          top:auto;
          right:auto;
          width:clamp(15rem,27vw,22.5rem);
          justify-self:center;
          align-self:center;
          z-index:0;
        }
        .hero-photo-img { width:100%; display:block; filter:drop-shadow(0 30px 50px rgba(28,23,18,0.18)); }
        .hero-actions { display:flex; gap:1rem; flex-wrap:wrap; }
        .hero-action { justify-content:center; }
        .hero-stamp { display:flex !important; }
        @keyframes wobble { 0%,100%{transform:rotate(-6deg) scale(1);} 50%{transform:rotate(4deg) scale(1.04);} }
        .wobble { animation: wobble 3.5s ease-in-out infinite; }
        @media (max-width:1100px) {
          .hero-wrap { grid-template-columns:minmax(0,1.18fr) minmax(230px,0.82fr); }
          .hero-photo-overlap { width:clamp(14rem,26vw,19.375rem); }
        }
        @media (max-width:900px) {
          .hero-wrap { grid-template-columns:1fr; padding:7rem 1.5rem 2rem; min-height:auto; text-align:left; }
          .hero-photo-overlap { width:min(18rem,62vw); margin:0 auto; }
          .hero-text { max-width:100%; }
          .hero-stamp { display:none !important; }
        }
        @media (max-width:520px) {
          .hero-wrap { padding-left:1rem; padding-right:1rem; }
          .hero-actions { flex-direction:column; }
          .hero-action { width:100%; }
          .hero-text h1 { font-size: clamp(2.1rem, 11vw, 3rem) !important; }
        }
      `}</style>

      <motion.div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,123,46,0.08) 0%, transparent 70%)", pointerEvents: "none" }} initial={{ scale: 0.8, opacity: 0 }} animate={m ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 1.4, ease: EASE }} />

      <div className="hero-wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: EASE }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.6rem" }}>
          <motion.div style={{ height: "1px", background: "var(--accent)", flexShrink: 0 }} initial={{ width: 0 }} animate={m ? { width: 40 } : {}} transition={{ duration: 0.7, delay: 0.5, ease: EASE }} />
          <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--accent)" }}>Startup &amp; Personal Life Coach</span>
        </motion.div>

        <div className="hero-text">
          <h1 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(2.05rem,6.5vw,4rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.6rem", color: "var(--ink)" }}>
            {[{ t: "Helping you grow with", i: false }, { t: "clarity, confidence", i: true }].map((l, i) => (
              <span key={i} style={{ display: "block", overflow: "hidden" }}>
                <motion.span style={{ display: "block", color: l.i ? "var(--accent)" : "var(--ink)", fontStyle: l.i ? "italic" : "normal" }} initial={{ y: "110%", opacity: 0 }} animate={m ? { y: "0%", opacity: 1 } : {}} transition={{ duration: 0.85, delay: 0.35 + i * 0.18, ease: EASE }}>
                  {l.t}
                </motion.span>
              </span>
            ))}
            <span style={{ display: "block", overflow: "visible", paddingBottom: "0.3em" }}>
              <motion.span style={{ display: "block" }} initial={{ y: "110%", opacity: 0 }} animate={m ? { y: "0%", opacity: 1 } : {}} transition={{ duration: 0.85, delay: 0.7, ease: EASE }}>
                &amp;{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  purpose
                  <svg viewBox="0 0 100 10" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 10 }} preserveAspectRatio="none">
                    <path d="M2,6 Q25,1 50,5 T98,4" stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>.
              </motion.span>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.9, ease: EASE }} style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted-txt)", maxWidth: "380px", marginBottom: "1.8rem" }}>
            Hi, I'm Mary — I coach founders, operators, and ambitious individuals to move with clarity, confidence, and purposeful action.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 1.1, ease: EASE }}>
            <motion.a className="hero-action" href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#fff", padding: "0.9rem 2rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.86rem", fontWeight: 500, textDecoration: "none", borderRadius: "4px" }} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>Book a Session →</motion.a>
            <motion.a className="hero-action" href="#about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1.5px solid rgba(28,23,18,0.15)", color: "var(--ink)", padding: "0.9rem 2rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.86rem", textDecoration: "none", borderRadius: "4px" }} whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>Learn More</motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 1.4, ease: EASE }} style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2.2rem" }}>
            <div style={{ display: "flex" }}>
              {["JO", "TK", "SM"].map((av, i) => (
                <div key={av} style={{ width: "1.875rem", height: "1.875rem", borderRadius: "50%", background: ["#C97B2E", "#8B9E6A", "#8A6A9A"][i], border: "2px solid var(--background)", marginLeft: i === 0 ? 0 : -8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.56rem", fontWeight: 700, color: "#fff" }}>{av}</div>
              ))}
            </div>
            <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.8rem", color: "var(--muted-txt)" }}>Trusted by <strong style={{ color: "var(--ink)" }}>50+</strong> clients</span>
          </motion.div>
        </div>

        <motion.div className="hero-photo-overlap" initial={{ opacity: 0, x: 30 }} animate={m ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.95, delay: 0.4, ease: EASE }}>
          <img src={maryPhoto} alt="Mary, startup and personal life coach" className="hero-photo-img" />

          <motion.div className="hero-stamp wobble" style={{ position: "absolute", bottom: "8%", right: "-14%", zIndex: 3 }} initial={{ opacity: 0, scale: 0.7 }} animate={m ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 1.9, ease: EASE }}>
            <svg width="98" height="98" viewBox="0 0 130 130" style={{ filter: "drop-shadow(0 10px 18px rgba(28,23,18,0.22))" }}>
              <path d="M65,8 C85,5 105,14 115,35 C124,54 122,75 108,92 C94,108 73,116 52,110 C32,104 16,88 11,66 C6,45 14,24 33,13 C43,7 55,9 65,8 Z" fill="var(--ink)" stroke="var(--accent)" strokeWidth="2.5" />
              <circle cx="44" cy="64" r="4" fill="#4CAF50" />
              <text x="68" y="58" textAnchor="middle" fill="#F5D9A8" style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "17px", fontStyle: "italic" }}>Available</text>
              <text x="68" y="78" textAnchor="middle" fill="#fff" style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em" }}>NOW</text>
              <path d="M100,25 L103,32 L110,33 L103,36 L100,43 L97,36 L90,33 L97,32 Z" fill="var(--accent)" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <svg
        viewBox="0 0 1200 96"
        width="100%"
        height="96"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ display: "block", marginTop: "-1px" }}
      >
        <rect width="1200" height="96" fill="var(--secondary)" />
        <polygon
          points="0,0 1200,0 1200,48 1140,96 1080,48 1020,96 960,48 900,96 840,48 780,96 720,48 660,96 600,48 540,96 480,48 420,96 360,48 300,96 240,48 180,96 120,48 60,96 0,48"
          fill="var(--background)"
        />
      </svg>
    </section>
  );
}