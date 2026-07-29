import { Link } from "react-router-dom";
import { LuArrowRight, LuMapPin, LuTrendingUp, LuEye, LuUsers } from "react-icons/lu";

import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] ${className}`}>
    {children}
  </p>
);

const CASE_STUDIES = [
  {
    id: "53-acres",
    title: "53 Acres",
    category: "Real Estate",
    location: "Pune, India",
    accent: "#D4AF37",
    summary:
      "A property consultancy in Pune was posting like every other real estate page — listings, prices, \"DM for details.\" We swapped that for short videos answering the questions buyers actually type into Google, and let the comments do the selling.",
    stats: [
      { icon: LuEye,      value: "21,061", label: "Views in 30 days" },
      { icon: LuUsers,    value: "+249",   label: "Net new followers" },
      { icon: LuTrendingUp, value: "72%",  label: "Non-follower reach" },
    ],
    // 3-image fan uses first 3; side strip uses first
    images: ["/img/img18.jpg", "/img/img19.jpg", "/img/img20.jpg"],
    // analytics screenshots strip
    stats_imgs: ["/img/img45.jpg", "/img/img46.jpg", "/img/img47.jpg"],
  },
  {
    id: "aurora-textiles",
    title: "Aurora Textiles",
    category: "Wholesale Fabric",
    location: "Dubai, UAE",
    accent: "#a78bfa",
    summary:
      "Aurora sells fabric by the container to buyers who already know textiles — pitching them was pointless. So we built a running series that taught something new every episode, and turned casual viewers into people who came back for the next one.",
    stats: [
      { icon: LuTrendingUp, value: "600+",    label: "Likes on top reels" },
      { icon: LuUsers,      value: "African", label: "Markets reached" },
      { icon: LuEye,        value: "Series",  label: "Repeat visits driven" },
    ],
    images: ["/img/img67.jpg", "/img/img68.jpg", "/img/img69.jpg"],
    stats_imgs: ["/img/img67.jpg", "/img/img68.jpg", "/img/img69.jpg"],
  },
];

/* ── 3-image rotated fan ── */
const ImageFan = ({ images, accent }) => (
  <div className="relative w-[200px] h-[300px] mx-auto">
    {images.slice(0, 3).map((src, i) => {
      const config = [
        { rotate: "-10deg", z: 10, tx: "-28px", ty: "10px" },
        { rotate: "0deg",   z: 20, tx: "0px",   ty: "0px", glow: true },
        { rotate: "9deg",   z: 15, tx: "28px",  ty: "-10px" },
      ];
      const c = config[i];
      return (
        <div
          key={i}
          className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
          style={{
            transform: `rotate(${c.rotate}) translate(${c.tx}, ${c.ty})`,
            zIndex: c.z,
            boxShadow: c.glow ? `0 24px 48px -8px ${accent}55` : undefined,
          }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      );
    })}
  </div>
);

const CaseStudiesPage = () => (
  <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative pt-28">

    {/* ambient glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/4 rounded-full blur-[160px] pointer-events-none" />
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-500/4 rounded-full blur-[160px] pointer-events-none" />

    {/* ── HERO ── */}
    <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl relative z-10">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Real Clients, Real Numbers</Eyebrow>
            <h2 className="special-font font-zentry text-5xl md:text-8xl !leading-[0.85] text-white uppercase mt-4">
              Case Stud<b>i</b>es.
            </h2>
          </div>
          <p className="font-robert-regular text-sm text-white/40 leading-relaxed max-w-sm md:text-right">
            Two businesses, two very different audiences, two Instagram pages that
            were barely moving. Here's what we changed — and what happened after.
          </p>
        </div>
      </Reveal>
    </section>

    {/* ── CASE STUDY CARDS ── */}
    <section className="container mx-auto px-4 md:px-10 pb-24 max-w-7xl relative z-10">
      <div className="flex flex-col gap-10">
        {CASE_STUDIES.map((study, idx) => (
          <Reveal key={study.id} delay={idx * 0.1}>
            <Link
              to={`/case-studies/${study.id}`}
              className="group block rounded-3xl border border-white/10 bg-[#08080c] overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 items-stretch">

                {/* ── Visual panel ── */}
                <div className="md:col-span-5 relative min-h-[320px] md:min-h-[480px] bg-zinc-950 overflow-hidden flex flex-col items-center justify-center gap-8 p-10">
                  {/* radial glow */}
                  <div
                    className="absolute inset-0 opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-35"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${study.accent}, transparent 65%)` }}
                  />

                  {/* image fan */}
                  <div className="relative z-10">
                    <ImageFan images={study.images} accent={study.accent} />
                  </div>

                  {/* small analytics strip */}
                  <div className="relative z-10 flex gap-2 justify-center">
                    {study.stats_imgs.slice(0, 3).map((src, i) => (
                      <div
                        key={i}
                        className="w-14 h-20 rounded-lg overflow-hidden border border-white/10 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* badge */}
                  <span className="absolute bottom-5 left-5 flex items-center gap-1.5 text-[9px] font-general uppercase tracking-widest text-white/50 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 z-10">
                    <span
                      className="size-1.5 rounded-full animate-pulse"
                      style={{ background: study.accent }}
                    />
                    Instagram Reels
                  </span>
                </div>

                {/* ── Content panel ── */}
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    {/* meta */}
                    <div
                      className="flex flex-wrap items-center gap-3 text-[10px] font-general uppercase tracking-widest mb-5"
                      style={{ color: study.accent }}
                    >
                      <span>{study.category}</span>
                      <span className="size-1 rounded-full bg-white/20" />
                      <span className="text-white/40 flex items-center gap-1">
                        <LuMapPin className="text-[11px]" /> {study.location}
                      </span>
                    </div>

                    <h3 className="font-zentry text-4xl md:text-5xl font-black text-white uppercase !leading-tight mb-4 group-hover:opacity-90 transition-opacity">
                      {study.title}
                    </h3>

                    <p className="font-robert-regular text-sm md:text-base text-white/50 leading-relaxed max-w-lg">
                      {study.summary}
                    </p>
                  </div>

                  {/* stats row */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                    {study.stats.map((stat, i) => (
                      <div key={i}>
                        <p
                          className="font-zentry text-2xl md:text-3xl font-black"
                          style={{ color: study.accent }}
                        >
                          {stat.value}
                        </p>
                        <p className="font-general text-[9px] uppercase tracking-widest text-white/35 mt-1 leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-6 py-2.5 text-xs font-general uppercase tracking-widest text-black font-bold group-hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: study.accent }}
                    >
                      Read the full story
                      <LuArrowRight className="text-sm" />
                    </span>

                    {/* image thumbnail row */}
                    <div className="hidden sm:flex items-center gap-2">
                      {study.images.map((src, i) => (
                        <div
                          key={i}
                          className="w-8 h-11 rounded-md overflow-hidden border border-white/10 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ── BOTTOM CALLOUT ── */}
    <section className="bg-[#050508] border-y border-white/5 py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-8">
            <Eyebrow>Your brand, next</Eyebrow>
            <h3 className="font-zentry text-3xl md:text-4xl font-black uppercase text-white mt-3 mb-4 !leading-tight">
              Want results<br />like these?
            </h3>
            <p className="font-robert-regular text-sm text-white/45 leading-relaxed max-w-lg">
              We'll look at what you're posting now, tell you honestly what's working
              and what isn't, and map out a simple plan to get more of the right eyes on it.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 text-xs font-general uppercase tracking-widest text-black font-bold hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Start a project
              <LuArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudiesPage;
