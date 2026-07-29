import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import {
  LuHistory,
  LuCpu,
  LuHeartHandshake,
  LuAward,
  LuUsers,
  LuEye,
  LuCompass,
  LuGlobe,
  LuTrendingUp,
  LuShoppingBag,
  LuArrowRight,
} from "react-icons/lu";
import {
  SiSamsung,
  SiApple,
} from "react-icons/si";

import Reveal from "../components/Reveal";
import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Subtle parallax elements or scroll reveals
    gsap.fromTo(
      ".about-hero-bg",
      { scale: 1.1, opacity: 0.3 },
      {
        scale: 1,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".about-hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  const coreValues = [
    {
      icon: LuHistory,
      title: "Founded in 2012",
      desc: "Seven Wonders began its journey in Dubai, United Arab Emirates, with a vision to redefine electronics retail.",
      color: "#D4AF37",
    },
    {
      icon: LuShoppingBag,
      title: "One-Stop Electronics Shop",
      desc: "We are now the largest and most comprehensive destination in Dubai for all things electronics, offering a complete 'one-stop shop' experience.",
      color: "#38bdf8",
    },
    {
      icon: LuUsers,
      title: "Trusted by Thousands",
      desc: "Over the years, we’ve built a strong reputation for reliability, quality, and service excellence in the electronics market.",
      color: "#fb923c",
    },
    {
      icon: LuHeartHandshake,
      title: "Committed to Partnerships",
      desc: "We value enduring relationships, which is why our brands, customers, associates, and employees continue to grow with us.",
      color: "#34d399",
    },
    {
      icon: LuTrendingUp,
      title: "Driven by Innovation",
      desc: "Our journey is far from over. We are focused on expanding our reach and offering even more to our customers in the years ahead.",
      color: "#a78bfa",
    },
  ];

  const benefits = [
    {
      title: "Leading Brands",
      desc: "We proudly offer a wide range of products from top names like Samsung, Sony, Apple, Canon, Hitachi, Kenwood, O General, and many more.",
    },
    {
      title: "Extensive Selection",
      desc: "From TVs and music systems to air conditioners, refrigerators, washing machines, mobiles, laptops, and cameras — we've got it all.",
    },
    {
      title: "Unbeatable Value",
      desc: "We are committed to providing high-quality products at competitive prices, ensuring our customers get the best deals without compromise.",
    },
  ];

  return (
    <div ref={containerRef} className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative">
      
      {/* ── HERO BANNER ──────────────────────────────────────────────── */}
      <section className="about-hero-section relative h-[65vh] flex items-center justify-center border-b border-white/5 overflow-hidden">
        {/* Background glow & mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_65%)] z-10" />
        <div className="absolute inset-0 about-hero-bg opacity-35 bg-[url('/img/gallery-1.webp')] bg-cover bg-center pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl pt-16 flex flex-col items-center">
          <Reveal>
            <p className="font-general text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
              Group Association & Roots
            </p>
            <AnimatedTitle
              title="A Legacy of Trust <br /> and Innovation."
              containerClass="special-font !text-5xl md:!text-7xl font-zentry !leading-[0.9] text-white"
            />
            <p className="mt-8 max-w-xl font-robert-regular text-sm md:text-base leading-relaxed text-white/50">
              Urban Lead is proud to belong in the **Seven Wonders Electronics Trading LLC Group**, sharing a decade-long reputation of service excellence across the UAE.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ASSOCIATED GROUP SECTION ─────────────────────────────────── */}
      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Logo / Brand Feature Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal>
              <span className="font-general text-[9px] uppercase tracking-[0.25em] text-white/40 block mb-2">Group Parent company</span>
              <h3 className="font-circular-web text-3xl font-bold text-[#D4AF37]">
                Seven Wonders Group
              </h3>
              <p className="font-general text-xs text-white/40 mt-1 uppercase tracking-widest">
                Dubai – United Arab Emirates
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-[#050507] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="absolute -right-8 -bottom-8 size-36 bg-[#D4AF37]/5 rounded-full blur-3xl" />
                <div className="flex flex-col gap-4">
                  {/* Mock Brand Logo Plate */}
                  <div className="w-fit border border-[#D4AF37]/35 bg-[#D4AF37]/5 px-4 py-2 rounded-xl text-center">
  <img 
    src="/public/img/seven-wonders-logo.png" 
    alt="Seven Wonders Logo" 
    className="h-8 w-auto object-contain"
  />
</div>
                  <a 
                    href="https://sevenwonder.ae/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-general text-[10px] uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1 mt-2"
                  >
                    <span>Visit website: sevenwonder.ae</span>
                    <LuArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Description & Value block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
      

            <div className="grid gap-6 md:grid-cols-3 mt-6">
              {benefits.map((b, i) => (
                <Reveal key={i} delay={0.05 * i} className="flex flex-col gap-3 p-5 rounded-2xl border border-white/5 bg-white/[0.015]">
                  <h4 className="font-circular-web text-base font-bold text-[#D4AF37]">{b.title}</h4>
                  <p className="font-robert-regular text-xs text-white/50 leading-relaxed">{b.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-4 leading-relaxed font-robert-regular text-sm text-white/60">
              "We believe in the significance of long-term partnerships – just why our brands, customers, associates, and employees have been our long-standing allies and will remain with us in our march towards a bigger and brighter tomorrow. Seven Wonders was established in 2012 in Dubai, United Arab Emirates. Now it is the largest and most comprehensive electronics product shopping store with the concept of a 'one-stop-shop' for electronics items in Dubai."
            </Reveal>
          </div>

        </div>
      </section>

      {/* ── OUR FOUNDERS ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-10 max-w-6xl mx-auto border-b border-white/5">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          
          <div className="md:col-span-4 flex flex-col justify-center">
            <Reveal>
              <p className="font-general text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] mb-2">Executive Leadership</p>
              <h3 className="font-circular-web text-4xl font-bold">Our Founders</h3>
              <p className="font-robert-regular text-sm text-white/50 mt-4 leading-relaxed">
                Combining 30 years of industry experience to scale business solutions in multiple directions across the Middle East.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8 bg-[#050507] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 size-48 bg-[#D4AF37]/5 rounded-full blur-2xl" />
            <Reveal>
              <h4 className="font-circular-web text-lg font-semibold text-white/80">Mr. Saleem Abdul Latheef & Mr. Burhan Mohshin</h4>
              <p className="font-general text-[9px] uppercase tracking-widest text-[#D4AF37] mt-1">Group Directors & Founders</p>
              <p className="font-robert-regular text-sm text-white/60 leading-relaxed mt-6">
                "Mr. Saleem Abdul Latheef and Mr. Burhan Mohshin, founders of the group with 30 years of experience in the industry, expanded the business in many directions. With excellent after-sales services, our motto and aim remain the same: to offer the best prices and services to our valued regular and prospective customers."
              </p>
            </Reveal>

            {/* Founders credentials widget */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <Reveal delay={0.05}>
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <LuAward className="text-sm" />
                  </span>
                  <span className="font-general text-[10px] uppercase tracking-widest text-white/50">30 Years Experience</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <LuHeartHandshake className="text-sm" />
                  </span>
                  <span className="font-general text-[10px] uppercase tracking-widest text-white/50">Trusted After-Sales</span>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE VALUES & HISTORY TIMELINE ───────────────────────────── */}
      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <p className="font-general text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] mb-2">Our Foundation Pillars</p>
            <AnimatedTitle
              title="Group Core Values"
              containerClass="mt-4"
            />
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <Reveal key={i} delay={i * 0.05} className="flex flex-col justify-between p-6 border border-white/10 bg-[#050507] rounded-2xl hover:border-white/20 transition-all duration-300 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 size-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: `${val.color}15` }} />
                <div>
                  <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] mb-6" style={{ color: val.color }}>
                    <Icon className="text-lg" />
                  </span>
                  <h4 className="font-circular-web text-base font-bold mb-3">{val.title}</h4>
                  <p className="font-robert-regular text-xs text-white/45 leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── VISION & STATEMENT ───────────────────────────────────────── */}
      <section className="py-20 px-3 md:px-10 bg-[#050507] border-y border-white/5">
        <div className="container mx-auto max-w-6xl grid gap-12 md:grid-cols-2">
          <Reveal className="flex gap-6 items-start p-8 border border-white/5 rounded-3xl bg-black/40">
            <span className="flex size-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shrink-0">
              <LuEye className="text-xl" />
            </span>
            <div>
              <h4 className="font-circular-web text-lg font-bold text-white mb-2">Our Vision</h4>
              <p className="font-robert-regular text-sm text-white/50 leading-relaxed">
                Seven Wonders will be a leader synonymous with trust and care throughout the region and beyond, and become part of the community lifestyle.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex gap-6 items-start p-8 border border-white/5 rounded-3xl bg-black/40">
            <span className="flex size-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 shrink-0">
              <LuCompass className="text-xl" />
            </span>
            <div>
              <h4 className="font-circular-web text-lg font-bold text-white mb-2">Our Statement</h4>
              <p className="font-robert-regular text-sm text-white/50 leading-relaxed">
                Seven Wonders is dedicated to exceeding customers' expectations by aspiring for continual improvement and delivering excellence in products and services supported by the best management methods and a team of experts fulfilling the customer's aspirations and goals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
