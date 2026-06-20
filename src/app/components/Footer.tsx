export function Footer() {
  return (
    <footer style={{ background: "var(--secondary)", padding: "3rem 1.5rem 2rem" }}>
      <style>{`
        .footer-inner { max-width: min(1000px, 100%); margin: 0 auto; }
        .footer-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; border-top: 1px solid rgba(28,23,18,0.1); padding-top: 1.2rem; margin-top: 1.4rem; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 0.8rem clamp(1rem,3vw,1.5rem); list-style: none; padding: 0; margin: 0; }
        @media (max-width: 560px) {
          .footer-row { align-items:flex-start; flex-direction:column; }
        }
      `}</style>
      <div className="footer-inner">
        <div style={{ fontFamily: "'Fraunces',Georgia,serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--ink)", maxWidth: "420px", lineHeight: 1.6, marginBottom: "1.4rem" }}>
          "The best investment you'll ever make is in your own growth."
        </div>
        <div className="footer-row">
          <div style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "1rem", color: "var(--ink)" }}>
            Mary <em style={{ fontStyle: "italic", color: "var(--accent)" }}>A.</em>
          </div>
          <ul className="footer-links">
            {["About", "Services", "Work", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.7rem", color: "var(--muted-txt)", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase" as const, transition: "color 0.2s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted-txt)")}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "0.7rem", color: "rgba(28,23,18,0.3)" }}>© 2025 Mary Alenoghena</div>
        </div>
      </div>
    </footer>
  );
}
