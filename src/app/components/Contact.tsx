import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 1.5rem", background: "var(--background)" }}>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: clamp(2rem,5vw,3.5rem); align-items: start; }
        .contact-input { width: 100%; border: 1.5px solid rgba(28,23,18,0.15); border-radius: 4px; padding: 0.72rem 0.9rem; font-size: 0.88rem; font-family: 'Satoshi', sans-serif; background: var(--surface); color: var(--ink); box-sizing: border-box; outline: none; transition: border-color 0.2s; }
        .contact-input:focus { border-color: var(--accent); }
        .contact-submit { width:fit-content; }
        @media (max-width: 560px) { .contact-submit { width:100%; text-align:center !important; } }
      `}</style>
      <div style={{ maxWidth: "min(1000px, 100%)", margin: "0 auto" }}>
        <div className="contact-grid">
          <FadeIn direction="right">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
              <div style={{ height: "1px", width: 32, background: "var(--accent)" }} />
              <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--accent)" }}>Get In Touch</span>
            </div>
            <h2 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(1.5rem,4.4vw,2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "var(--ink)", marginBottom: "1rem" }}>
              Let's start a <em style={{ fontStyle: "italic", color: "var(--accent)" }}>conversation.</em>
            </h2>
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.92rem", lineHeight: 1.8, color: "var(--muted-txt)", marginBottom: "1.8rem", maxWidth: "340px" }}>
              Whether you're ready to begin or just want to find out more — reach out. I respond to every message personally.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.6rem" }}>
              <a href="mailto:hello@maryalenoghena.com" style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.88rem", color: "var(--ink)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent)" }}>✉</span> hello@maryalenoghena.com
              </a>
              <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.88rem", color: "var(--muted-txt)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent)" }}>◎</span> Available globally, remotely
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              <input className="contact-input" type="text" placeholder="Your name" required />
              <input className="contact-input" type="email" placeholder="Your email" required />
              <input className="contact-input" type="text" placeholder="What are you looking for? (optional)" />
              <textarea className="contact-input" placeholder="What's on your mind?" rows={4} style={{ resize: "none" }} required />
              <motion.button className="contact-submit" type="submit" style={{ background: "var(--accent)", color: "#fff", border: "none", padding: "0.88rem 2rem", fontFamily: "'Satoshi',sans-serif", fontSize: "0.86rem", fontWeight: 500, borderRadius: "4px", cursor: "pointer", textAlign: "left" as const }} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                Send Message →
              </motion.button>
              <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.72rem", color: "var(--muted-txt)" }}>I'll get back to you within 24 hours.</p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
