import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { 
  LuShare2, 
  LuTrendingUp, 
  LuSparkles, 
  LuActivity, 
  LuVolume2, 
  LuVolumeX,
  LuHeart,
  LuMessageSquare,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuYoutube,
  LuZap,
  LuPlus,
  LuMinus,
  LuChevronLeft,
  LuChevronRight
} from "react-icons/lu";
import { 
  FaTiktok, 
  FaAmazon, 
  FaGoogle, 
  FaSnapchat, 
  FaPinterest 
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────────────────────────────────
   HELPERS & DATA
   ──────────────────────────────────────────────────────────────────────── */

const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#ff4f12] ${className}`}>
    {children}
  </p>
);

const SmoothLetter = ({ char, bold, trigger, delay }) => (
  <span
    className={`inline-block transition-all duration-700 ease-out transform ${
      trigger
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
    } ${bold ? "font-zentry font-black" : "font-circular-web"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {char === " " ? "\u00A0" : char}
  </span>
);

const HERO_TITLE = "CREATIVE GROWTH".split("").map((c, i) => ({
  char: c,
  bold: i % 3 === 0
}));

const SERVICES = [
  {
    title: "Strategy",
    slogan: "WE ALIGN AUDIENCE INSIGHTS TO ESTABLISH YOUR BRAND DIRECTION.",
    desc: "Using proprietary audience analytics and cultural trend mapping, we build a roadmap that sets your social presence apart. We design the identity blueprints that translate directly into market traction and permanent brand affinity.",
    video: "/videos/feature-1.mp4",
    video2: "/videos/feature-2.mp4"
  },
  {
    title: "Discovery",
    slogan: "WE IDENTIFY THE RIGHT CREATORS AND INFLUENCERS FOR EVERY ELEMENT OF YOUR STRATEGY.",
    desc: "Combining our proprietary data and campaigns team's unrivaled knowledge, we'll identify the creators that align with your brand's values and media objectives. From micro-influencers to mainstream scale.",
    video: "/videos/feature-2.mp4",
    video2: "/videos/feature-3.mp4"
  },
  {
    title: "Content",
    slogan: "WE DELIVER CAPTIVATING INFLUENCER CONTENT FOR ALL MEDIA PLACEMENTS.",
    desc: "From cinematic reels to high-tempo TikTok hooks, our content studio produces assets engineered for organic velocity. We deliver creative direction that demands attention and keeps users scrolling.",
    video: "/videos/feature-3.mp4",
    video2: "/videos/feature-4.mp4"
  },
  {
    title: "Media",
    slogan: "WE PUT INFLUENCER CONTENT IN MORE placements THAN ANY OTHER AGENCY IN THE WORLD.",
    desc: "Amplifying organic wins with paid media boosts. We scale top-performing creative assets across paid ad platforms, targeting precision demographics to yield optimal customer acquisition costs.",
    video: "/videos/feature-4.mp4",
    video2: "/videos/feature-5.mp4"
  },
  {
    title: "Commerce",
    slogan: "WE HELP BRANDS TO DRIVE SALES THROUGH INFLUENCER-LED COMMERCE.",
    desc: "Integrating shoppable feeds, social storefront setup, and live-shopping campaigns to turn attention directly into checkout events. Seamlessly combining entertainment and purchase flow.",
    video: "/videos/feature-5.mp4",
    video2: "/videos/feature-1.mp4"
  }
];

const SOCIAL_CHANNELS = [
  {
    icon: LuInstagram,
    title: "Instagram Reels",
    desc: "Visual aesthetics & curated brand worlds designed to capture immediate scroll attention.",
    slogan: "@brand.narrative",
    color: "#ec4899",
    metric: "4.8% Engagement Rate",
    video: "/videos/feature-1.mp4",
    likes: "14.2K",
    comments: "382",
    theme: "radial-gradient(circle at top left, #833ab4, #fd1d1d, #fcb045)",
    glowColor: "#ec4899"
  },
  {
    icon: LuZap,
    title: "TikTok Loop",
    desc: "High-tempo loops. Leveraging organic trends to build millions of visual impressions.",
    slogan: "@brand_velocity",
    color: "#a78bfa",
    metric: "12M Organic Reach",
    video: "/videos/feature-2.mp4",
    likes: "45.8K",
    comments: "1.2K",
    theme: "linear-gradient(135deg, #00f2fe 0%, #fe0979 100%)",
    glowColor: "#a78bfa"
  },
  {
    icon: LuLinkedin,
    title: "LinkedIn Video",
    desc: "Authority leadership. Translating industry insights into narrative-driven professional traction.",
    slogan: "Brand Authority Co.",
    color: "#3b82f6",
    metric: "32% Lead Conversion",
    video: "/videos/feature-3.mp4",
    likes: "842",
    comments: "124",
    theme: "linear-gradient(135deg, #0a66c2 0%, #004182 100%)",
    glowColor: "#3b82f6"
  },
  {
    icon: LuTwitter,
    title: "X (Twitter) Feed",
    desc: "Real-time cultural stances. Driving conversations through witty hooks and high-tempo threads.",
    slogan: "@brand_disrupt",
    color: "#38bdf8",
    metric: "+120k Retweets / mo",
    video: "/videos/feature-4.mp4",
    likes: "3.4K",
    comments: "512",
    theme: "linear-gradient(135deg, #15202b 0%, #000000 100%)",
    glowColor: "#38bdf8"
  },
  {
    icon: LuYoutube,
    title: "YouTube Short",
    desc: "Immersive storytelling. Deep-dive video content establishing permanent brand affinity.",
    slogan: "Brand Immersive",
    color: "#ef4444",
    metric: "25min Avg. Watch Time",
    video: "/videos/feature-5.mp4",
    likes: "92.1K",
    comments: "3.4K",
    theme: "linear-gradient(135deg, #ff0000 0%, #282828 100%)",
    glowColor: "#ef4444"
  }
];

/* ────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ──────────────────────────────────────────────────────────────────────── */

const AccordionItem = ({ service, index, isActive, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }, [isActive]);

  return (
    <div className="border-b border-white/10 py-8 last:border-b-0">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none group py-3"
      >
        <div className="flex items-center gap-6 sm:gap-8">
          <span className="font-zentry text-3xl sm:text-5xl font-black text-white/20 transition-colors group-hover:text-[#ff4f12]">
            {index + 1}.
          </span>
          <h4 className="font-zentry text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
            {service.title}
          </h4>
        </div>
        <span className="text-xs font-general uppercase tracking-widest text-[#ff4f12] flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:bg-[#ff4f12] hover:text-black hover:border-[#ff4f12] transition-all duration-300">
          {isActive ? (
            <>
              Fewer Details <LuMinus className="text-sm" />
            </>
          ) : (
            <>
              More Details <LuPlus className="text-sm" />
            </>
          )}
        </span>
      </button>

      <div 
        ref={contentRef} 
        className="overflow-hidden opacity-0 h-0"
      >
        <div className="pt-8 pb-4 grid gap-8 md:grid-cols-12 md:items-center">
          {/* Text Description */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <p className="font-general text-sm sm:text-base font-bold uppercase tracking-widest text-[#ff4f12] mb-4">
              {service.slogan}
            </p>
            <p className="font-robert-regular text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed">
              {service.desc}
            </p>
          </div>

          {/* Video Preview Reels Mockups */}
          <div className="md:col-span-6 flex gap-4 overflow-x-auto justify-end py-2">
            <div className="relative w-[200px] h-[350px] rounded-3xl overflow-hidden border-2 border-white/15 shrink-0 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
              <video 
                src={service.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 size-full object-cover" 
              />
            </div>
            <div className="relative w-[200px] h-[350px] rounded-3xl overflow-hidden border-2 border-white/15 shrink-0 hidden sm:block shadow-[0_15px_30px_rgba(0,0,0,0.8)] opacity-60">
              <video 
                src={service.video2} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 size-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesAccordionSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="px-3 md:px-10 py-36 md:py-48 bg-[#040406] border-t border-white/5 relative">
      {/* Background radial lighting */}
      <div className="absolute top-1/4 left-1/4 size-[500px] rounded-full pointer-events-none blur-[180px] opacity-10 bg-[#ff4f12]" />

      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-20">
          <Eyebrow>Core Capabilities</Eyebrow>
          <AnimatedTitle
            title="What Services <br /> We Provide."
            containerClass="mt-4"
          />
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12 md:items-start mt-10">
          
          {/* Left Column: Sticky Venn Diagram Circle indicator */}
          <div className="md:col-span-5 md:sticky md:top-36 flex justify-center items-center py-10 md:py-24 self-start">
            <div className="relative w-96 h-96 scale-90 sm:scale-100">
              
              {/* Central base layout block circles */}
              {SERVICES.map((s, idx) => {
                const positions = [
                  { top: "22%", left: "50%", translate: "-translate-x-1/2 -translate-y-1/2" }, // 1: Top
                  { top: "50%", left: "78%", translate: "-translate-x-1/2 -translate-y-1/2" }, // 2: Right
                  { top: "78%", left: "50%", translate: "-translate-x-1/2 -translate-y-1/2" }, // 3: Bottom
                  { top: "50%", left: "22%", translate: "-translate-x-1/2 -translate-y-1/2" }, // 4: Left
                  { top: "50%", left: "50%", translate: "-translate-x-1/2 -translate-y-1/2" }  // 5: Center
                ];
                const pos = positions[idx];
                const isActive = activeService === idx;

                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveService(idx)}
                    className={`absolute size-32 rounded-full flex items-center justify-center font-zentry text-4xl font-black transition-all duration-500 border focus:outline-none ${pos.translate} ${
                      isActive 
                        ? "bg-[#ff4f12] border-[#ff4f12] text-black scale-110 z-20 shadow-[0_20px_45px_rgba(255,79,18,0.5)]" 
                        : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10 hover:text-white/60 z-10"
                    }`}
                    style={{
                      top: pos.top,
                      left: pos.left,
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="md:col-span-7 flex flex-col">
            {SERVICES.map((service, i) => (
              <AccordionItem 
                key={service.title} 
                service={service} 
                index={i} 
                isActive={activeService === i}
                onClick={() => setActiveService(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialCarousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with center card (LinkedIn) active
  const [isMuted, setIsMuted] = useState(true);
  const [isHoveredPhone, setIsHoveredPhone] = useState(false);
  const activeChannel = SOCIAL_CHANNELS[activeIndex];

  // Auto-scroll loop interval
  useEffect(() => {
    if (isHoveredPhone) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SOCIAL_CHANNELS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHoveredPhone]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SOCIAL_CHANNELS.length) % SOCIAL_CHANNELS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SOCIAL_CHANNELS.length);
  };

  return (
    <div className="py-24 bg-[#070709] border-t border-white/5 relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Background ambient lighting syncing with active channel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 blur-[120px] transition-all duration-1000 z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeChannel.glowColor} 0%, transparent 60%)`
        }}
      />

      <div className="container mx-auto px-3 md:px-10 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <Eyebrow>Resonance Feed</Eyebrow>
          <AnimatedTitle
            title="Video-driven feeds <br /> that hook attention."
            containerClass="mt-4"
          />
          <p className="font-robert-regular text-sm text-white/40 max-w-lg mx-auto mt-6 leading-relaxed">
            We engineer high-fidelity visual streams. Click or swipe through the horizontal reels layout—the centered reel feeds live directly inside the mobile simulator.
          </p>
        </div>

        {/* Immersive Phone Centered Layout Wrapper */}
        <div className="relative w-full h-[620px] flex items-center justify-center">
          
          {/* Background Reels Horizontal Carousel deck */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[440px] flex items-center justify-center pointer-events-none">
            {SOCIAL_CHANNELS.map((channel, i) => {
              let offset = i - activeIndex;
              const N = SOCIAL_CHANNELS.length;
              if (offset < -2) offset += N;
              if (offset > 2) offset -= N;
              
              const isActive = activeIndex === i;
              
              // Spacing scale: cards shift left or right from the center phone
              const spacing = window.innerWidth >= 768 ? 260 : 160;
              const translateX = offset * spacing;
              const scale = isActive ? 1.05 : 0.8;
              const opacity = isActive ? 0.05 : 0.55; // Let active card fade behind phone frame so phone takes full focus

              return (
                <div
                  key={channel.title}
                  onClick={() => setActiveIndex(i)}
                  className={`absolute w-[180px] h-[310px] sm:w-[220px] sm:h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-black/80 transition-all duration-[750ms] ease-out pointer-events-auto cursor-pointer ${
                    isActive ? "z-10 shadow-2xl border-white/20" : "z-0 hover:opacity-90"
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity: opacity,
                    filter: isActive ? "blur(0px)" : "blur(1px)",
                    pointerEvents: isActive ? "none" : "auto"
                  }}
                >
                  <video 
                    src={channel.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 size-full object-cover opacity-35" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-5 flex flex-col justify-end">
                    <span className="text-white font-circular-web font-bold text-sm block">
                      {channel.title}
                    </span>
                    <span className="text-white/40 text-[9px] block tracking-wider uppercase mt-1">
                      {channel.slogan}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Sticky iPhone Simulator (sits on top of active centered card) */}
          <div 
            onMouseEnter={() => setIsHoveredPhone(true)}
            onMouseLeave={() => setIsHoveredPhone(false)}
            className="relative z-20 w-[275px] h-[525px] sm:w-[290px] sm:h-[550px] rounded-[44px] border-[8px] border-[#18181b] bg-black shadow-[0_35px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between pointer-events-auto"
          >
            {/* Dynamic light blend overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-40 mix-blend-color transition-all duration-700 pointer-events-none"
              style={{ background: activeChannel.theme }}
            />

            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#18181b] rounded-b-xl z-30" />

            {/* Main Screen Video synced with active deck item */}
            <video 
              key={activeChannel.title}
              src={activeChannel.video} 
              autoPlay 
              loop 
              muted={isMuted}
              playsInline 
              className="absolute inset-0 size-full object-cover z-0" 
            />

            {/* Top Status Bar overlay */}
            <div className="relative z-20 flex justify-between items-center px-6 pt-3 text-[10px] text-white/80 font-general uppercase tracking-widest pointer-events-none">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span>5G</span>
                <span className="border border-white/60 w-5 h-2.5 rounded-sm block" />
              </span>
            </div>

            {/* Audio Toggle Indicator */}
            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className="absolute top-12 right-4 z-30 size-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/60"
            >
              {isMuted ? <LuVolumeX className="text-sm" /> : <LuVolume2 className="text-sm" />}
            </button>

            {/* Bottom Social Bar overlay */}
            <div className="relative z-20 p-5 mt-auto bg-gradient-to-t from-black/90 via-black/50 to-transparent flex justify-between items-end gap-3 pointer-events-none">
              <div className="flex-1 text-white">
                <span className="text-[10px] font-general uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-2">
                  Synced Live
                </span>
                <h5 className="font-circular-web font-bold text-sm">
                  {activeChannel.title}
                </h5>
                <p className="text-[10px] text-white/80 mt-1 font-robert-regular leading-snug font-light">
                  {activeChannel.desc}
                </p>
                <p className="text-[9px] text-[#ff4f12] font-general mt-2 tracking-widest">
                  {activeChannel.slogan}
                </p>
              </div>

              {/* Vertical platform actions */}
              <div className="flex flex-col items-center gap-4 text-white">
                <div className="flex flex-col items-center">
                  <button className="size-8 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-rose-500 backdrop-blur-sm">
                    <LuHeart className="text-base fill-rose-500" />
                  </button>
                  <span className="text-[9px] mt-1 font-general text-white/70">{activeChannel.likes}</span>
                </div>

                <div className="flex flex-col items-center">
                  <button className="size-8 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white backdrop-blur-sm">
                    <LuMessageSquare className="text-sm" />
                  </button>
                  <span className="text-[9px] mt-1 font-general text-white/70">{activeChannel.comments}</span>
                </div>

                <div className="flex flex-col items-center">
                  <button className="size-8 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white backdrop-blur-sm">
                    <LuShare2 className="text-sm" />
                  </button>
                  <span className="text-[8px] mt-1 font-general text-white/50">SHARE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev} 
            className="absolute left-4 sm:left-12 z-30 size-12 rounded-full border border-white/10 bg-black/40 hover:bg-[#ff4f12] hover:border-[#ff4f12] hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
          >
            <LuChevronLeft className="text-xl" />
          </button>

          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext} 
            className="absolute right-4 sm:right-12 z-30 size-12 rounded-full border border-white/10 bg-black/40 hover:bg-[#ff4f12] hover:border-[#ff4f12] hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
          >
            <LuChevronRight className="text-xl" />
          </button>

        </div>
      </div>
    </div>
  );
};

const StrategicPartnersSection = () => {
  return (
    <section className="bg-[#050507] py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h4 className="font-general text-[10px] uppercase tracking-[0.25em] text-white/40 mb-14">
          Our Strategic Partners
        </h4>
        
        {/* Forced Single Row Scrollable container that centers on desktop */}
        <div className="w-full overflow-x-auto scrollbar-hide py-4">
          <div className="flex flex-row flex-nowrap items-center justify-start lg:justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 min-w-max px-4">
            
            {/* TikTok */}
            <div className="flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300 cursor-pointer group">
              <FaTiktok className="text-2xl sm:text-3xl transition-transform group-hover:scale-110" />
              <span className="font-zentry text-lg sm:text-2xl font-black tracking-widest uppercase">
                TikTok
              </span>
            </div>

            {/* Amazon */}
            <div className="flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300 cursor-pointer group">
              <FaAmazon className="text-2xl sm:text-3xl transition-transform group-hover:scale-110" />
              <span className="font-zentry text-lg sm:text-2xl font-black tracking-widest uppercase">
                Amazon
              </span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-[#ff4f12]/50 hover:text-[#ff4f12] transition-all duration-300 cursor-pointer group">
              <FaMeta className="text-2xl sm:text-3xl transition-transform group-hover:scale-110" />
              <span className="font-zentry text-lg sm:text-2xl font-black tracking-widest uppercase">
                Meta
              </span>
            </div>

            {/* Google */}
            <div className="flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300 cursor-pointer group">
              <FaGoogle className="text-2xl sm:text-3xl transition-transform group-hover:scale-110" />
              <span className="font-zentry text-lg sm:text-2xl font-black tracking-widest uppercase">
                Google
              </span>
            </div>

            {/* Snapchat */}
            <div className="flex items-center gap-3 text-[#ffeb3b]/50 hover:text-[#ffeb3b] transition-all duration-300 cursor-pointer group">
              <FaSnapchat className="text-2xl sm:text-3xl transition-transform group-hover:scale-110" />
              <span className="font-zentry text-lg sm:text-2xl font-black tracking-widest uppercase">
                Snapchat
              </span>
            </div>

            {/* Pinterest */}
            <div className="flex items-center gap-3 text-[#ef4444]/50 hover:text-[#ef4444] transition-all duration-300 cursor-pointer group">
              <FaPinterest className="text-2xl sm:text-3xl transition-transform group-hover:scale-110" />
              <span className="font-zentry text-lg sm:text-2xl font-black tracking-widest uppercase">
                Pinterest
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ── FAQ SECTION ────────────────────────────────────────────────────────── */

const FAQItem = ({ item, isOpen, onClick }) => {
  const answerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(answerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10 py-6 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
      >
        <span className="font-circular-web text-lg sm:text-xl font-bold text-white group-hover:text-[#ff4f12] transition-colors duration-300">
          {item.question}
        </span>
        <span className="text-white/60 group-hover:text-[#ff4f12] transition-colors duration-300">
          {isOpen ? <LuMinus className="text-lg" /> : <LuPlus className="text-lg" />}
        </span>
      </button>
      <div ref={answerRef} className="overflow-hidden opacity-0 h-0">
        <p className="font-robert-regular text-sm sm:text-base text-white/50 leading-relaxed pt-4 pb-2">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(-1);

  const FAQS = [
    {
      question: "How do you match brands with the right creators?",
      answer: "We use our proprietary social database combined with manual audience affinity audits. We analyze creator demographics, engagement health, and brand alignment to ensure you only partner with creators who drive real conversion."
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We build tailored campaigns across TikTok, Instagram Reels, YouTube Shorts, LinkedIn Video, and Pinterest. We optimize the content formats specifically for the algorithms of each target channel."
    },
    {
      question: "How do you measure campaign ROI?",
      answer: "We track full-funnel metrics including brand impressions, organic reach, click-through rates, and direct attribution tracking."
    },
    {
      question: "What is your typical turnaround time for a campaign?",
      answer: "A standard creator onboarding and content production cycle takes 3 to 4 weeks. For urgent cultural trends, our rapid-response studio can deliver native content assets within 72 hours."
    },
    {
      question: "Do you handle paid media amplification?",
      answer: "Yes, we combine organic influencer content with paid media boosts. We scale top-performing creative assets across paid ad platforms, targeting precision demographics to yield optimal customer acquisition costs."
    }
  ];

  return (
    <section className="bg-black py-28 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <Eyebrow>Got Questions?</Eyebrow>
          <AnimatedTitle
            title="Frequently <br /> Asked Questions"
            containerClass="mt-4"
          />
        </div>
        
        <div className="bg-[#050507] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              item={faq}
              isOpen={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────────────────────────────── */

const CreativeGrowth = () => {
  const heroRef = useRef(null);
  const heroCardRef = useRef(null);

  // Mouse move parallax tracking on Hero card
  useGSAP(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 45;
      const yPercent = (clientY / window.innerHeight - 0.5) * 45;

      gsap.to(heroCardRef.current, {
        rotateY: xPercent * 0.8,
        rotateX: -yPercent * 0.8,
        x: xPercent * 0.3,
        y: yPercent * 0.3,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-screen overflow-x-clip bg-black text-white">
      
      {/* ── IMMERSIVE REDESIGNED HERO ─────────────────────────────────── */}
      <div ref={heroRef} className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">
        
        {/* Background dimmed visual loop player */}
        <video 
          src="/videos/hero-2.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 size-full object-cover opacity-15 pointer-events-none z-0" 
        />

        {/* Ambient lighting spheres */}
        <div 
          className="absolute left-1/4 top-1/4 size-96 rounded-full pointer-events-none blur-[140px] opacity-20 z-0"
          style={{ backgroundImage: "radial-gradient(circle, #ff4f12 0%, transparent 70%)" }}
        />
        <div 
          className="absolute right-1/4 bottom-1/4 size-96 rounded-full pointer-events-none blur-[140px] opacity-10 z-0"
          style={{ backgroundImage: "radial-gradient(circle, #9eff00 0%, transparent 70%)" }}
        />

        {/* Immersive interactive center portal glass frame */}
        <div 
          ref={heroCardRef}
          className="relative z-10 w-[300px] sm:w-[460px] h-[400px] sm:h-[520px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col justify-between p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <video 
            src="/videos/hero-1.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 size-full object-cover opacity-45 pointer-events-none z-0" 
          />

          <div className="relative z-10 flex justify-between items-center pointer-events-none">
            <span className="font-general text-[9px] uppercase tracking-[0.25em] text-white/70">
              Agency Hub
            </span>
            <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#ff4f12] font-semibold">
              Platform Active
            </span>
          </div>

          <div className="relative z-10 my-auto text-center pointer-events-none flex flex-col items-center">
            <p className="font-general text-[10px] uppercase tracking-[0.2em] text-[#ff4f12] mb-3">
              Compound Traction
            </p>
            
            <h1 className="font-zentry text-5xl sm:text-7xl font-black text-white leading-none tracking-tighter uppercase">
              CREATIVE <br /> GROWTH
            </h1>
          </div>

          <div className="relative z-10 flex justify-between items-center border-t border-white/10 pt-4 pointer-events-none">
            <p className="font-robert-regular text-[10px] text-white/50 max-w-[180px] leading-tight">
              Branding, performance, and short-form video systems.
            </p>
            <span className="text-[10px] text-emerald-400 font-general uppercase tracking-widest flex items-center gap-1">
              Live <span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            </span>
          </div>
        </div>

        {/* Scroll bottom helper indicator badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none animate-bounce">
          <span className="font-general text-[9px] uppercase tracking-[0.25em] text-white/40">
            Scroll to discover
          </span>
          <span className="border-r border-b border-white/30 size-2.5 rotate-45 block" />
        </div>

      </div>

      {/* ── WHAT SERVICES WE PROVIDE (Goat style Accordion) ───────────── */}
      <ServicesAccordionSection />

      {/* ── PILLAR 2: SOCIAL MEDIA (3D Resonance Ring Loop) ──────────── */}
      <section className="bg-[#06060a] border-t border-white/5">
        <SocialCarousel3D />
      </section>

      {/* ── STRATEGIC PARTNERS ───────────────────────────────────────── */}
      <StrategicPartnersSection />

      {/* ── FAQ SECTION ─────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── STRATEGIC CONTACT SECTION ───────────────────────────────── */}
      <Contact />

      <Footer />
    </div>
  );
};

export default CreativeGrowth;