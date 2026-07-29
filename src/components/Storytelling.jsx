import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

// ─── Board dimensions & card data ─────────────────────────────────────────────
const BOARD_W = 1400;
const BOARD_H = 3500;
const CARD_W  = 560;
const CARD_H  = 280;

const MILESTONES = [
  {
    id: "website", cy: 500, side: "right",
    num: "01", category: "Website Development",
    before: "No Website?",
    beforeSub: "Brand invisible online.",
    afterCat: "Website Development",
    after: "Website Development",
    afterSub: "Fast, modern websites built to convert.",
    link: "/services/development"
  },
  {
    id: "brand", cy: 900, side: "left",
    num: "02", category: "Branding",
    before: "No Brand Identity?",
    beforeSub: "Lost inside the noise.",
    afterCat: "Branding",
    after: "Branding",
    afterSub: "Build a brand people remember.",
    link: "/services/social-media-marketting"
  },
  {
    id: "marketing", cy: 1300, side: "right",
    num: "03", category: "Digital Marketing",
    before: "Not Getting Leads?",
    beforeSub: "No customer acquisition channels.",
    afterCat: "Digital Marketing",
    after: "Digital Marketing",
    afterSub: "SEO, ads and content that drive growth.",
    link: "/services/social-media-marketting"
  },
  {
    id: "social", cy: 1700, side: "left",
    num: "04", category: "Social Media",
    before: "No Online Presence?",
    beforeSub: "No organic reach or community.",
    afterCat: "Social Media",
    after: "Social Media",
    afterSub: "Stay visible. Stay relevant.",
    link: "/services/social-media-marketting"
  },
  {
    id: "mobile", cy: 2100, side: "right",
    num: "05", category: "Mobile App Development",
    before: "Need an App?",
    beforeSub: "No direct mobile channel.",
    afterCat: "Mobile App Development",
    after: "Mobile App Development",
    afterSub: "Beautiful apps for every device.",
    link: "/services/development"
  },
  {
    id: "video", cy: 2500, side: "left",
    num: "06", category: "Video Editing",
    before: "Need Better Content?",
    beforeSub: "Operating blindly without visual hooks.",
    afterCat: "Video Editing",
    after: "Video Editing",
    afterSub: "Content that captures attention.",
    link: "/services/social-media-marketting"
  },
  {
    id: "crm", cy: 2900, side: "right",
    num: "07", category: "CRM & Automation",
    before: "Too Much Manual Work?",
    beforeSub: "Legacy spreadsheets, missed sales leads.",
    afterCat: "CRM & Automation",
    after: "CRM & Automation",
    afterSub: "Automate your business, not your effort.",
    link: "/services/development"
  },
];

const cardLeft = (side) =>
  side === "right"
    ? 700 + 50                     // path centre 700 + gap 50
    : 700 - 85 - CARD_W;           // path centre 700 − gap 85 − card width

const PATH = `
  M 700,60
  L 700,370 Q 700,400 730,400 L 1010,400 Q 1040,400 1040,430
  L 1040,570 Q 1040,600 1010,600 L 730,600 Q 700,600 700,630
  L 700,770 Q 700,800 670,800 L 390,800 Q 360,800 360,830
  L 360,970 Q 360,1000 390,1000 L 670,1000 Q 700,1000 700,1030
  L 700,1170 Q 700,1200 730,1200 L 1010,1200 Q 1040,1200 1040,1230
  L 1040,1370 Q 1040,1400 1010,1400 L 730,1400 Q 700,1400 700,1430
  L 700,1570 Q 700,1600 670,1600 L 390,1600 Q 360,1600 360,1630
  L 360,1770 Q 360,1800 390,1800 L 670,1800 Q 700,1800 700,1830
  L 700,1970 Q 700,2000 730,2000 L 1010,2000 Q 1040,2000 1040,2030
  L 1040,2170 Q 1040,2200 1010,2200 L 730,2200 Q 700,2200 700,2230
  L 700,2370 Q 700,2400 670,2400 L 390,2400 Q 360,2400 360,2430
  L 360,2570 Q 360,2600 390,2600 L 670,2600 Q 700,2600 700,2630
  L 700,2770 Q 700,2800 730,2800 L 1010,2800 Q 1040,2800 1040,2830
  L 1040,2970 Q 1040,3000 1010,3000 L 700,3000
  M 580,3080
  L 580,3200
  A 50,50 0 0,0 680,3200
  L 680,3100
  Q 680,3080 700,3080
  L 760,3080
  Q 780,3080 780,3100
  L 780,3220
  Q 780,3250 810,3250
  L 920,3250
  M 970,3250
  L 970.1,3250
`.trim();

// ─── 3D Editorial Vectors ──────────────────────────────────────────────────────
const EditorialImage = ({ id }) => {
  if (id === "website") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <path d="M 30,140 L 100,100 L 170,140 L 100,180 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <path d="M 50,60 L 120,30 L 150,110 L 80,140 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="100" cy="90" r="28" fill="url(#gold-sphere)" filter="url(#gold-metallic-pcb)" />
      <line x1="65" y1="58" x2="105" y2="41" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  if (id === "brand") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <ellipse cx="100" cy="100" rx="60" ry="25" fill="none" stroke="url(#gold-pcb)" strokeWidth="6" filter="url(#pcb-shadow)" />
      <ellipse cx="100" cy="100" rx="35" ry="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <g transform="translate(75, 75)">
        <rect x="0" y="0" width="50" height="50" rx="10" fill="rgba(8,8,10,0.7)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <text x="25" y="32" fill="#fff" fontFamily="zentry, sans-serif" fontSize="22" fontWeight="900" textAnchor="middle">UL</text>
      </g>
    </svg>
  );

  if (id === "marketing") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <path d="M 40,150 L 55,140 L 55,100 L 40,110 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path d="M 80,150 L 95,140 L 95,70 L 80,80 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M 120,150 L 135,140 L 135,40 L 120,50 Z" fill="url(#gold-pcb)" filter="url(#pcb-shadow)" />
      <path d="M 47,105 L 87,75 L 127,45" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="127" cy="45" r="4" fill="#fff" />
    </svg>
  );

  if (id === "social") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <ellipse cx="100" cy="100" rx="50" ry="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <ellipse cx="100" cy="100" rx="55" ry="22" fill="none" stroke="url(#gold-pcb)" strokeWidth="3.5" filter="url(#pcb-shadow)" transform="rotate(-15 100 100)" />
      <ellipse cx="100" cy="100" rx="55" ry="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" transform="rotate(30 100 100)" />
      <circle cx="60" cy="70" r="5" fill="#fff" />
      <circle cx="140" cy="130" r="5" fill="#eab308" />
    </svg>
  );

  if (id === "mobile") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <ellipse cx="100" cy="110" rx="55" ry="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
      <g transform="translate(75, 40) rotate(10)">
        <rect x="0" y="0" width="46" height="85" rx="8" fill="rgba(10,10,12,0.85)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <rect x="18" y="4" width="10" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
        <circle cx="23" cy="78" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="6" y="14" width="34" height="52" rx="3" fill="rgba(255,255,255,0.02)" />
        <rect x="10" y="20" width="26" height="10" rx="2" fill="url(#gold-pcb)" />
      </g>
    </svg>
  );

  if (id === "video") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <polygon points="80,60 140,100 80,140" fill="url(#gold-pcb)" filter="url(#pcb-shadow)" />
      <polygon points="78,56 144,100 78,144" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
      <ellipse cx="100" cy="100" rx="65" ry="65" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </svg>
  );

  if (id === "crm") return (
    <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" viewBox="0 0 200 200">
      <path d="M 40,100 C 40,60 160,140 160,100 C 160,60 40,140 40,100 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
      <circle cx="60" cy="90" r="14" fill="rgba(10,10,12,0.9)" stroke="#eab308" strokeWidth="2" />
      <circle cx="60" cy="90" r="4" fill="#eab308" />
      <circle cx="140" cy="110" r="14" fill="rgba(10,10,12,0.9)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <circle cx="140" cy="110" r="3" fill="#fff" />
      <circle cx="100" cy="100" r="6" fill="#eab308" filter="url(#pcb-shadow)">
        <animate attributeName="cy" values="75;125;75" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cx" values="70;130;70" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return null;
};

// ─── Pre-circuit problem intro ─────────────────────────────────────────────────
const PROBLEM_WORDS = [
  { text: "No Website?",             color: "#D4AF37" },
  { text: "No Brand Identity?",      color: "#D4AF37" },
  { text: "Not Getting Leads?",      color: "#D4AF37" },
  { text: "No Online Presence?",     color: "#D4AF37" },
  { text: "Need an App?",            color: "#D4AF37" },
  { text: "Need Better Content?",    color: "#D4AF37" },
  { text: "Too Much Manual Work?",   color: "#D4AF37" },
];

const ProblemIntro = () => {
  const sectionRef = useRef(null);
  const wordRefs   = useRef([]);
  const panelRef   = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel   = panelRef.current;
    if (!section || !panel) return;

    const words = wordRefs.current.filter(Boolean);

    // All words start invisible + slightly down
    gsap.set(words, { opacity: 0, y: 28 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end:   "bottom bottom",
        scrub: 1,
      },
    });

    const total   = words.length;
    const step    = 0.75 / total;

    words.forEach((word, i) => {
      const start = i * step;

      // Word slams in
      tl.fromTo(word,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0,  filter: "blur(0px)", duration: step * 0.4, ease: "power3.out" },
        start
      );

      // Previous word dims
      if (i > 0) {
        tl.to(words[i - 1], {
          opacity: 0.18,
          duration: step * 0.3,
          ease: "power1.in",
        }, start);
      }
    });

    // Full panel exit: fades out at 0.82 → 1.0
    tl.to(panel, {
      opacity: 0,
      duration: 0.18,
      ease: "power2.in",
      pointerEvents: "none",
    }, 0.82);

    return () => ScrollTrigger.getAll()
      .filter(st => st.vars.trigger === section)
      .forEach(st => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="problem-intro-section"
    >
      <div ref={panelRef} className="problem-intro-panel">
        {/* Eyebrow */}
        <p className="problem-intro-eyebrow">The Journey of Scale</p>

        {/* Headline */}
        <h2 className="special-font font-zentry problem-intro-headline">
          Most businesses<br />don't need more tools.
        </h2>
        <p className="font-robert-regular text-base sm:text-lg text-white/50 max-w-xl -mt-4 mb-8 leading-relaxed">
          They need everything to work together.
        </p>

        {/* Problem words */}
        <div className="problem-words-stack">
          {PROBLEM_WORDS.map((w, i) => (
            <span
              key={i}
              ref={el => { wordRefs.current[i] = el; }}
              className="problem-word"
              style={{ color: w.color }}
            >
              {w.text}
            </span>
          ))}
        </div>

        {/* Scroll cue */}
        <p className="problem-intro-cue">
          Scroll to begin <span className="pcb-bounce">↓</span>
        </p>
      </div>
    </section>
  );
};

const PCBJourney = () => {
  const sectionRef = useRef(null);
  const boardRef   = useRef(null);
  const pathRef    = useRef(null);
  const dotRef     = useRef(null);
  const cardRefs   = useRef({});

  useEffect(() => {
    const section = sectionRef.current;
    const board   = boardRef.current;
    const path    = pathRef.current;
    const dot     = dotRef.current;
    if (!section || !board || !path || !dot) return;

    const boot = setTimeout(() => {
      ScrollTrigger.refresh();
      init();
    }, 600);

    function init() {
      const totalLen  = path.getTotalLength();
      const VH        = window.innerHeight;

      // Initial board position
      const initX = 0;
      const initY = VH * 0.18 - 40;

      gsap.set(board, { x: initX, y: initY });
      gsap.set(path, { strokeDasharray: totalLen, strokeDashoffset: totalLen });
      gsap.set(dot,  { opacity: 0 });

      // Milestones start invisible
      MILESTONES.forEach(m => {
        const el = cardRefs.current[m.id];
        if (el) gsap.set(el, { opacity: 0 });
      });

      const dotPosFromLen = (len) => {
        const pt = path.getPointAtLength(len);
        return { x: pt.x, y: pt.y };
      };

      const boardYToTranslate = (boardY) => VH / 2 - boardY;

      // ── Build the GSAP scrub timeline ─────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start:   "top top",
          end:     "bottom bottom",
          scrub:   1.5,
        },
      });

      // --- Phase 1: dot appears at path start (0.04) ---
      tl.to(dot, { opacity: 1, duration: 0.03 }, 0.04);

      // --- Phase 2: thread draws, dot moves, board pans (0.06 → 0.97) ---
      const drawObj = { p: 0 };
      const cardScrollPositions = [0.10, 0.22, 0.35, 0.48, 0.61, 0.74, 0.87];

      // Smooth board pan to each card's vertical centre
      tl.to(board, {
        y: boardYToTranslate(MILESTONES[0].cy),
        duration: 0.12,
        ease: "power2.inOut",
      }, 0.08);

      cardScrollPositions.slice(1).forEach((t, i) => {
        const m       = MILESTONES[i + 1];
        const targetY = boardYToTranslate(m.cy);
        tl.to(board, {
          y: targetY,
          duration: 0.12,
          ease: "power2.inOut",
        }, t - 0.04);
      });

      // Final pan to ending
      tl.to(board, { y: boardYToTranslate(3320), duration: 0.12, ease: "power2.inOut" }, 0.92);

      // Continuous thread draw + dot movement
      tl.to(drawObj, {
        p: 1,
        ease: "none",
        duration: 0.91,
        onUpdate() {
          const len = drawObj.p * totalLen;
          gsap.set(path, { strokeDashoffset: totalLen - len });
          const pos = dotPosFromLen(len);
          gsap.set(dot, { left: pos.x, top: pos.y });
        },
      }, 0.06);

      // --- Phase 3: card activations (now editorial highlights) ---
      MILESTONES.forEach((m, i) => {
        const t   = cardScrollPositions[i];
        const el  = cardRefs.current[m.id];
        if (!el) return;

        const before = el.querySelector(".pcb-before");
        const after  = el.querySelector(".pcb-after");

        // Fades in slightly before dot reaches
        tl.to(el, { opacity: 1, duration: 0.04 }, t - 0.06);

        // Activates - scales up gently
        tl.to(el, {
          scale: 1.04,
          opacity: 1,
          duration: 0.06,
        }, t);

        if (before) tl.to(before, { opacity: 0, y: -10, duration: 0.04 }, t);
        if (after)  tl.fromTo(after,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.06 },
          t + 0.01
        );

        // Fade all other editorial components to 30% opacity
        MILESTONES.forEach((other, j) => {
          if (j === i) return;
          const otherEl = cardRefs.current[other.id];
          if (otherEl) tl.to(otherEl, { opacity: 0.3, scale: 0.98, duration: 0.05 }, t);
        });
      });

      // --- Phase 4: ending (0.95+) ---
      tl.fromTo(".pcb-ending",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.05 },
        0.95
      );

      tl.to(dot, {
        boxShadow: "0 0 28px rgba(255,40,40,1), 0 0 56px rgba(255,80,20,0.7)",
        scale: 1.35,
        duration: 0.03,
      }, 0.96);
    }

    return () => {
      clearTimeout(boot);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pcb-section"
      style={{ height: "850vh" }}
    >
      <div className="pcb-viewport">
        {/* Clean black grid lines background */}
        <div className="pcb-grid" />

        <div
          ref={boardRef}
          className="pcb-board"
          style={{ width: BOARD_W, height: BOARD_H }}
        >
          {/* SVG Thread layer (z-index 1) */}
          <svg
            viewBox={`0 0 ${BOARD_W} ${BOARD_H}`}
            style={{ position:"absolute", inset:0, width:"100%", height:"100%",
                     pointerEvents:"none", zIndex:1 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gold-pcb" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#4a2d00" />
                <stop offset="18%"  stopColor="#f5d67b" />
                <stop offset="35%"  stopColor="#b8830a" />
                <stop offset="52%"  stopColor="#fdf0a0" />
                <stop offset="68%"  stopColor="#b8830a" />
                <stop offset="84%"  stopColor="#f5d67b" />
                <stop offset="100%" stopColor="#4a2d00" />
              </linearGradient>
              <filter id="pcb-shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="3"  floodColor="#c8960c" floodOpacity="0.4" />
                <feDropShadow dx="0" dy="5" stdDeviation="8"  floodColor="#000"    floodOpacity="0.7" />
              </filter>
              
              <radialGradient id="gold-sphere" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="30%" stopColor="#ffd875" />
                <stop offset="70%" stopColor="#b5840b" />
                <stop offset="100%" stopColor="#402d01" />
              </radialGradient>
              <filter id="gold-metallic-pcb" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.4" specularExponent="22" lightingColor="#ffffff" result="specOut">
                  <fePointLight x="-5000" y="-10000" z="2000" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2" />
                <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
              </filter>
            </defs>

            {/* Ghost guide */}
            <path d={PATH} fill="none"
                  stroke="rgba(212,175,55,0.6)" strokeWidth="7"
                  strokeLinecap="round" strokeLinejoin="round" />

            {/* Live gold thread */}
            <path ref={pathRef} d={PATH} fill="none"
                  stroke="url(#gold-pcb)" strokeWidth="7"
                  strokeLinecap="round" strokeLinejoin="round"
                  filter="url(#pcb-shadow)" />
          </svg>

          {/* Ruby dot (z-index 5) */}
          <div ref={dotRef} className="pcb-dot" />

          {/* Static Red Dot at the end of CRM loop (x=700, y=3000) */}
          <div
            className="ruby-red-dot"
            style={{
              position: "absolute",
              left: 700,
              top: 3000,
              transform: "translate(-50%, -50%)",
              zIndex: 5,
              width: 14,
              height: 14,
              boxShadow: "0 0 10px rgba(255,50,50,0.8), 0 0 20px rgba(255,50,50,0.4)"
            }}
          />

          {/* Intro label (z-index 6) */}
          <div className="pcb-intro-label" style={{ left: 60, top: 40 }}>
            <span className="font-general pcb-eyebrow">System Blueprint</span>
            <h2 className="special-font font-zentry pcb-intro-title">
              Connecting the<br /><b>d</b>ots.
            </h2>
            <p className="font-robert-regular pcb-intro-body">
              We integrate your website, systems, and marketing into one clean, high-performance thread.
            </p>
            <p className="font-general pcb-intro-sub">
              Scroll to trace the circuit <span className="pcb-bounce">↓</span>
            </p>
          </div>

          {/* Milestone Editorial Blocks (z-index 10 — above thread) */}
          {MILESTONES.map((m, idx) => {
            const left = cardLeft(m.side);
            const top  = m.cy - CARD_H / 2;

            return (
              <div
                key={m.id}
                ref={el => { cardRefs.current[m.id] = el; }}
                className="pcb-card"
                style={{ left, top, width: CARD_W, height: CARD_H }}
              >
                {/* BEFORE / Problem Composition */}
                <div className={`pcb-before pcb-face flex items-center gap-8 ${m.side === "left" ? "flex-row-reverse text-right" : "flex-row"}`}>
                  <div className="w-[48%] flex flex-col justify-center">
                    <span className="editorial-problem-label">{m.before}</span>
                    <h3 className="editorial-problem-desc">{m.beforeSub}</h3>
                  </div>
                  <div className="w-[52%] flex items-center justify-center opacity-10">
                    <EditorialImage id={m.id} />
                  </div>
                </div>

                {/* AFTER / Solution Composition */}
                <div className={`pcb-after pcb-face flex items-center gap-8 ${m.side === "left" ? "flex-row-reverse text-right" : "flex-row"}`} style={{ opacity: 0 }}>
                  {/* Left Side: Typography */}
                  <div className="w-[48%] flex flex-col justify-center">
                    <span className="font-general editorial-eyebrow">{m.before}</span>
                    <h2 className="special-font font-zentry editorial-title">{m.after}</h2>
                    <p className="font-robert-regular editorial-desc mb-3">{m.afterSub}</p>
                    <Link
                      to={m.link}
                      className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#D4AF37] px-4 py-1.5 text-[9px] font-general uppercase tracking-widest text-black font-bold hover:bg-white hover:scale-105 transition-all duration-300 pointer-events-auto"
                    >
                      <span>Explore</span>
                      <LuArrowRight className="text-xs" />
                    </Link>
                  </div>
                  
                  {/* Right Side: Floating Premium 3D Art */}
                  <div className={`w-[52%] flex items-center justify-center editorial-image-container float-style-${idx}`}>
                    <EditorialImage id={m.id} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Ending — centred on x=770, directly below the logo */}
          <div
            className="pcb-ending"
            style={{
              position: "absolute",
              left: 770,
              top: 3340,
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: 0,
              width: 600,
            }}
          >
            <p className="font-robert-regular pcb-ending-sub" style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", letterSpacing: "normal" }}>
              One partner for design, development, marketing and growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const Storytelling = () => {
  return (
    <div className="storytelling-container">
      <ProblemIntro />
      <PCBJourney />
    </div>
  );
};

export default Storytelling;
