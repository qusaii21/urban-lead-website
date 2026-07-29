import { Link } from "react-router-dom";
import { LuArrowRight, LuMapPin, LuPlay } from "react-icons/lu";

import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] ${className}`}>
    {children}
  </p>
);

// Small stacked-screenshot collage used as the card thumbnail.
// Real Instagram content, not stock photography.
const ThumbCollage = ({ images, accent }) => (
  <div className="relative size-full flex items-center justify-center">
    <div
      className="absolute w-36 md:w-40 aspect-[9/16] rounded-xl overflow-hidden border-4 border-black shadow-2xl rotate-[-8deg] -translate-x-10 md:-translate-x-14"
      style={{ boxShadow: `0 20px 40px -10px ${accent}33` }}
    >
      <img src={images[0]} alt="" className="size-full object-cover" />
    </div>
    <div className="relative w-36 md:w-40 aspect-[9/16] rounded-xl overflow-hidden border-4 border-black shadow-2xl rotate-[6deg] translate-x-8 md:translate-x-10 z-10">
      <img src={images[1]} alt="" className="size-full object-cover" />
    </div>
  </div>
);

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: "53-acres",
      title: "53 Acres",
      category: "Real Estate",
      summary:
        "A property consultancy in Pune was posting like every other real estate page — listings, prices, \"DM for details.\" We swapped that for short videos answering the questions buyers actually type into Google, and let the comments do the selling.",
      location: "Pune, India",
      impact: "21,061 views in 30 days",
      accent: "#D4AF37",
      images: [
        "/img/case-studies/53acres/01-two-brothers.jpg",
        "/img/case-studies/53acres/05-budget-lifestyle.jpg",
      ],
    },
    {
      id: "aurora-textiles",
      title: "Aurora Textiles",
      category: "Wholesale Fabric",
      summary:
        "Aurora sells fabric by the container to buyers who already know textiles — pitching them was pointless. So we built a running series that taught something new every episode, and turned casual viewers into people who came back for the next one.",
      location: "Dubai, UAE",
      impact: "600+ likes on top reels",
      accent: "#a78bfa",
      images: [
        "/img/case-studies/aurora/01-day1-woven-wonders.jpg",
        "/img/case-studies/aurora/02-is-this-wool.jpg",
      ],
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative pt-28">

      {/* ── HERO ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl relative z-10 text-center">
        <Reveal>
          <Eyebrow>Real Clients, Real Numbers</Eyebrow>
          <h2 className="special-font font-zentry text-5xl md:text-8xl !leading-[0.85] text-white uppercase mt-4">
            Case Studies.
          </h2>
          <p className="mt-6 max-w-xl mx-auto font-robert-regular text-sm md:text-base text-white/50 leading-relaxed">
            Two businesses, two very different audiences, two Instagram pages that
            were barely moving. Here's what we changed, and what happened after.
          </p>
        </Reveal>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section className="container mx-auto px-4 md:px-10 py-12 max-w-5xl relative z-10">
        <div className="flex flex-col gap-14">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 0.08}>
              <Link
                to={`/case-studies/${study.id}`}
                className="group block border border-white/10 bg-[#08080c] rounded-3xl overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="grid md:grid-cols-12 items-stretch">

                  {/* Visual collage */}
                  <div className="md:col-span-5 relative min-h-[280px] md:min-h-[340px] overflow-hidden bg-zinc-950 flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-30 blur-3xl"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${study.accent}, transparent 70%)` }}
                    />
                    <ThumbCollage images={study.images} accent={study.accent} />
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[9px] font-general uppercase tracking-widest text-white/50 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                      <LuPlay className="text-[10px]" /> Instagram Reels
                    </span>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[10px] font-general uppercase tracking-widest mb-4" style={{ color: study.accent }}>
                        <span>{study.category}</span>
                        <span className="size-1 rounded-full bg-white/20" />
                        <span className="text-white/40 flex items-center gap-1">
                          <LuMapPin className="text-[11px]" /> {study.location}
                        </span>
                      </div>

                      <h3 className="font-circular-web text-3xl font-bold mb-4 text-white transition-colors" style={{ color: undefined }}>
                        <span className="group-hover:opacity-80 transition-opacity">{study.title}</span>
                      </h3>

                      <p className="font-robert-regular text-xs md:text-sm text-white/50 leading-relaxed mb-6">
                        {study.summary}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs font-robert-regular text-white/80 border-t border-white/5 pt-6 mb-6">
                        <span className="font-bold" style={{ color: study.accent }}>{study.impact}</span>
                      </div>

                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-6 py-2.5 text-xs font-general uppercase tracking-widest text-black font-bold group-hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: study.accent }}
                      >
                        <span>Read the full story</span>
                        <LuArrowRight className="text-sm" />
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Bottom Callout ── */}
      <section className="bg-[#050508] border-y border-white/5 py-24 text-center px-4">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h3 className="font-circular-web text-2xl font-bold">Want a page like these?</h3>
          <p className="font-robert-regular text-xs text-white/50 leading-relaxed">
            We'll look at what you're posting now, tell you honestly what's working
            and what isn't, and map out a simple plan to get more of the right eyes on it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-xs font-general uppercase tracking-widest text-black font-bold hover:bg-[#D4AF37] transition-all duration-300"
          >
            <span>Start a Project</span>
            <LuArrowRight className="text-sm" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;