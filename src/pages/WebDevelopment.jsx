import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import {
  LuTimerOff,
  LuSmartphone,
  LuEye,
  LuMousePointerClick,
  LuWrench,
  LuArrowRight,
  LuArrowDown,
  LuBadgeCheck,
  LuUserX,
  LuSearch,
  LuPenTool,
  LuCode2,
  LuRocket,
  LuTrendingUp,
  LuLayers,
  LuGauge,
  LuLayoutTemplate,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuClock,
  LuShieldCheck,
} from "react-icons/lu";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiShopify,
  SiWordpress,
  SiWebflow,
  SiFirebase,
  SiFramer,
  SiGreensock,
  SiStripe,
  SiSanity,
} from "react-icons/si";

import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import { BentoTilt } from "../components/Features";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────────────────── */

const IMPACT_STATS = [
  {
    icon: LuTimerOff,
    color: "#fb7185",
    value: 53,
    suffix: "%",
    decimals: 0,
    label: "of mobile visitors abandon a site that takes over 3 seconds to load.",
  },
  {
    icon: LuEye,
    color: "#38bdf8",
    value: 0.05,
    suffix: "s",
    decimals: 2,
    label: "is all it takes a visitor to form an opinion of your brand.",
  },
  {
    icon: LuUserX,
    color: "#a78bfa",
    value: 88,
    suffix: "%",
    decimals: 0,
    label: "won't come back to a site after one bad experience.",
  },
];

const PROBLEM_FIX_PAIRS = [
  {
    icon: LuTimerOff,
    problem: "Visitors bounce before the page even finishes loading.",
    fix: "Sub-2-second load times, even on a slow connection.",
  },
  {
    icon: LuSmartphone,
    problem: "It looks broken — or just embarrassing — on a phone.",
    fix: "Pixel-perfect on every screen, from a 6\" phone to a 32\" monitor.",
  },
  {
    icon: LuEye,
    problem: "Nobody can tell what you sell or why it matters, in 5 seconds.",
    fix: "A homepage that states the offer clearly in one glance.",
  },
  {
    icon: LuMousePointerClick,
    problem: "There's no clear path from \"just looking\" to \"just bought.\"",
    fix: "Conversion paths engineered around one goal: getting the click.",
  },
  {
    icon: LuWrench,
    problem: "Every small update means waiting on a developer who's gone quiet.",
    fix: "A clean, editable build your team can actually maintain.",
  },
];

const DELIVERABLES = [
  {
    icon: LuCode2,
    color: "#D4AF37",
    title: "Custom Design & Build",
    desc: "No templates or block-builders. Every layout is hand-drawn for your branding, then optimized to convert.",
    video: "/videos/feature-1.mp4",
  },
  {
    icon: LuSmartphone,
    color: "#38bdf8",
    title: "Fully Responsive",
    desc: "One codebase, fluidly responsive across desktops, tablets, and phones — tested on physical hardware.",
    video: "/videos/feature-5.mp4",
  },
  {
    icon: LuGauge,
    color: "#fb923c",
    title: "Performance Optimization",
    desc: "Asset optimization, lazy loading, and lightweight bundles ensuring top-tier Core Web Vitals.",
    video: "/videos/feature-3.mp4",
  },
  {
    icon: LuTrendingUp,
    color: "#34d399",
    title: "SEO-Ready Architecture",
    desc: "Semantic elements, automated meta setups, and correct site schema built in from day one.",
    video: "/videos/feature-4.mp4",
  },
  {
    icon: LuLayoutDashboard,
    color: "#a78bfa",
    title: "Headless CMS & E-Commerce",
    desc: "Shopify, WordPress, Sanity, or custom admin tools allowing your team to update copies without devs.",
    video: "/videos/feature-2.mp4",
  },
  {
    icon: LuLifeBuoy,
    color: "#22d3ee",
    title: "Support & Security SLA",
    desc: "Post-launch security patches, automatic backup procedures, and constant speed monitoring.",
    video: "/videos/feature-1.mp4",
  },
];

const STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#a1a1aa" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Shopify", icon: SiShopify, color: "#95BF47" },
  { name: "WordPress", icon: SiWordpress, color: "#4c9ed9" },
  { name: "Webflow", icon: SiWebflow, color: "#4353FF" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Framer Motion", icon: SiFramer, color: "#a78bfa" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "Sanity CMS", icon: SiSanity, color: "#F03E2F" },
];

const PROCESS = [
  {
    num: "01",
    icon: LuSearch,
    color: "#38bdf8",
    title: "Discover",
    desc: "We learn your business, your customers, and what the site actually needs to achieve.",
  },
  {
    num: "02",
    icon: LuPenTool,
    color: "#a78bfa",
    title: "Design",
    desc: "Wireframes, then high-fidelity design — built around one clear conversion goal per page.",
  },
  {
    num: "03",
    icon: LuCode2,
    color: "#eab308",
    title: "Develop",
    desc: "Clean, hand-coded builds. Fast, responsive, and structured for SEO from the first commit.",
  },
  {
    num: "04",
    icon: LuRocket,
    color: "#fb7185",
    title: "Launch",
    desc: "QA across devices and browsers, then a smooth, zero-downtime go-live.",
  },
  {
    num: "05",
    icon: LuTrendingUp,
    color: "#34d399",
    title: "Grow",
    desc: "Post-launch support, performance monitoring, and iteration based on real user data.",
  },
];

const STATS = [
  { value: 50, prefix: "", suffix: "+", decimals: 0, label: "Sites Shipped" },
  { value: 1.5, prefix: "<", suffix: "s", decimals: 1, label: "Avg. Load Time" },
  { value: 99, prefix: "", suffix: "%", decimals: 0, label: "Client Satisfaction" },
  { value: 100, prefix: "", suffix: "%", decimals: 0, label: "Mobile Ready" },
];

const FAQS = [
  {
    icon: LuClock,
    color: "#38bdf8",
    q: "How long does a project actually take?",
    a: "Most sites launch in 2–5 weeks depending on scope. You'll get a fixed timeline before any work starts — no open-ended timelines.",
  },
  {
    icon: LuShieldCheck,
    color: "#34d399",
    q: "Do I own the code and the design when it's done?",
    a: "Yes — 100%. Once the project is paid in full, the codebase, assets, and design files are yours outright.",
  },
  {
    icon: LuWrench,
    color: "#fb923c",
    q: "What if I need changes after launch?",
    a: "Every project includes a support window post-launch, and we offer month-to-month maintenance plans after that for ongoing changes.",
  },
  {
    icon: LuLayoutTemplate,
    color: "#a78bfa",
    q: "Can you work with our existing brand guidelines?",
    a: "Absolutely — we can build strictly within an existing brand system, or help evolve it if there isn't one yet.",
  },
  {
    icon: LuCode2,
    color: "#fb7185",
    q: "What platforms do you build on?",
    a: "Depends on the goal: hand-coded React/Next.js for custom products, Shopify for e-commerce, WordPress or Webflow for content-heavy sites.",
  },
];

/* ── Heading arrays for Zentry stagger animation ────────────────── */
const WEB_TITLE = [
  { char: "w", bold: false },
  { char: "e", bold: true },
  { char: "b", bold: false },
];

const DEV_TITLE = [
  { char: "d", bold: false },
  { char: "e", bold: false },
  { char: "v", bold: false },
  { char: "e", bold: false },
  { char: "l", bold: false },
  { char: "o", bold: true },
  { char: "p", bold: false },
  { char: "m", bold: false },
  { char: "e", bold: false },
  { char: "n", bold: true },
  { char: "t", bold: false },
];

/* ────────────────────────────────────────────────────────────────────────
   SMALL BUILDING BLOCKS
   ──────────────────────────────────────────────────────────────────────── */

const Eyebrow = ({ children, className = "" }) => (
  <p
    className={`font-general text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] ${className}`}
  >
    {children}
  </p>
);

const SmoothLetter = ({ char, bold, trigger, delay }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const timeoutId = setTimeout(() => {
      setActive(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [trigger, delay]);

  const className = `smooth-char ${active ? "active" : ""}`;

  return (
    <span className="smooth-char-wrapper">
      {bold ? (
        <b className={className}>{char}</b>
      ) : (
        <span className={className}>{char}</span>
      )}
    </span>
  );
};

const CountUp = ({ value, suffix = "", decimals = 0, className = "" }) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = obj.val.toFixed(decimals) + suffix;
      },
    });
  }, []);

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals) + suffix}
    </span>
  );
};

const DeliverableCard = ({ title, desc, videoSrc, number, color }) => {
  const videoRef = useRef(null);
  return (
    <BentoTilt className="border-hsla group relative h-full min-h-[360px] overflow-hidden rounded-lg bg-white/[0.015] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover opacity-10 transition-opacity duration-500 group-hover:opacity-20"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

      <div className="relative z-20 flex h-full flex-col justify-between">
        <div>
          <span className="font-zentry text-6xl font-black text-white/5 tracking-tighter block mb-6 select-none group-hover:text-white/10 transition-colors duration-300">
            {number}
          </span>
          <h3 className="font-circular-web text-2xl font-bold text-white tracking-wide">
            {title}
          </h3>
          <p className="mt-3 font-robert-regular text-sm leading-relaxed text-white/45 group-hover:text-white/70 transition-colors duration-300">
            {desc}
          </p>
        </div>

        <span
          className="h-[2px] w-0 transition-all duration-500 ease-out group-hover:w-full mt-6"
          style={{ backgroundColor: color }}
        />
      </div>
    </BentoTilt>
  );
};

const ICON_COLORS = [
  { text: "#fb7185", bg: "rgba(251, 113, 133, 0.08)", border: "rgba(251, 113, 133, 0.3)" },
  { text: "#38bdf8", bg: "rgba(56, 189, 248, 0.08)", border: "rgba(56, 189, 248, 0.3)" },
  { text: "#a78bfa", bg: "rgba(167, 139, 250, 0.08)", border: "rgba(167, 139, 250, 0.3)" },
  { text: "#34d399", bg: "rgba(52, 211, 153, 0.08)", border: "rgba(52, 211, 153, 0.3)" },
  { text: "#fb923c", bg: "rgba(251, 146, 60, 0.08)", border: "rgba(251, 146, 60, 0.3)" },
];

/* 3D card: rests staggered in depth/height (fanned arc, like tilted phone
   mockups), then on scroll it lifts off, tumbles forward, and settles back
   into its own resting spot with the solution face now showing. */
const ThreeDRevolvingCard = ({ pair, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Curve rotation to create a 3D curved widescreen layout
  const defaultRotateY = (index - 2) * 8;
  // Resting depth/height stagger so cards look like physical objects
  // fanned out in space rather than a flat identical row.
  const depthZ = -Math.abs(index - 2) * 50;
  const restY = Math.abs(index - 2) * 14;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const colors = ICON_COLORS[index] || ICON_COLORS[0];
  const Icon = pair.icon;

  return (
    <div
      className="relative w-full h-[320px] md:h-[380px] cursor-pointer"
      style={{ perspective: "1800px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full relative transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        <div
          className="inner-card w-full h-full relative"
          data-depth-z={depthZ}
          data-rest-y={restY}
          data-default-rotate-y={defaultRotateY}
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(${depthZ}px) translateY(${restY}px) rotateY(${defaultRotateY}deg)`,
            boxShadow: `0 ${20 + Math.abs(index - 2) * 4}px 40px rgba(0, 0, 0, 0.55)`,
          }}
        >
          {/* FRONT FACE: The Problem */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl p-5 md:p-6 flex flex-col justify-between border border-[#401616] bg-gradient-to-br from-[#200a0a] via-[#0d0505] to-[#050202] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Glossy sweep to sell the 3D-object feel */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.06) 0%, transparent 35%)",
              }}
            />

            {/* Watermark Icon */}
            <div
              className="absolute right-[-15px] bottom-[-15px] z-0 select-none pointer-events-none text-[8rem] opacity-[0.03] transition-transform duration-500 group-hover:scale-110"
              style={{ color: colors.text }}
            >
              <Icon />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="flex size-10 items-center justify-center rounded-xl border transition-all duration-300 animate-pulse"
                  style={{
                    borderColor: colors.border,
                    backgroundColor: colors.bg,
                    color: colors.text,
                    boxShadow: `0 0 15px ${colors.text}15`,
                  }}
                >
                  <Icon className="text-lg" />
                </span>
                <span className="font-general text-[9px] uppercase tracking-widest text-white/30">
                  Problem {index + 1}
                </span>
              </div>
              <p className="font-general text-[9px] uppercase tracking-[0.2em] text-red-400/60 mb-1">
                Where sites fall short
              </p>
              <h3 className="font-circular-web text-base md:text-lg font-bold text-white/95 leading-snug">
                {pair.problem}
              </h3>
            </div>
            <div className="relative z-10 text-left">
              <span className="text-[9px] font-general uppercase tracking-wider text-white/20">
                Hover to tilt card
              </span>
            </div>
          </div>

          {/* BACK FACE: The Solution */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl p-5 md:p-6 flex flex-col justify-between border border-[#164028] bg-gradient-to-br from-[#0a2014] via-[#050d09] to-[#020503] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Glossy sweep to sell the 3D-object feel */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.06) 0%, transparent 35%)",
              }}
            />

            {/* Watermark Icon */}
            <div className="absolute right-[-15px] bottom-[-15px] z-0 select-none pointer-events-none text-[8rem] opacity-[0.03] text-emerald-400">
              <LuBadgeCheck />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="flex size-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <LuBadgeCheck className="text-lg" />
                </span>
                <span className="font-general text-[9px] uppercase tracking-widest text-emerald-400/40">
                  Solution {index + 1}
                </span>
              </div>
              <p className="font-general text-[9px] uppercase tracking-[0.2em] text-emerald-400/80 mb-1">
                What we build instead
              </p>
              <h3 className="font-circular-web text-base md:text-lg font-bold text-emerald-50 leading-snug">
                {pair.fix}
              </h3>
            </div>
            <div className="relative z-10 text-left">
              <span className="text-[9px] font-general uppercase tracking-wider text-emerald-400/60">
                Engineered to scale
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ item, isOpen, onClick }) => {
  const Icon = item.icon;
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="flex items-center gap-4">
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
            style={
              isOpen
                ? {
                    borderColor: `${item.color}55`,
                    backgroundColor: `${item.color}18`,
                    color: item.color,
                  }
                : {
                    borderColor: "rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    color: "rgba(255,255,255,0.4)",
                  }
            }
          >
            <Icon className="text-sm" />
          </span>
          <span className="font-circular-web text-base text-blue-50 sm:text-lg">
            {item.q}
          </span>
        </span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full border border-white/20 font-general text-sm text-white/70 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pl-[3.25rem] font-robert-regular text-sm leading-relaxed text-white/45">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────────── */

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const timelineRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.set("#wd-hero-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#wd-hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#wd-hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Master Timeline for Pinning and Revolving Cards
    if (cardsContainerRef.current && sectionRef.current) {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        const cards = gsap.utils.toArray(cardsContainerRef.current.querySelectorAll(".inner-card"));

        // Step 1: Position cards initially in a flat horizontal row
        cards.forEach((card, index) => {
          const defaultRotateY = (index - 2) * 8;
          const initialX = (index - 2) * 220; // flat spacing
          gsap.set(card, {
            x: initialX,
            y: 0,
            z: 0,
            rotateY: defaultRotateY,
          });
        });

        // Step 2: Master Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1800", // slightly longer duration to enjoy the spin
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        const radius = 320; // Expanded 3D ring radius to prevent overlapping

        // A. Morph from flat row to 3D Ring (cards lift and organize in circle, facing forward)
        cards.forEach((card, index) => {
          const angle = index * 72; // 5 cards = 72 deg spacing
          const ringX = radius * Math.sin((angle * Math.PI) / 180);
          const ringZ = radius * Math.cos((angle * Math.PI) / 180);
          const defaultRotateY = (index - 2) * 8;

          tl.to(
            card,
            {
              x: ringX,
              y: -80, // lift up together in the air
              z: ringZ,
              rotateY: defaultRotateY, // keep facing forward to show Problems
              ease: "power2.inOut",
              duration: 1.2,
            },
            0
          );
        });

        // B. Spin/Orbit the cards 360 degrees while remaining billboarded to camera
        const orbitData = { angleOffset: 0 };
        tl.to(
          orbitData,
          {
            angleOffset: 360,
            ease: "none",
            duration: 2.5,
            onUpdate: () => {
              cards.forEach((card, index) => {
                const baseAngle = index * 72;
                const currentAngle = baseAngle + orbitData.angleOffset;
                const ringX = radius * Math.sin((currentAngle * Math.PI) / 180);
                const ringZ = radius * Math.cos((currentAngle * Math.PI) / 180);

                gsap.set(card, {
                  x: ringX,
                  z: ringZ,
                });
              });
            }
          },
          1.2
        );

        // C. Settle cards back to flat row, but flipped to solutions face (180 deg)
        cards.forEach((card, index) => {
          const finalX = (index - 2) * 220;
          const finalRotateY = 180 + (index - 2) * 8;

          tl.to(
            card,
            {
              x: finalX,
              y: 0, // land back down
              z: 0,
              rotateY: finalRotateY,
              ease: "power2.inOut",
              duration: 1.2,
            },
            3.7
          );
        });
      } else {
        // Mobile: Flip cards individually as they scroll past center
        const cards = gsap.utils.toArray(
          sectionRef.current.querySelectorAll(".mobile-card-wrapper .inner-card")
        );
        cards.forEach((card, index) => {
          const defaultRotateY = (index - 2) * 8;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: card.closest(".mobile-card-item"),
                start: "top 45%",
                end: "bottom 30%",
                scrub: 1.5,
              },
            })
            .to(card, {
              y: -40,
              z: 100,
              rotateY: defaultRotateY + 180,
              scale: 1.05,
              ease: "power1.inOut",
            })
            .to(card, {
              y: 0,
              z: 0,
              rotateY: defaultRotateY + 180,
              scale: 1,
              ease: "power1.inOut",
            });
        });
      }
    }

    // Timeline progress line fills in as the process section scrolls by
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: timelineRef.current.parentElement,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-screen overflow-x-clip bg-black">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div className="relative h-dvh w-screen overflow-x-hidden pt-4">
        <div
          id="wd-hero-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          <video
            src="/videos/feature-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 z-30 bg-black/65" />

          <div className="absolute inset-0 z-40 flex flex-col justify-between px-3 md:px-10 pb-10 pt-28">
            <div className="flex items-center justify-between">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-white/50">
                Service · Web Development
              </span>
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-white/50">
                Scroll to explore
              </span>
            </div>

            <div className="flex flex-col">
              <p className="font-general text-xs uppercase tracking-[0.2em] text-[#D4AF37] opacity-0 animate-[fadeIn_0.8s_ease_0.2s_forwards]">
                Websites, engineered
              </p>

              {/* Typewriter staggered header like home page */}
              <div className="flex flex-col mt-3">
                <h1
                  className="special-font hero-heading text-white"
                  style={{ lineHeight: 0.88, marginBottom: "0.04em" }}
                >
                  {WEB_TITLE.map((l, i) => (
                    <SmoothLetter
                      key={i}
                      char={l.char}
                      bold={l.bold}
                      trigger={videoLoaded}
                      delay={i * 80}
                    />
                  ))}
                </h1>

                <h1
                  className="special-font hero-heading text-white"
                  style={{ lineHeight: 0.88 }}
                >
                  {DEV_TITLE.map((l, i) => (
                    <SmoothLetter
                      key={i}
                      char={l.char}
                      bold={l.bold}
                      trigger={videoLoaded}
                      delay={240 + i * 80}
                    />
                  ))}
                </h1>
              </div>

              <p className="mt-6 max-w-lg font-robert-regular text-sm leading-relaxed text-white/60 opacity-0 animate-[fadeIn_0.9s_ease_0.7s_forwards] sm:text-base">
                We design and build websites that load fast, look sharp on
                every screen, and turn visitors into customers — not just
                another portfolio piece.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 opacity-0 animate-[fadeIn_0.9s_ease_0.9s_forwards]">
                <a href="/#contact">
                  <Button
                    id="wd-cta-quote"
                    title="Get a Free Quote"
                    leftIcon={<TiLocationArrow />}
                    containerClass="bg-[#D4AF37] hover:bg-[#b8902d] flex-center gap-1 transition-all duration-300"
                  />
                </a>
                <a href="#wd-process">
                  <Button
                    id="wd-cta-process"
                    title="See Our Process"
                    containerClass="border border-white/40 bg-white/10 text-white backdrop-blur-sm flex-center gap-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DELIVERABLES (Asymmetrical Bento Grid) ──────────────────────── */}
      <section className="bg-[#06060a] px-3 md:px-10 py-28 md:py-36 border-t border-white/5">
        <div className="container mx-auto">
          <Reveal className="text-center flex flex-col items-center">
            <Eyebrow>What's included</Eyebrow>
            <AnimatedTitle
              title="Everything a modern <br /> website needs."
              containerClass="mt-4"
            />
          </Reveal>

          {/* Asymmetrical Bento Grid matching Features layout structure */}
          <div className="mt-16 grid gap-6 md:grid-cols-6 md:grid-rows-2">
            {/* Card 1: Custom Design - col-span-3 row-span-2 */}
            <div className="md:col-span-3 md:row-span-2">
              <DeliverableCard
                title={DELIVERABLES[0].title}
                desc={DELIVERABLES[0].desc}
                videoSrc={DELIVERABLES[0].video}
                number="01"
                color={DELIVERABLES[0].color}
              />
            </div>

            {/* Card 2: Fully Responsive - col-span-3 row-span-1 */}
            <div className="md:col-span-3 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[1].title}
                desc={DELIVERABLES[1].desc}
                videoSrc={DELIVERABLES[1].video}
                number="02"
                color={DELIVERABLES[1].color}
              />
            </div>

            {/* Card 3: Performance - col-span-3 row-span-1 */}
            <div className="md:col-span-3 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[2].title}
                desc={DELIVERABLES[2].desc}
                videoSrc={DELIVERABLES[2].video}
                number="03"
                color={DELIVERABLES[2].color}
              />
            </div>

            {/* Card 4: SEO - col-span-2 row-span-1 */}
            <div className="md:col-span-2 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[3].title}
                desc={DELIVERABLES[3].desc}
                videoSrc={DELIVERABLES[3].video}
                number="04"
                color={DELIVERABLES[3].color}
              />
            </div>

            {/* Card 5: CMS - col-span-2 row-span-1 */}
            <div className="md:col-span-2 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[4].title}
                desc={DELIVERABLES[4].desc}
                videoSrc={DELIVERABLES[4].video}
                number="05"
                color={DELIVERABLES[4].color}
              />
            </div>

            {/* Card 6: Support - col-span-2 row-span-1 */}
            <div className="md:col-span-2 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[5].title}
                desc={DELIVERABLES[5].desc}
                videoSrc={DELIVERABLES[5].video}
                number="06"
                color={DELIVERABLES[5].color}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS + TESTIMONIAL (Social Proof Restructured Here) ─────────── */}
      <section className="bg-[#06060a] px-3 md:px-10 py-24 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-16 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="text-center">
                <p className="font-zentry text-5xl font-black text-white sm:text-6xl">
                  {s.prefix}
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 font-general text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-circular-web text-xl leading-relaxed text-blue-50 sm:text-2xl">
              "They rebuilt our site in three weeks. Load time dropped,
              bounce rate dropped, and our contact form has never been busier."
            </p>
            <p className="mt-6 font-general text-[10px] uppercase tracking-[0.2em] text-white/35">
              — Operations Lead, D2C Retail Brand
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEM / FIX (The Reality) ────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="relative z-10 min-h-screen md:h-screen flex flex-col justify-center bg-black px-3 md:px-10 py-4 overflow-hidden"
      >
        <div className="container mx-auto pt-24 md:pt-28">
          <Reveal className="text-center flex flex-col items-center">
            <Eyebrow className="text-center">The reality</Eyebrow>
            <AnimatedTitle
              title="Most business websites <br /> are quietly losing money."
              containerClass="mt-4"
            />
          </Reveal>

          {/* Desktop: 3D Ring-Row Morphing Carousel */}
          <div 
            ref={cardsContainerRef} 
            className="hidden md:block relative w-full h-[380px] max-w-5xl mx-auto mt-12"
            style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          >
            <div 
              className="absolute inset-0 card-ring-wrapper" 
              style={{ transformStyle: "preserve-3d" }}
            >
              {PROBLEM_FIX_PAIRS.map((pair, i) => (
                <div
                  key={pair.problem}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[380px]"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <ThreeDRevolvingCard pair={pair} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Standard Grid stack */}
          <div className="block md:hidden mobile-card-wrapper grid grid-cols-1 gap-6 mt-8 max-w-md mx-auto">
            {PROBLEM_FIX_PAIRS.map((pair, i) => (
              <div key={pair.problem} className="mobile-card-item">
                <ThreeDRevolvingCard pair={pair} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ───────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-black py-10 mt-20 md:mt-32">
        <Reveal>
          <p className="mb-8 text-center font-general text-[10px] uppercase tracking-[0.24em] text-white/30">
            Built with tools that scale
          </p>
        </Reveal>
        <div className="wd-marquee">
          <div className="wd-marquee-track">
            {[...STACK, ...STACK].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <span key={i} className="wd-marquee-item group flex items-center gap-4">
                  <Icon
                    className="text-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-100 sm:text-3xl"
                    style={{ color: tech.color }}
                  />
                  {tech.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section id="wd-process" className="px-3 md:px-10 py-28 md:py-36">
        <div className="container mx-auto">
          <Reveal className="text-center flex flex-col items-center">
            <Eyebrow>How we work</Eyebrow>
            <AnimatedTitle
              title="Five steps. <br /> Zero surprises."
              containerClass="mt-4"
            />
          </Reveal>

          <div className="relative mt-16 flex flex-col max-w-5xl mx-auto">
            <span className="pointer-events-none absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-white/10 sm:block" />
            <span
              ref={timelineRef}
              className="pointer-events-none absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-[#D4AF37] sm:block"
              style={{ transform: "scaleY(0)" }}
            />
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 0.08} y={22}>
                  <div className="group relative flex items-start gap-6 border-t border-white/10 py-8 last:border-b sm:gap-10">
                    <span
                      className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                      style={{
                        borderColor: `${step.color}40`,
                        backgroundColor: `${step.color}14`,
                        color: step.color,
                      }}
                    >
                      <Icon className="text-xl" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-zentry text-2xl font-black text-white/15 sm:text-3xl">
                          {step.num}
                        </span>
                        <h3 className="font-circular-web text-xl text-white sm:text-2xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-xl font-robert-regular text-sm leading-relaxed text-white/40 sm:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ (Split Columns Layout) ────────────────────────────────── */}
      <section className="bg-[#06060a] px-3 md:px-10 py-28 md:py-36 border-t border-white/5">
        <div className="container mx-auto grid gap-12 md:grid-cols-12 md:items-start">
          {/* Left Column Sticky Header */}
          <div className="md:col-span-5 md:sticky md:top-28">
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
              <AnimatedTitle
                title="Before<br />you ask."
                containerClass="mt-4 faq-left-title !text-5xl md:!text-6xl !leading-[0.9]"
              />
              <p className="mt-6 max-w-sm font-robert-regular text-sm leading-relaxed text-white/40">
                Have a question about deliverables, timelines, or technologies? Check our general responses here or reach out directly.
              </p>
            </Reveal>
          </div>

          {/* Right Column FAQs */}
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              {FAQS.map((item, i) => (
                <FaqItem
                  key={item.q}
                  item={item}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC CONTACT SECTION ───────────────────────────────── */}
      <Contact />

      <Footer />
    </div>
  );
};

export default WebDevelopment;