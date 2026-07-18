import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

// Each letter mapped with whether it needs the <b> (Zentry alternate glyph)
const URBAN = [
  { char: "u", bold: false },
  { char: "r", bold: false },
  { char: "b", bold: false },
  { char: "a", bold: false },
  { char: "n", bold: true },
];

const LEAD = [
  { char: "l", bold: false },
  { char: "e", bold: false },
  { char: "a", bold: true },
  { char: "d", bold: false },
];

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

const Hero = ({ preloaderDone }) => {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  // Once loading and preloader are done, stagger in tagline + CTAs + stats
  useEffect(() => {
    if (loading || !preloaderDone) return;
    gsap.fromTo(
      ".hero-info-item",
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.11,
        delay: 1.1,
      }
    );
  }, [loading, preloaderDone]);

  // Scroll clip animation — unchanged
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <video
            src="videos/hero-1.mp4"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-30 bg-black/55" />

        {/* Hero content */}
        <div className="absolute inset-0 z-40 flex flex-col justify-between px-6 pb-10 pt-28 sm:px-12 sm:pb-12">

          {/* Top label row */}
          <div className="flex items-center justify-between">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-white/50">
              Est. 2020 · Dubai, UAE
            </span>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-white/50">
              Scroll to explore
            </span>
          </div>

          {/* Main: heading left — stats right */}
          <div className="flex items-end justify-between gap-6">

            {/* Left column */}
            <div className="flex flex-col">

              {/* Stacked typewriter headings */}
              <div className="flex flex-col">

                {/* URBAN */}
                <h1
                  className="special-font hero-heading text-white"
                  style={{ lineHeight: 0.88, marginBottom: "0.04em" }}
                >
                  {URBAN.map((l, i) => (
                    <SmoothLetter
                      key={i}
                      char={l.char}
                      bold={l.bold}
                      trigger={preloaderDone && !loading}
                      delay={i * 80}
                    />
                  ))}
                </h1>

                {/* LEAD */}
                <h1
                  className="special-font hero-heading text-white"
                  style={{ lineHeight: 0.88 }}
                >
                  {LEAD.map((l, i) => (
                    <SmoothLetter
                      key={i}
                      char={l.char}
                      bold={l.bold}
                      trigger={preloaderDone && !loading}
                      delay={450 + i * 80}
                    />
                  ))}
                </h1>
              </div>

              {/* Tagline — fades in after typing */}
              <p className="hero-info-item mt-5 max-w-sm font-robert-regular text-sm leading-relaxed text-white/60 opacity-0 sm:text-base">
                We design brands that people remember.
              </p>

              {/* CTAs */}
              <div className="hero-info-item mt-5 flex flex-wrap gap-3 opacity-0">
                <Button
                  id="watch-trailer"
                  title="Start Your Project"
                  leftIcon={<TiLocationArrow />}
                  containerClass="bg-[#D4AF37] hover:bg-[#b8902d] flex-center gap-1 transition-all duration-300"
                />
                <Button
                  id="view-work"
                  title="View Our Work"
                  containerClass="border border-white/40 bg-white/10 text-white backdrop-blur-sm flex-center gap-1"
                />
              </div>
            </div>

            {/* Right column — stats */}
            <div className="hidden flex-col items-end gap-6 text-right md:flex">
              <div className="hero-info-item opacity-0">
                <p className="font-zentry text-3xl font-black text-white">50+</p>
                <p className="font-general text-[9px] uppercase tracking-widest text-white/40">
                  Projects Delivered
                </p>
              </div>
              <div className="hero-info-item opacity-0">
                <p className="font-zentry text-3xl font-black text-white">99%</p>
                <p className="font-general text-[9px] uppercase tracking-widest text-white/40">
                  Client Satisfaction
                </p>
              </div>
              <div className="hero-info-item opacity-0">
                <p className="font-zentry text-3xl font-black text-white">8+</p>
                <p className="font-general text-[9px] uppercase tracking-widest text-white/40">
                  Digital Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
