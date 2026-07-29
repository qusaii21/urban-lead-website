import { useParams, Link } from "react-router-dom";
import { LuArrowLeft, LuArrowRight, LuCheckCircle2, LuTrendingUp, LuTarget, LuLayers } from "react-icons/lu";

import Reveal from "../components/Reveal";
import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer";

// Eyebrow label helper
const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] ${className}`}>
    {children}
  </p>
);

const STUDIES_DATA = {
  "53-acres": {
    title: "53 Acres",
    category: "Real Estate Consultancy",
    overview: "53Acres is a Pune-based real estate consultancy that helps customers make informed property investment decisions. Their objective was to strengthen their social media presence, educate potential buyers, and increase engagement through valuable content.",
    challenge: [
      "Increase brand awareness on Instagram.",
      "Reach a wider audience through viral and shareable content.",
      "Generate higher engagement in the form of likes, comments, shares, and saves.",
      "Position themselves as a trusted real estate expert rather than just another property seller."
    ],
    strategy: "We shifted the content approach from promotional posts to educational, value-driven content. Instead of directly selling properties, we focused on answering common questions and addressing the concerns of home buyers and investors.",
    whatWeDid: [
      "Developed a content strategy centered around real estate education.",
      "Created short-form Instagram Reels with strong hooks to improve viewer retention.",
      "Covered topics such as first-time home buying, investment tips, property division, legal checks before purchasing plots, and common real estate mistakes.",
      "Designed engaging thumbnails and captions to encourage clicks and interaction.",
      "Optimized content for Instagram's algorithm using consistent posting and audience-focused messaging."
    ],
    results: [
      "Followers grew from approximately 3,228 to 3,477 (net increase of 249 followers).",
      "Achieved 21,061 total views and reached 11,248 unique accounts within a 30-day window.",
      "72% of the reach came from non-followers, helping the brand connect with a wider audience beyond its existing community.",
      "Generated 666 content interactions and 97 new followers during the reporting period.",
      "Produced 49 pieces of content, maintaining a consistent and engaging presence.",
      "Educational Reels consistently drove engagement, with several posts receiving hundreds of likes, comments, shares, and saves."
    ],
    impact: [
      "Multiple educational reels achieved strong engagement, with some receiving 600+ likes, while several others consistently crossed 50–80+ likes.",
      "The educational content successfully positioned 53Acres as a reliable source of real estate knowledge.",
      "Increased trust and credibility, maintaining a highly active community of 3,400+ followers.",
      "Encouraged audience interaction by addressing practical, real-world real estate queries."
    ],
    outcome: [
      "Request detailed property catalogs and pricing structures.",
      "Enquire about direct office branch locations.",
      "Schedule physical site visits.",
      "Request private consultation slots for property investments."
    ],
    conclusion: "By focusing on informative, relatable, and high-value content instead of direct sales, 53Acres strengthened its online presence and built greater trust with its audience. The content strategy helped improve engagement while establishing the brand as a knowledgeable voice in the real estate industry.",
    outcomeSummary: "The increased visibility translated into genuine business enquiries. Potential buyers reached out through Instagram comments and direct messages to book visits and consultations. By focusing on educational content, we converted social media attention into qualified real estate enquiries.",
    image: "/img/gallery.jpeg"
  },
  "aurora-textiles": {
    title: "Aurora Textiles",
    category: "Wholesale Fabric Sourcing",
    overview: "Aurora Textiles is a Dubai-based wholesale textile supplier serving businesses across international markets. Their primary objective was to strengthen their digital presence and establish themselves as a trusted textile partner among African wholesalers and bulk fabric buyers.",
    challenge: [
      "Consistently attract and engage textile wholesalers, particularly from African markets.",
      "Rather than creating content for beginners, the goal was to educate experienced buyers.",
      "Build trust and position Aurora Textiles as an industry expert bulk fabric purchasers could rely on.",
      "Demonstrate fabric quality, sourcing logic, and industry insights."
    ],
    strategy: "We developed a series-based educational content strategy tailored specifically for wholesale buyers. Through recurring content formats like 'Woven Wonders' and 'Fun Fabric Facts,' we shared practical insights into fabric quality, applications, sourcing considerations, and textile knowledge relevant to bulk purchasers. The episodic format encouraged repeat visits while reinforcing Aurora Textiles' expertise within the wholesale textile industry.",
    whatWeDid: [
      "Developed custom series concepts ('Woven Wonders', 'Fun Fabric Facts').",
      "Created structured video segments explaining fiber characteristics and quality indicators.",
      "Shared bulk fabric sourcing guides, shipping container metrics, and sourcing strategies.",
      "Crafted professional captions and targeted hashtag profiles to reach African wholesale hubs.",
      "Produced consistent video formats optimized for B2B fabric wholesalers."
    ],
    results: [
      "Positioned Aurora Textiles as a knowledgeable and credible supplier within the wholesale B2B textile market.",
      "Created educational content specifically designed for African wholesalers and bulk buyers, strengthening trust among the target audience.",
      "Encouraged repeat page visits through recurring content series, improving brand recall.",
      "Shifted the brand's Instagram presence from purely promotional content to valuable B2B industry-focused insights.",
      "Several educational reels generated healthy interaction, with top-performing videos receiving 600+ likes."
    ],
    impact: [
      "Established a recognizable educational content series that encouraged repeat B2B profile visits.",
      "Helped position Aurora Textiles as a trusted source of textile knowledge rather than just a fabric supplier.",
      "Increased audience engagement and direct messaging inquiries through informative, easy-to-understand fabric content.",
      "Strengthened B2B brand credibility and posting consistency across its Instagram profile."
    ],
    outcome: [
      "Inquire about wholesale bulk fabric pricing.",
      "Request fabric sample swatches for container shipping.",
      "Verify shipping routes to African ports.",
      "Enquire about customized weave orders."
    ],
    conclusion: "By shifting from traditional promotional B2B content to an educational, series-driven strategy, Aurora Textiles built a more engaging and memorable social media presence. The recurring content not only kept bulk buyers returning but also reinforced the brand's expertise and trustworthiness within the textile industry.",
    outcomeSummary: "The transition from direct product advertising to authoritative fabric sourcing series built B2B trust. African wholesalers responded by engaging with the content and reaching out directly to establish wholesale supply partnerships, turning social feeds into B2B lead channels.",
    image: "/img/gallery-2.jpg"
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = STUDIES_DATA[id];

  if (!study) {
    return (
      <div className="w-screen min-h-screen bg-black text-white flex flex-col items-center justify-center pt-28">
        <h2 className="font-circular-web text-2xl font-bold mb-4">Case Study Not Found</h2>
        <Link to="/case-studies" className="text-[#D4AF37] flex items-center gap-2 hover:underline">
          <LuArrowLeft /> Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative pt-28">
      
      {/* ── BACK BUTTON ── */}
      <div className="container mx-auto px-4 md:px-10 max-w-5xl mb-6 relative z-10">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-xs font-general uppercase tracking-widest text-white/40 hover:text-[#D4AF37] transition-colors pointer-events-auto">
          <LuArrowLeft className="text-sm" /> Back to Case Studies
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="container mx-auto px-4 md:px-10 pb-12 max-w-5xl relative z-10">
        <div className="border border-white/10 bg-[#08080c] rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 size-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-general uppercase tracking-widest text-[#D4AF37] mb-6">
            <span>{study.category}</span>
          </div>

          <h1 className="special-font font-zentry text-4xl md:text-7xl !leading-[0.9] mb-8 text-white uppercase">
            {study.title}
          </h1>

          <div className="grid gap-8 md:grid-cols-12 items-start border-t border-white/5 pt-8">
            <div className="md:col-span-8">
              <h4 className="font-general text-[10px] uppercase tracking-widest text-white/30 mb-2">Overview</h4>
              <p className="font-robert-regular text-sm md:text-base text-white/80 leading-relaxed">
                {study.overview}
              </p>
            </div>
            
            <div className="md:col-span-4 rounded-2xl overflow-hidden h-48 md:h-full relative min-h-[160px] bg-zinc-900">
              <img src={study.image} alt={study.title} className="absolute inset-0 size-full object-cover opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAIL CONTENT GRID ── */}
      <section className="container mx-auto px-4 md:px-10 py-8 max-w-5xl relative z-10">
        <div className="grid gap-12 md:grid-cols-12">
          
          {/* Left Column: Challenge & Strategy */}
          <div className="md:col-span-6 flex flex-col gap-10">
            
            {/* The Challenge */}
            <div className="border border-white/10 bg-[#08080c] p-8 rounded-3xl">
              <div className="flex items-center gap-2.5 mb-6 text-[#ff4f12]">
                <LuTarget className="text-xl" />
                <h3 className="font-circular-web text-lg font-bold text-white uppercase tracking-wider">The Challenge</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {study.challenge.map((c, i) => (
                  <li key={i} className="flex gap-3 items-start text-xs font-robert-regular text-white/60 leading-relaxed">
                    <span className="text-[#ff4f12] shrink-0 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Strategy */}
            <div className="border border-white/10 bg-[#08080c] p-8 rounded-3xl">
              <div className="flex items-center gap-2.5 mb-6 text-[#D4AF37]">
                <LuLayers className="text-xl" />
                <h3 className="font-circular-web text-lg font-bold text-white uppercase tracking-wider">Our Strategy</h3>
              </div>
              <p className="font-robert-regular text-xs md:text-sm text-white/70 leading-relaxed mb-6">
                {study.strategy}
              </p>
              
              <h4 className="font-circular-web text-xs font-bold text-white/80 uppercase mb-4">What We Did:</h4>
              <ul className="flex flex-col gap-3">
                {study.whatWeDid.map((w, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs font-robert-regular text-white/50 leading-relaxed">
                    <span className="text-[#D4AF37] shrink-0 mt-0.5">✓</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Results & Business Impact */}
          <div className="md:col-span-6 flex flex-col gap-10">
            
            {/* Results */}
            <div className="border border-white/10 bg-[#08080c] p-8 rounded-3xl">
              <div className="flex items-center gap-2.5 mb-6 text-emerald-400">
                <LuTrendingUp className="text-xl animate-pulse" />
                <h3 className="font-circular-web text-lg font-bold text-white uppercase tracking-wider">Results</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {study.results.map((r, i) => (
                  <li key={i} className="flex gap-3 items-start text-xs font-robert-regular text-white/60 leading-relaxed">
                    <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Impact */}
            <div className="border border-white/10 bg-[#08080c] p-8 rounded-3xl">
              <div className="flex items-center gap-2.5 mb-6 text-[#D4AF37]">
                <LuCheckCircle2 className="text-xl" />
                <h3 className="font-circular-web text-lg font-bold text-white uppercase tracking-wider">Business Impact</h3>
              </div>
              <ul className="flex flex-col gap-4 mb-6">
                {study.impact.map((imp, i) => (
                  <li key={i} className="flex gap-3 items-start text-xs font-robert-regular text-white/60 leading-relaxed">
                    <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-circular-web text-xs font-bold text-white/80 uppercase mb-4">Direct Outcomes:</h4>
              <ul className="flex flex-col gap-3">
                {study.outcome.map((o, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-xs font-robert-regular text-white/50 leading-relaxed">
                    <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Conclusion block */}
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-12 rounded-3xl mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="font-circular-web text-2xl font-bold mb-4">Conclusion & Business Outcome</h3>
          <p className="font-robert-regular text-xs md:text-sm text-white/70 leading-relaxed mb-6">
            {study.conclusion}
          </p>
          <p className="font-robert-regular text-xs md:text-sm text-white/50 border-t border-white/5 pt-6 leading-relaxed">
            {study.outcomeSummary}
          </p>
        </div>

      </section>

      {/* Footer contact CTA */}
      <section className="bg-black py-20 text-center">
        <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37] px-6 py-3 text-xs font-general uppercase tracking-widest text-black font-bold hover:bg-white transition-all duration-300">
          <span>Let's talk about your project</span>
          <LuArrowRight className="text-sm" />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
