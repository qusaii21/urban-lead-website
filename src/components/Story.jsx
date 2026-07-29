import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuArrowLeft,
  LuMapPin,
  LuTrendingUp,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import gsap from "gsap";
import Reveal from "./Reveal";

/* ─────────────────────────────────────────────────────────────
   ADD NEW CASE STUDIES HERE — the carousel handles the rest
   ───────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: "53-acres",
    label: "Real Estate Consultancy",
    location: "Pune, India",
    title: "53 Acres",
    tagline: "Education over promotion.",
    desc: 'A property consultancy posting like every other real estate page — listings, prices, "DM for details." We swapped that for short videos answering the questions buyers actually type into Google, and let the comments do the selling.',
    stats: [
      { value: "21,061", label: "Views in 30 days" },
      { value: "+249",   label: "Net new followers" },
      { value: "72%",    label: "Non-follower reach" },
    ],
    accent: "#D4AF37",
    href: "/case-studies/53-acres",
    images: ["/img/img18.jpg", "/img/img19.jpg", "/img/img20.jpg"],
  },
  {
    id: "aurora-textiles",
    label: "Wholesale Fabric",
    location: "Dubai, UAE",
    title: "Aurora Textiles",
    tagline: "Series beats single posts.",
    desc: "Aurora sells fabric by the container to buyers who already know textiles — pitching them was pointless. We built a running educational series that taught something new every episode and turned casual viewers into repeat visitors.",
    stats: [
      { value: "600+",    label: "Likes on top reels" },
      { value: "2×",      label: "Series recall rate" },
      { value: "African", label: "Markets reached" },
    ],
    accent: "#a78bfa",
    href: "/case-studies/aurora-textiles",
    images: ["/img/img67.jpg", "/img/img68.jpg", "/img/img69.jpg"],
  },
];

const AUTOPLAY_MS = 5500;

/* ── 3-image rotated fan ── */
const ImageFan = ({ images, accent }) => (
  <div className="relative w-[200px] h-[300px] mx-auto">
    {images.slice(0, 3).map((src, i) => {
      const cfg = [
        { r: "-10deg", tx: "-26px", ty: "10px",  z: 10 },
        { r: "0deg",   tx: "0px",   ty: "0px",   z: 20, glow: true },
        { r: "9deg",   tx: "26px",  ty: "-10px", z: 15 },
      ][i];
      return (
        <div
          key={i}
          className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
          style={{
            transform: `rotate(${cfg.r}) translate(${cfg.tx}, ${cfg.ty})`,
            zIndex: cfg.z,
            boxShadow: cfg.glow ? `0 24px 48px -8px ${accent}55` : undefined,
          }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      );
    })}
  </div>
);

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
const Story = () => {
  const [current, setCurrent]   = useState(0);
  const [dir, setDir]           = useState(1);        // 1 = forward, -1 = backward
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused]     = useState(false);
  const [progress, setProgress] = useState(0);

  const cardRef    = useRef(null);
  const timerRef   = useRef(null);
  const progressRef = useRef(null);

  const total = SLIDES.length;
  const slide = SLIDES[current];

  /* ── progress bar animation ── */
  const startProgress = useCallback(() => {
    if (progressRef.current) {
      gsap.killTweensOf(progressRef.current);
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: AUTOPLAY_MS / 1000, ease: "none" }
      );
    }
  }, []);

  /* ── slide transition ── */
  const goTo = useCallback(
    (idx, direction = 1) => {
      if (isAnimating || idx === current) return;
      setIsAnimating(true);
      setDir(direction);

      const xOut = direction * -60;
      const xIn  = direction * 60;

      gsap.to(cardRef.current, {
        x: xOut,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          setCurrent(idx);
          gsap.fromTo(
            cardRef.current,
            { x: xIn, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.38,
              ease: "power2.out",
              onComplete: () => {
                setIsAnimating(false);
                startProgress();
              },
            }
          );
        },
      });
    },
    [current, isAnimating, startProgress]
  );

  const next = useCallback(() => goTo((current + 1) % total, 1),  [goTo, current, total]);
  const prev = useCallback(() => goTo((current - 1 + total) % total, -1), [goTo, current, total]);

  /* ── autoplay ── */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  /* ── kick progress bar on mount ── */
  useEffect(() => {
    startProgress();
  }, [startProgress]);

  return (
    <section
      id="story"
      className="w-screen bg-black text-white py-24 md:py-32 overflow-hidden"
      onMouseEnter={() => { setPaused(true);  gsap.killTweensOf(progressRef.current); }}
      onMouseLeave={() => { setPaused(false); startProgress(); }}
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">

        {/* ── Section header ── */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="font-general text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                Case Studies
              </p>
              <h2 className="special-font font-zentry text-5xl md:text-7xl font-black text-white uppercase !leading-[0.85]">
                Real cl<b>i</b>ents.<br />Real resu<b>l</b>ts.
              </h2>
            </div>

            {/* right: slide counter + arrows + view all */}
            <div className="flex items-center gap-6 self-start md:self-auto">
              {/* prev / next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto"
                  aria-label="Previous"
                >
                  <LuChevronLeft className="text-base" />
                </button>
                <button
                  onClick={next}
                  className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto"
                  aria-label="Next"
                >
                  <LuChevronRight className="text-base" />
                </button>
              </div>

              {/* slide counter */}
              <p className="font-general text-xs text-white/30 tracking-widest tabular-nums">
                <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
                {" / "}
                {String(total).padStart(2, "0")}
              </p>

              <Link
                to="/case-studies"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-general uppercase tracking-widest text-white/40 hover:text-white transition-colors pointer-events-auto"
              >
                View all <LuArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ── Progress bar ── */}
        <div className="w-full h-px bg-white/5 mb-2 overflow-hidden rounded-full">
          <div
            ref={progressRef}
            className="h-full rounded-full origin-left"
            style={{ background: slide.accent, transformOrigin: "left center" }}
          />
        </div>

        {/* ── Carousel card ── */}
        <div
          ref={cardRef}
          className="relative rounded-3xl border border-white/10 bg-[#08080c] overflow-hidden shadow-2xl"
          style={{ minHeight: 500 }}
        >
          {/* accent glow — transitions with slide color */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none transition-all duration-700"
            style={{ background: `${slide.accent}15` }}
          />

          <div className="grid md:grid-cols-12 items-stretch">

            {/* ── Left: image fan ── */}
            <div className="md:col-span-5 relative min-h-[300px] md:min-h-[500px] bg-zinc-950 overflow-hidden flex items-center justify-center p-8">
              <div
                className="absolute inset-0 opacity-20 blur-3xl transition-all duration-700"
                style={{ background: `radial-gradient(circle at 50% 50%, ${slide.accent}, transparent 70%)` }}
              />
              <div className="relative z-10">
                <ImageFan images={slide.images} accent={slide.accent} />
              </div>

              {/* badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-[9px] font-general uppercase tracking-widest text-white/50 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 z-10">
                <span
                  className="size-1.5 rounded-full animate-pulse"
                  style={{ background: slide.accent }}
                />
                Instagram Reels
              </div>
            </div>

            {/* ── Right: content ── */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-8">

              {/* meta + title */}
              <div>
                <div
                  className="flex flex-wrap items-center gap-3 text-[10px] font-general uppercase tracking-widest mb-5"
                  style={{ color: slide.accent }}
                >
                  <span>{slide.label}</span>
                  <span className="size-1 rounded-full bg-white/20" />
                  <span className="text-white/40 flex items-center gap-1">
                    <LuMapPin className="text-[11px]" /> {slide.location}
                  </span>
                </div>

                <h3 className="font-zentry text-4xl md:text-5xl font-black uppercase text-white mb-3 !leading-tight">
                  {slide.title}
                </h3>

                <p className="font-circular-web text-sm font-semibold mb-4" style={{ color: slide.accent }}>
                  "{slide.tagline}"
                </p>

                <p className="font-robert-regular text-sm md:text-base text-white/55 leading-relaxed max-w-lg">
                  {slide.desc}
                </p>
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                {slide.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="font-zentry text-2xl md:text-3xl font-black" style={{ color: slide.accent }}>
                      {stat.value}
                    </p>
                    <p className="font-general text-[9px] uppercase tracking-widest text-white/35 mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA + dot nav */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-t border-white/5 pt-8">
                <Link
                  to={slide.href}
                  className="inline-flex items-center gap-1.5 rounded-full px-6 py-2.5 text-xs font-general uppercase tracking-widest text-black font-bold hover:scale-105 transition-all duration-300 pointer-events-auto"
                  style={{ backgroundColor: slide.accent }}
                >
                  Read the full story
                  <LuArrowRight className="text-sm" />
                </Link>

                {/* dot nav */}
                <div className="flex items-center gap-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > current ? 1 : -1)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="h-1.5 rounded-full transition-all duration-300 cursor-pointer pointer-events-auto"
                      style={{
                        width: i === current ? 24 : 6,
                        background: i === current ? slide.accent : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Mini thumbnail strip — scales to any number of slides ── */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 pointer-events-auto shrink-0 ${
                i === current
                  ? "border-white/15 bg-white/5"
                  : "border-white/5 bg-transparent hover:bg-white/[0.03] hover:border-white/10"
              }`}
            >
              <div className="w-10 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 pr-2">
                <p className="font-general text-[8px] uppercase tracking-widest mb-0.5" style={{ color: s.accent }}>
                  {s.label}
                </p>
                <p className="font-circular-web text-sm font-bold text-white truncate">{s.title}</p>
                <p className="font-general text-[8px] uppercase tracking-widest text-white/30 mt-0.5 flex items-center gap-1">
                  <LuTrendingUp className="text-[9px]" />
                  {s.stats[0].value} {s.stats[0].label}
                </p>
              </div>
              <LuArrowRight
                className="text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ color: i === current ? s.accent : "rgba(255,255,255,0.15)" }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Story;
