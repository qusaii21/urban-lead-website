import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Flag data — ISO-2 lowercase country codes ──────────────────────────────
const COL_A = [
  "us", "gb", "ae", "de", "fr", "ca", "au", "jp", "sg",
  "br", "in", "za", "nl", "se", "ch", "be", "it", "es",
];

const COL_B = [
  "kr", "mx", "nz", "pt", "no", "dk", "fi", "at", "ie",
  "pl", "cz", "hu", "ro", "gr", "tr", "il", "sa", "qa",
];

const COL_C = [
  "ke", "ng", "eg", "my", "th", "ph", "id", "vn", "pk",
  "bd", "cl", "ar", "co", "pe", "ec", "uy", "gt", "do",
];

// Duplicate each column so the scroll loop is seamless
const makeLoop = (arr) => [...arr, ...arr];

const FlagColumn = ({ flags, speed, reverse = false }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const itemH  = 72;               // px — height of each flag cell
    const half   = flags.length / 2; // original (non-duped) count
    const loopH  = half * itemH;     // total height of one full set

    // For reverse columns start halfway through so motion is immediately visible
    gsap.set(el, { y: reverse ? -loopH : 0 });

    const fromY = reverse ? -loopH : 0;
    const toY   = reverse ? 0      : -loopH;

    gsap.set(el, { y: fromY });

    const tween = gsap.to(el, {
      y:        toY,
      duration: speed,
      ease:     "none",
      repeat:   -1,
    });

    return () => tween.kill();
  }, [flags, speed, reverse]);

  return (
    <div className="global-col">
      <div ref={trackRef} className="global-col-track">
        {flags.map((code, i) => (
          <div key={i} className="global-flag-cell">
            <img
              src={`https://flagcdn.com/w80/${code}.png`}
              alt={code}
              className="global-flag-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const GlobalReach = () => {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const subRef     = useRef(null);
  const statsRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal on scroll
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 1.1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.9, ease: "power3.out", delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.7, ease: "power2.out",
          stagger: 0.12, delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="global-section">
      {/* ── Left: copy ─────────────────────────────────────────── */}
      <div className="global-copy">
        {/* eyebrow */}
        <p className="global-eyebrow">Worldwide Presence</p>

        {/* headline */}
        <h2 ref={headRef} className="special-font font-zentry global-headline">
          Built &amp; delivered<br />
          <b>a</b>cross the<br />
          <b>g</b>lobe.
        </h2>

        {/* sub copy */}
        <p ref={subRef} className="font-robert-regular global-sub">
          From Silicon Valley boardrooms to emerging markets, we've partnered
          with clients on every inhabited continent — crafting digital
          experiences that cross every border.
        </p>

        {/* stats row */}
        <div ref={statsRef} className="global-stats">
          <div className="global-stat">
            <span className="global-stat-num">40+</span>
            <span className="global-stat-label">Countries</span>
          </div>
          <div className="global-stat-divider" />
          <div className="global-stat">
            <span className="global-stat-num">6</span>
            <span className="global-stat-label">Continents</span>
          </div>
          <div className="global-stat-divider" />
          <div className="global-stat">
            <span className="global-stat-num">200+</span>
            <span className="global-stat-label">Projects shipped</span>
          </div>
        </div>
      </div>

      {/* ── Right: vertical flag carousel ──────────────────────── */}
      <div className="global-carousel-wrap">
        {/* fade masks top & bottom */}
        <div className="global-fade global-fade-top" />
        <div className="global-fade global-fade-bottom" />

        <div className="global-carousel">
          {/* column A — downward, fastest */}
          <FlagColumn flags={makeLoop(COL_A)} speed={12} reverse={false} />
          {/* column B — upward, medium */}
          <FlagColumn flags={makeLoop(COL_B)} speed={17} reverse={true} />
          {/* column C — downward, slowest */}
          <FlagColumn flags={makeLoop(COL_C)} speed={14} reverse={false} />
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
