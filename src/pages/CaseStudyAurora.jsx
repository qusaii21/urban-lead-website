import { Link } from "react-router-dom";
import {
  LuArrowLeft,
  LuArrowRight,
  LuGlobe,
  LuRepeat,
  LuThumbsUp,
  LuShield,
  LuTrendingUp,
} from "react-icons/lu";

import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#a78bfa] ${className}`}>
    {children}
  </p>
);

const CaseStudyAurora = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative pt-28">

      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#a78bfa]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Back to Case Studies */}
      <div className="container mx-auto px-4 md:px-10 max-w-7xl mb-8 relative z-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-general uppercase tracking-widest text-white/40 hover:text-[#a78bfa] transition-colors pointer-events-auto"
        >
          <LuArrowLeft className="text-sm" /> Back to Case Studies
        </Link>
      </div>

      {/* ── SECTION 1: HEADER HERO ── */}
      <section className="container mx-auto px-4 md:px-10 pb-16 max-w-7xl relative z-10">
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 size-96 bg-[#a78bfa]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center gap-3 text-[10px] font-general uppercase tracking-widest text-[#a78bfa] mb-6">
            <span>Portfolio Showcase</span>
            <span className="size-1 rounded-full bg-white/20" />
            <span>Aurora Textiles — Dubai, UAE</span>
          </div>

          <h1 className="special-font font-zentry text-5xl md:text-8xl !leading-[0.85] mb-8 text-white uppercase">
            Aurora<br />Text<b>i</b>les.
          </h1>

          <div className="grid gap-8 md:grid-cols-12 items-center border-t border-white/5 pt-8">
            <div className="md:col-span-8">
              <h4 className="font-general text-[10px] uppercase tracking-widest text-white/30 mb-2">
                Client Overview
              </h4>
              <p className="font-robert-regular text-sm md:text-base text-white/70 leading-relaxed">
                Aurora Textiles is a Dubai-based wholesale textile supplier serving businesses across
                international markets. Their primary objective was to strengthen their digital presence
                and establish themselves as a trusted textile partner among African wholesalers and
                bulk fabric buyers.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="bg-[#a78bfa]/5 border border-[#a78bfa]/20 p-5 rounded-2xl w-full text-center">
                <span className="text-3xl font-bold font-circular-web text-[#a78bfa]">Dubai, UAE</span>
                <p className="text-[10px] font-general uppercase tracking-widest text-white/40 mt-1">
                  Operational Hub
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CHALLENGE & STRATEGY + PHONE MOCKUP ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl relative z-10 border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-12 items-center">

          {/* Strategy Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <Eyebrow>The Challenge</Eyebrow>
              <h3 className="font-circular-web text-3xl font-bold mt-3 mb-4">
                Engaging Experienced Wholesale Buyers
              </h3>
              <p className="font-robert-regular text-sm md:text-base text-white/60 leading-relaxed mb-6">
                Aurora wanted to consistently attract and engage textile wholesalers, particularly from
                African markets. Rather than creating content for beginners, the goal was to educate
                experienced buyers, build trust, and position Aurora Textiles as an industry expert
                that wholesalers could rely on for quality fabrics and sourcing knowledge.
              </p>

              <Eyebrow className="mt-4">Our Strategy</Eyebrow>
              <h3 className="font-circular-web text-2xl font-bold mt-3 mb-4">
                Series-Based Educational Content
              </h3>
              <p className="font-robert-regular text-sm md:text-base text-white/60 leading-relaxed mb-6">
                We developed a series-based educational content strategy tailored specifically for
                wholesale buyers. Through recurring formats like <span className="text-[#a78bfa]">"Woven Wonders"</span> and{" "}
                <span className="text-[#a78bfa]">"Fun Fabric Facts,"</span> we shared practical
                insights into fabric quality, applications, sourcing considerations, and textile
                knowledge relevant to bulk purchasers.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-3 items-start text-xs font-robert-regular text-white/50">
                  <span className="text-[#a78bfa] shrink-0 mt-0.5">✓</span>
                  <span>Episodic format encouraged repeat visits while reinforcing expertise.</span>
                </div>
                <div className="flex gap-3 items-start text-xs font-robert-regular text-white/50">
                  <span className="text-[#a78bfa] shrink-0 mt-0.5">✓</span>
                  <span>Practical insights into fabric quality, sourcing, and bulk purchasing.</span>
                </div>
                <div className="flex gap-3 items-start text-xs font-robert-regular text-white/50">
                  <span className="text-[#a78bfa] shrink-0 mt-0.5">✓</span>
                  <span>Shifted Instagram from promotional to valuable industry-focused content.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Phone Emulator Mockup */}
          <div className="lg:col-span-6 flex justify-center py-6">
            <Reveal delay={0.1}>
              <div className="relative w-[280px] h-[520px] rounded-[48px] border-4 border-white/10 bg-zinc-950 p-2 shadow-2xl">

                {/* iPhone Camera Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-zinc-800 rounded-full" />
                </div>

                {/* Main screen area */}
                <div className="w-full h-full rounded-[40px] overflow-hidden relative bg-black border border-white/5">
                  <video
                    src="/videos/5.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 size-full object-cover z-10"
                  />

                  {/* Mock overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35 z-20 pointer-events-none" />
                  <div className="absolute bottom-6 left-4 right-4 z-20 text-left pointer-events-none">
                    <p className="text-[10px] font-bold text-white font-general">@auroratextiles</p>
                    <p className="text-[8px] text-white/70 mt-1 line-clamp-2">
                      Woven Wonders — Fabric sourcing insights for bulk buyers...
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: REELS CREATIVE GALLERY (3 Portrait Pictures) ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl border-t border-white/5 relative z-10">
        <div className="mb-12 text-center">
          <Eyebrow>Creative Assets</Eyebrow>
          <h3 className="font-circular-web text-3xl font-bold mt-2">Reels Portfolio Gallery</h3>
          <p className="text-xs md:text-sm text-white/40 mt-2 max-w-md mx-auto">
            A showcase of educational video reels produced for the campaign, designed to engage
            and inform wholesale textile buyers.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto">
          {[
            { id: 1, label: "Reel 01 — Woven Wonders",  img: "/img/img67.jpg" },
            { id: 2, label: "Reel 02 — Fun Fabric Facts", img: "/img/img68.jpg" },
            { id: 3, label: "Reel 03 — Sourcing Guide",  img: "/img/img69.jpg" },
          ].map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.07}>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-black group hover:border-[#a78bfa]/35 transition-all duration-300">
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 size-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent z-10">
                  <p className="text-[9px] font-general uppercase tracking-widest text-white/50">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: BUSINESS IMPACT ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl border-t border-white/5 relative z-10">
        <div className="mb-12 text-center">
          <Eyebrow>Strategic Impact</Eyebrow>
          <h3 className="font-circular-web text-3xl font-bold mt-2">Business Impact</h3>
          <p className="text-xs md:text-sm text-white/40 mt-2 max-w-md mx-auto">
            Measurable outcomes from shifting to an educational, series-driven content strategy.
          </p>
        </div>

        {/* Top metrics row */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Reveal delay={0}>
            <div className="border border-white/10 bg-[#08080c] p-6 rounded-2xl text-center flex flex-col items-center justify-between min-h-[140px] group hover:border-[#a78bfa]/20 transition-all duration-300">
              <span className="flex size-8 items-center justify-center rounded-lg bg-[#a78bfa]/10 text-[#a78bfa]">
                <LuThumbsUp />
              </span>
              <h4 className="text-2xl font-circular-web font-bold mt-4 text-[#a78bfa]">600+ Likes</h4>
              <p className="text-[10px] font-general uppercase tracking-widest text-white/45 mt-2">
                Top Performing Reels
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="border border-white/10 bg-[#08080c] p-6 rounded-2xl text-center flex flex-col items-center justify-between min-h-[140px] group hover:border-[#a78bfa]/20 transition-all duration-300">
              <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <LuGlobe />
              </span>
              <h4 className="text-2xl font-circular-web font-bold mt-4 text-emerald-400">African Hubs</h4>
              <p className="text-[10px] font-general uppercase tracking-widest text-white/45 mt-2">
                Target Market Reached
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-white/10 bg-[#08080c] p-6 rounded-2xl text-center flex flex-col items-center justify-between min-h-[140px] group hover:border-[#a78bfa]/20 transition-all duration-300">
              <span className="flex size-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <LuRepeat />
              </span>
              <h4 className="text-2xl font-circular-web font-bold mt-4 text-sky-400">Repeat Visits</h4>
              <p className="text-[10px] font-general uppercase tracking-widest text-white/45 mt-2">
                Episodic Brand Recall
              </p>
            </div>
          </Reveal>
        </div>

        {/* Detailed impact points */}
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 size-64 bg-[#a78bfa]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl text-left mb-8">
            <span className="font-general text-[9px] uppercase tracking-widest text-[#a78bfa] block mb-2">
              Campaign Outcomes
            </span>
            <h3 className="font-circular-web text-2xl font-bold mb-4">
              From Promotional to Educational
            </h3>
            <p className="font-robert-regular text-xs md:text-sm text-white/50 leading-relaxed">
              By shifting from traditional promotional content to an educational, series-driven
              strategy, Aurora Textiles built a more engaging and memorable social media presence.
              The recurring content kept audiences returning and reinforced the brand's expertise
              within the textile industry.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 border-t border-white/5 pt-8">
            <div>
              <span className="flex size-7 items-center justify-center rounded-md bg-[#a78bfa]/10 text-[#a78bfa] mb-3">
                <LuShield className="text-sm" />
              </span>
              <h5 className="font-circular-web text-xs font-bold text-[#a78bfa] uppercase mb-1">
                01 / Credibility
              </h5>
              <p className="text-[10px] text-white/40 font-robert-regular leading-relaxed">
                Positioned Aurora as a knowledgeable and credible supplier within the wholesale
                textile market.
              </p>
            </div>
            <div>
              <span className="flex size-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 mb-3">
                <LuGlobe className="text-sm" />
              </span>
              <h5 className="font-circular-web text-xs font-bold text-emerald-400 uppercase mb-1">
                02 / African Market
              </h5>
              <p className="text-[10px] text-white/40 font-robert-regular leading-relaxed">
                Created educational content specifically designed for African wholesalers and bulk
                buyers, strengthening trust.
              </p>
            </div>
            <div>
              <span className="flex size-7 items-center justify-center rounded-md bg-sky-500/10 text-sky-400 mb-3">
                <LuRepeat className="text-sm" />
              </span>
              <h5 className="font-circular-web text-xs font-bold text-sky-400 uppercase mb-1">
                03 / Brand Recall
              </h5>
              <p className="text-[10px] text-white/40 font-robert-regular leading-relaxed">
                Encouraged repeat page visits through recurring content series, improving brand
                recall among wholesale clients.
              </p>
            </div>
            <div>
              <span className="flex size-7 items-center justify-center rounded-md bg-amber-500/10 text-amber-400 mb-3">
                <LuTrendingUp className="text-sm" />
              </span>
              <h5 className="font-circular-web text-xs font-bold text-amber-400 uppercase mb-1">
                04 / Engagement
              </h5>
              <p className="text-[10px] text-white/40 font-robert-regular leading-relaxed">
                Top-performing videos received 600+ likes, demonstrating strong audience interest
                in the series format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CONCLUSION & CTA ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-5xl relative z-10">
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.04)_0%,transparent_55%)] pointer-events-none" />

          <h3 className="font-circular-web text-2xl font-bold mb-4">Conclusion</h3>
          <p className="font-robert-regular text-xs md:text-sm text-white/50 leading-relaxed max-w-2xl mx-auto">
            By shifting from traditional promotional content to an educational, series-driven
            strategy, Aurora Textiles built a more engaging and memorable social media presence.
            The recurring content not only kept audiences returning but also reinforced the brand's
            expertise and trustworthiness within the textile industry. Several educational reels
            generated healthy interaction, with top-performing videos receiving 600+ likes —
            demonstrating strong audience interest in the series format.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#a78bfa] px-6 py-2.5 text-xs font-general uppercase tracking-widest text-black font-bold hover:bg-white hover:scale-105 transition-all duration-300 pointer-events-auto"
            >
              <span>Start Your Campaign</span>
              <LuArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyAurora;
