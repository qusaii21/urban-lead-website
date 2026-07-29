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
  SiFlutter,
  SiSwift,
  SiSalesforce,
  SiHubspot,
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
    label: "of visitors leave a site that takes longer than 3 seconds to load.",
  },
  {
    icon: LuSmartphone,
    color: "#38bdf8",
    value: 90,
    suffix: "%",
    decimals: 0,
    label: "of time spent on mobile happens inside apps, not the browser.",
  },
  {
    icon: LuEye,
    color: "#a78bfa",
    value: 93,
    suffix: "%",
    decimals: 0,
    label: "of online journeys start with a search engine, not a direct visit.",
  },
];

const DELIVERABLES = [
  {
    icon: LuCode2,
    color: "#D4AF37",
    title: "Web Apps & Sites",
    desc: "Custom React and Next.js builds — fast, responsive, and coded by hand, not assembled from a template.",
    video: "/videos/feature-1.mp4",
  },
  {
    icon: LuSmartphone,
    color: "#38bdf8",
    title: "iOS & Android Apps",
    desc: "Native performance from a single React Native or Flutter codebase, wired directly into your phone's hardware.",
    video: "/videos/feature-5.mp4",
  },
  {
    icon: LuTrendingUp,
    color: "#fb923c",
    title: "Search Engine Optimization",
    desc: "Schema markup, clean metadata, and page-speed tuning so Google finds you before your competitors do.",
    video: "/videos/feature-3.mp4",
  },
  {
    icon: LuLayers,
    color: "#34d399",
    title: "CRM & Lead Routing",
    desc: "Every signup, form, and lead event syncs straight into HubSpot or Salesforce — no manual exports.",
    video: "/videos/feature-4.mp4",
  },
  {
    icon: LuLayoutDashboard,
    color: "#a78bfa",
    title: "Content Management",
    desc: "Update site copy, images, and in-app banners yourself through Shopify, Sanity, or a custom admin panel.",
    video: "/videos/feature-2.mp4",
  },
  {
    icon: LuLifeBuoy,
    color: "#22d3ee",
    title: "Ongoing Support",
    desc: "Security patching, backups, and server scaling handled after launch, so you're not on your own.",
    video: "/videos/feature-1.mp4",
  },
];

const STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#a1a1aa" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
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
    desc: "We map out what the site needs to do, what the app needs to do, and where they can share a backend.",
  },
  {
    num: "02",
    icon: LuPenTool,
    color: "#a78bfa",
    title: "Design",
    desc: "Wireframes for every screen — web and mobile — built around how people actually move toward a purchase.",
  },
  {
    num: "03",
    icon: LuCode2,
    color: "#eab308",
    title: "Develop",
    desc: "Next.js on the frontend, React Native or Flutter for mobile, sharing one API wherever it saves you money.",
  },
  {
    num: "04",
    icon: LuLayers,
    color: "#fb7185",
    title: "Integrate & Optimize",
    desc: "CRM sync, SEO schema, push notifications — whatever the build needs, wired in and tested before launch.",
  },
  {
    num: "05",
    icon: LuRocket,
    color: "#34d399",
    title: "Launch & Support",
    desc: "App store submission, uptime checks, and a 30-day window to fix anything that turns up after go-live.",
  },
];

const STATS = [
  { value: 80, prefix: "", suffix: "+", decimals: 0, label: "Platforms Shipped" },
  { value: 99, prefix: "", suffix: "%", decimals: 0, label: "SEO Speed Score" },
  { value: 100, prefix: "", suffix: "%", decimals: 0, label: "CRM Lead Sync" },
  { value: 1.2, prefix: "<", suffix: "s", decimals: 1, label: "Avg. API Load Time" },
];

const FAQS = [
  {
    icon: LuClock,
    color: "#38bdf8",
    q: "Can you build the website and the app at the same time?",
    a: "Usually, yes. We build the API and database once, then develop the web frontend and the mobile app against it in parallel — it cuts both the cost and the timeline compared to building them separately.",
  },
  {
    icon: LuTrendingUp,
    color: "#34d399",
    q: "How do you handle search engine optimization (SEO)?",
    a: "Semantic markup, automated metadata, structured data, and a build that passes Core Web Vitals on mobile before we call it finished. No plugins doing the work for us.",
  },
  {
    icon: LuLayers,
    color: "#fb923c",
    q: "What CRM systems can you integrate with?",
    a: "We connect directly to HubSpot, Salesforce, Pipedrive, or a database of your choosing using webhooks — no manual exports, no third-party automation tool duct-taped in between.",
  },
  {
    icon: LuLayoutTemplate,
    color: "#a78bfa",
    q: "Can I update the app without resubmitting to the App Store?",
    a: "For content — copy, images, banners, in-app offers — yes. It goes out from a CMS dashboard. Only actual code changes need a new store submission.",
  },
];

/* ── Heading arrays for Zentry stagger animation ────────────────── */
const WEB_TITLE = [
  { char: "w", bold: false },
  { char: "e", bold: true },
  { char: "b", bold: false },
  { char: " ", bold: false },
  { char: "&", bold: true },
  { char: " ", bold: false },
  { char: "a", bold: false },
  { char: "p", bold: true },
  { char: "p", bold: false },
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

/* Manifest data for the rebuilt "what's included" section */
const WEB_SCOPE = [
  {
    title: "Hand-coded, not drag-and-drop",
    desc: "Built in React and Next.js from scratch — no page-builder plugins slowing the site down.",
  },
  {
    title: "Loads in under 2 seconds",
    desc: "Image optimization, code splitting, and caching, so visitors don't bounce before it finishes loading.",
  },
  {
    title: "Ranks from day one",
    desc: "Meta tags, sitemap, structured data, and clean markup — all in place before launch, not after.",
  },
  {
    title: "Tested on real devices",
    desc: "Checked on actual phones and tablets, not just a resized browser window.",
  },
  {
    title: "Connected to your CRM",
    desc: "Every form submission lands in HubSpot, Salesforce, or wherever your sales team already works.",
  },
  {
    title: "30 days of fixes included",
    desc: "Anything that breaks in the first month after launch gets patched at no extra charge.",
  },
];

const APP_SCOPE = [
  {
    title: "One codebase, both stores",
    desc: "React Native or Flutter builds that ship to iOS and Android without duplicating the work twice.",
  },
  {
    title: "Store submission handled",
    desc: "We prepare the listing, screenshots, and metadata, and manage the App Store and Play Store review.",
  },
  {
    title: "Push notifications built in",
    desc: "Ready to send from day one, so you can re-engage users who've gone quiet.",
  },
  {
    title: "Works without a signal",
    desc: "Core screens stay usable offline and sync automatically once the connection comes back.",
  },
  {
    title: "Crash reports land in your inbox",
    desc: "Firebase Crashlytics or Sentry wired in, so you hear about problems before your users complain.",
  },
  {
    title: "30 days of fixes included",
    desc: "Same window as the web build — post-launch bugs get patched at no extra charge.",
  },
];

const SHARED_SCOPE = [
  { icon: LuBadgeCheck, title: "You own the code", desc: "Full source handed over. No lock-in, no license fee to keep using it." },
  { icon: LuLayoutTemplate, title: "Staging link before launch", desc: "See the real build live before anyone else does." },
  { icon: LuPenTool, title: "One round of revisions", desc: "Included in every quote — not billed as a change order." },
  { icon: LuMousePointerClick, title: "A direct line to your dev", desc: "A shared Slack channel, not a support ticket queue." },
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

const ScopeItem = ({ item, accent }) => (
  <li className="flex gap-3 border-t border-white/10 py-4 first:border-t-0">
    <LuBadgeCheck
      className="mt-0.5 shrink-0 text-base"
      style={{ color: accent }}
    />
    <div>
      <p className="font-circular-web text-sm font-semibold text-white">
        {item.title}
      </p>
      <p className="mt-1 font-robert-regular text-[13px] leading-relaxed text-white/45">
        {item.desc}
      </p>
    </div>
  </li>
);

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
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-robert-regular text-sm leading-relaxed text-white/50 pr-8">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
   ──────────────────────────────────────────────────────────────────────── */

const WebDevelopment = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  const timelineRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Zoom background video on scroll
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

    // Scroll reveal fade-in for the scope-of-work panels
    const cards = gsap.utils.toArray(".outcome-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

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
                Service · Web & App Development
              </span>
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-white/50">
                Scroll to explore
              </span>
            </div>

            <div className="flex flex-col">
              <p className="font-general text-xs uppercase tracking-[0.2em] text-[#D4AF37] opacity-0 animate-[fadeIn_0.8s_ease_0.2s_forwards]">
                One Team, Both Platforms
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
                      delay={400 + i * 80}
                    />
                  ))}
                </h1>
              </div>

              <p className="mt-6 max-w-lg font-robert-regular text-sm leading-relaxed text-white/60 opacity-0 animate-[fadeIn_0.9s_ease_0.7s_forwards] sm:text-base">
                We build the website and the app — same team, one shared backend where it
                makes sense, one point of contact for both. Built to rank on Google, built to
                pass app store review, and wired into the CRM your sales team already uses.
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
              title="Everything a modern <br /> web & app system needs."
              containerClass="mt-4"
            />
          </Reveal>

          {/* Asymmetrical Bento Grid matching Features layout structure */}
          <div className="mt-16 grid gap-6 md:grid-cols-6 md:grid-rows-2">
            {/* Card 1: Web Apps & Sites - col-span-3 row-span-2 */}
            <div className="md:col-span-3 md:row-span-2">
              <DeliverableCard
                title={DELIVERABLES[0].title}
                desc={DELIVERABLES[0].desc}
                videoSrc={DELIVERABLES[0].video}
                number="01"
                color={DELIVERABLES[0].color}
              />
            </div>

            {/* Card 2: iOS & Android Apps - col-span-3 row-span-1 */}
            <div className="md:col-span-3 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[1].title}
                desc={DELIVERABLES[1].desc}
                videoSrc={DELIVERABLES[1].video}
                number="02"
                color={DELIVERABLES[1].color}
              />
            </div>

            {/* Card 3: SEO Optimization - col-span-3 row-span-1 */}
            <div className="md:col-span-3 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[2].title}
                desc={DELIVERABLES[2].desc}
                videoSrc={DELIVERABLES[2].video}
                number="03"
                color={DELIVERABLES[2].color}
              />
            </div>

            {/* Card 4: CRM Pipeline Sync - col-span-2 row-span-1 */}
            <div className="md:col-span-2 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[3].title}
                desc={DELIVERABLES[3].desc}
                videoSrc={DELIVERABLES[3].video}
                number="04"
                color={DELIVERABLES[3].color}
              />
            </div>

            {/* Card 5: Content Management - col-span-2 row-span-1 */}
            <div className="md:col-span-2 md:row-span-1">
              <DeliverableCard
                title={DELIVERABLES[4].title}
                desc={DELIVERABLES[4].desc}
                videoSrc={DELIVERABLES[4].video}
                number="05"
                color={DELIVERABLES[4].color}
              />
            </div>

            {/* Card 6: Ongoing Support - col-span-2 row-span-1 */}
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

      {/* ── STATS + IMPACT (Social Proof Restructured Here) ─────────── */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {IMPACT_STATS.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <Reveal key={i} delay={0.1 + i * 0.05} className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
                  <span className="size-12 rounded-full border border-white/10 flex items-center justify-center mb-4" style={{ color: stat.color }}>
                    <StatIcon className="text-xl" />
                  </span>
                  <h4 className="font-zentry text-3xl font-black text-white">
                    {stat.value}{stat.suffix}
                  </h4>
                  <p className="mt-3 font-robert-regular text-xs text-white/50 leading-relaxed max-w-[240px]">
                    {stat.label}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCOPE OF WORK: WEB BUILD vs APP BUILD ───────────────────────── */}
      <section
        ref={sectionRef}
        className="relative z-10 bg-black px-3 md:px-10 py-24 md:py-36 border-t border-white/5"
      >
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center flex flex-col items-center mb-16">
            <Eyebrow className="text-center">Scope of work</Eyebrow>
            <AnimatedTitle
              title="Exactly what's <br /> included. No filler."
              containerClass="mt-4"
            />
            <p className="mt-6 max-w-lg font-robert-regular text-sm text-white/40 leading-relaxed">
              Two build tracks, laid out plainly. Pick one or run both — the list below is
              what actually ships, not a pitch.
            </p>
          </Reveal>

          {/* Web / App split manifest */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="outcome-card border border-white/10 rounded-3xl bg-[#050507] p-8">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-circular-web text-xl font-bold text-white">
                  Web Build
                </h4>
                <span
                  className="text-[10px] font-general uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: "#D4AF37", borderColor: "#D4AF3740", backgroundColor: "#D4AF3712" }}
                >
                  React / Next.js
                </span>
              </div>
              <ul>
                {WEB_SCOPE.map((item) => (
                  <ScopeItem key={item.title} item={item} accent="#D4AF37" />
                ))}
              </ul>
            </div>

            <div className="outcome-card border border-white/10 rounded-3xl bg-[#050507] p-8">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-circular-web text-xl font-bold text-white">
                  App Build
                </h4>
                <span
                  className="text-[10px] font-general uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: "#38bdf8", borderColor: "#38bdf840", backgroundColor: "#38bdf812" }}
                >
                  React Native / Flutter
                </span>
              </div>
              <ul>
                {APP_SCOPE.map((item) => (
                  <ScopeItem key={item.title} item={item} accent="#38bdf8" />
                ))}
              </ul>
            </div>
          </div>

          {/* Shared services strip */}
          <div className="outcome-card mt-6 grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-[#050507] p-8 sm:grid-cols-2 md:grid-cols-4">
            {SHARED_SCOPE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col gap-3">
                  <Icon className="text-lg text-white/60" />
                  <div>
                    <p className="font-circular-web text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 font-robert-regular text-[13px] leading-relaxed text-white/40">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
                Have a question about deliverables, timelines, web SEO configurations, or CRM pipelines? Check our responses here.
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