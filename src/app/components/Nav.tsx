import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const links = ["About", "Services", "Work", "Testimonials", "Contact"];
export function Nav() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <style>{`
        .nd{display:flex!important;}.nb{display:none!important;}
        .site-nav { padding: var(--nav-pad-y) clamp(1.25rem,4vw,2.5rem); }
        .nav-links { gap: clamp(1rem,2.4vw,2rem); }
        @media(max-width:860px){.nd{display:none!important;}.nb{display:flex!important;}}
      `}</style>
     <motion.nav className="site-nav" style={{ "--nav-pad-y": scrolled ? "0.9rem" : "1.4rem", position:"fixed",top:0,left:0,right:0,zIndex:500,display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255,251,244,0.97)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(28,23,18,0.07)",transition:"all 0.4s" } as CSSProperties}
        initial={{y:-80,opacity:0}} animate={mounted?{y:0,opacity:1}:{}} transition={{duration:0.5,delay:0.1,ease:EASE}}>
        <a href="#" style={{fontFamily:"'Fraunces',Georgia,serif",fontSize:"1.2rem",color:"var(--ink)",textDecoration:"none",whiteSpace:"nowrap",flexShrink:0}}>
          Mary<em style={{fontStyle:"italic",color:"var(--accent)"}}> A.</em>
        </a>
        <div className="nd nav-links" style={{alignItems:"center"}}>
          {links.map((l,i)=>(
            <motion.a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'Satoshi',sans-serif",fontSize:"0.78rem",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--muted-txt)",textDecoration:"none",position:"relative",whiteSpace:"nowrap"}}
              initial={{opacity:0,y:-8}} animate={mounted?{opacity:1,y:0}:{}} transition={{duration:0.4,delay:0.2+i*0.07,ease:EASE}} whileHover={{color:"var(--ink)"}}>
              {l}
              <motion.span style={{position:"absolute",bottom:-2,left:0,height:"1.5px",background:"var(--accent)"}} initial={{width:0}} whileHover={{width:"100%"}} transition={{duration:0.25}}/>
            </motion.a>
          ))}
        </div>
        <button className="nb" onClick={()=>setOpen(!open)} style={{background:"none",border:"none",cursor:"pointer",padding:"0.5rem",flexDirection:"column",gap:"5px"}}>
          <motion.span style={{display:"block",width:18,height:1.5,background:"var(--ink)",borderRadius:2}} animate={open?{rotate:45,y:5.5}:{rotate:0,y:0}} transition={{duration:0.25}}/>
          <motion.span style={{display:"block",width:18,height:1.5,background:"var(--ink)",borderRadius:2}} animate={open?{opacity:0}:{opacity:1}} transition={{duration:0.25}}/>
          <motion.span style={{display:"block",width:18,height:1.5,background:"var(--ink)",borderRadius:2}} animate={open?{rotate:-45,y:-5.5}:{rotate:0,y:0}} transition={{duration:0.25}}/>
        </button>
      </motion.nav>
      <AnimatePresence>
        {open&&(
          <motion.div initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:0.28,ease:EASE}}
            style={{position:"fixed",top:58,left:0,right:0,zIndex:499,background:"rgba(255,251,244,0.98)",backdropFilter:"blur(16px)",padding:"1.5rem 2rem",display:"flex",flexDirection:"column",gap:"1.2rem",borderBottom:"1px solid rgba(28,23,18,0.08)"}}>
            {links.map(l=>(
              <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)}
                style={{fontFamily:"'Satoshi',sans-serif",fontSize:"1rem",color:"var(--ink)",textDecoration:"none",padding:"0.3rem 0",borderBottom:"1px solid rgba(28,23,18,0.06)",display:"block"}}>{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}