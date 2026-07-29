import { Link } from "react-router-dom";
import { 
  LuArrowLeft, 
  LuTrendingUp, 
  LuInstagram, 
  LuEye, 
  LuUsers, 
  LuMessageSquare, 
  LuCompass, 
  LuShieldAlert, 
  LuArrowRight 
} from "react-icons/lu";

import Reveal from "../components/Reveal";
import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer";

const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] ${className}`}>
    {children}
  </p>
);

const CaseStudy53Acres = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative pt-28">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Back to Case Studies */}
      <div className="container mx-auto px-4 md:px-10 max-w-7xl mb-8 relative z-10">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-xs font-general uppercase tracking-widest text-white/40 hover:text-[#D4AF37] transition-colors pointer-events-auto">
          <LuArrowLeft className="text-sm" /> Back to Case Studies
        </Link>
      </div>

      {/* ── SECTION 1: HEADER HERO ── */}
      <section className="container mx-auto px-4 md:px-10 pb-16 max-w-7xl relative z-10">
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 size-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex items-center gap-3 text-[10px] font-general uppercase tracking-widest text-[#D4AF37] mb-6">
            <span>Portfolio Showcase</span>
            <span className="size-1 rounded-full bg-white/20" />
            <span>53 Acres Pune</span>
          </div>

          <h1 className="special-font font-zentry text-5xl md:text-8xl !leading-[0.85] mb-8 text-white uppercase">
            53 A<b>c</b>res.
          </h1>

          <div className="grid gap-8 md:grid-cols-12 items-center border-t border-white/5 pt-8">
            <div className="md:col-span-8">
              <h4 className="font-general text-[10px] uppercase tracking-widest text-white/30 mb-2">Client Overview</h4>
              <p className="font-robert-regular text-sm md:text-base text-white/70 leading-relaxed">
                53Acres is a Pune-based real estate consultancy that helps customers make informed property investment decisions. Their objective was to strengthen their social media presence, educate potential buyers, and increase engagement through valuable content.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-5 rounded-2xl w-full text-center">
                <span className="text-3xl font-bold font-circular-web text-[#D4AF37]">60 Days</span>
                <p className="text-[10px] font-general uppercase tracking-widest text-white/40 mt-1">Campaign Period</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE STRATEGY & THE REELS SHOWCASE ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl relative z-10 border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Strategy Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <Eyebrow>Campaign Architecture</Eyebrow>
              <h3 className="font-circular-web text-3xl font-bold mt-3 mb-6">Educational Content Strategy</h3>
              <p className="font-robert-regular text-sm md:text-base text-white/60 leading-relaxed mb-6">
                We shifted the content approach from promotional posts to educational, value-driven content. Instead of directly selling properties, we focused on answering common questions and addressing the concerns of home buyers and investors.
              </p>
              
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-3 items-start text-xs font-robert-regular text-white/50">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">✓</span>
                  <span>Short-form Instagram Reels with strong hooks to improve retention.</span>
                </div>
                <div className="flex gap-3 items-start text-xs font-robert-regular text-white/50">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">✓</span>
                  <span>Covering buyer advice, investment tips, property division, and legal checks.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Phone Emulator Mockup */}
          <div className="lg:col-span-6 flex justify-center py-6">
            <Reveal delay={0.1}>
              <div className="relative w-[280px] h-[520px] rounded-[48px] border-4 border-white/10 bg-zinc-950 p-2 shadow-2xl relative">
                
                {/* iPhone Camera Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-zinc-800 rounded-full" />
                </div>
                
                {/* Main screen area */}
                <div className="w-full h-full rounded-[40px] overflow-hidden relative bg-black border border-white/5">
                  <video 
                    src="/videos/3.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 size-full object-cover z-10"
                  />
                  
                  {/* Mock video overlay overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35 z-20 pointer-events-none" />
                  <div className="absolute bottom-6 left-4 right-4 z-20 text-left pointer-events-none">
                    <p className="text-[10px] font-bold text-white font-general">@53acres_pune</p>
                    <p className="text-[8px] text-white/70 mt-1 line-clamp-2">Important checklist before signing plot documents...</p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: SOCIAL MEDIA REELS CREATIVES (5 Portrait Pictures Grid) ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl border-t border-white/5 relative z-10">
        <div className="mb-12 text-center">
          <Eyebrow>Creative Assets</Eyebrow>
          <h3 className="font-circular-web text-3xl font-bold mt-2">Reels Portfolio Gallery</h3>
          <p className="text-xs md:text-sm text-white/40 mt-2 max-w-md mx-auto">
            A showcase of 5 video deliverables produced during the campaign, designed for maximum audience retention.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-5">
          {[
            { id: 1, label: "Reel 01", img: "/img/img18.jpg" },
            { id: 2, label: "Reel 02", img: "/img/img19.jpg" },
            { id: 3, label: "Reel 03", img: "/img/img20.jpg" },
            { id: 4, label: "Reel 04", img: "/img/img21.jpg" },
            { id: 5, label: "Reel 05", img: "/img/img22.jpg" }
          ].map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.05}>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-black group hover:border-[#D4AF37]/35 transition-all duration-300">
                <img 
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 size-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: PERFORMANCE METRICS (5 Instagram Stats Pictures Grid) ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl border-t border-white/5 relative z-10">
        <div className="mb-12 text-center">
          <Eyebrow>Strategic Impact</Eyebrow>
          <h3 className="font-circular-web text-3xl font-bold mt-2">Performance Analytics</h3>
          <p className="text-xs md:text-sm text-white/40 mt-2 max-w-md mx-auto">
            Campaign verification statistics over a 60-day tracking window, highlighting target market engagement.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-5">
          {[
            { id: 1, title: "Follower Details", value: "3,477 Followers (+7.6%)", desc: "Overall growth of 249 net followers (313 follows, 64 unfollows).", img: "/img/img45.jpg" },
            { id: 2, title: "Account Insights", value: "21.1K Views", desc: "Delivered 666 interactions, 97 new followers, and 49 content shared.", img: "/img/img46.jpg" },
            { id: 3, title: "Profile Activity", value: "282 Actions", desc: "Drove 278 direct profile visits and 4 external bio-link clicks.", img: "/img/img47.jpg" },
            { id: 4, title: "Growth Velocity", value: "Organic Follows", desc: "Daily acquisition details and active follower retention trends.", img: "/img/img48.jpg" },
            { id: 5, title: "Views Distribution", value: "21,061 Views Reached", desc: "Drove 11,248 accounts reached, with 72% traffic coming from non-followers.", img: "/img/img49.jpg" }
          ].map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.05}>
              <div className="border border-white/5 bg-[#08080c] p-4 rounded-2xl flex flex-col justify-between hover:border-[#D4AF37]/35 transition-all duration-300 min-h-[300px]">
                <div>
                  <div className="aspect-[3/4] md:aspect-[9/16] w-full rounded-lg overflow-hidden bg-black border border-white/5 relative mb-4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="absolute inset-0 size-full object-contain"
                    />
                  </div>
                  <h4 className="font-circular-web text-xs font-bold text-white line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#D4AF37] font-semibold mt-1">
                    {item.value}
                  </p>
                </div>
                <p className="font-robert-regular text-[10px] text-white/40 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: AUDIENCE FEEDBACK (1 Comment Section Picture) ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl border-t border-white/5 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Text Description */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Viewer Feedback</Eyebrow>
              <h3 className="font-circular-web text-3xl font-bold mt-3 mb-6">Audience Interaction</h3>
              <p className="font-robert-regular text-sm md:text-base text-white/60 leading-relaxed">
                By focusing on practical buyer questions rather than hard property pitches, we triggered deep engagement. Viewers shared, saved, and left constructive comments, establishing 53Acres as Pune's most reliable voice in real estate consultancy.
              </p>
            </Reveal>
          </div>

          {/* Single Comment Section Screenshot Mockup */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-[#08080c] p-6 rounded-3xl relative overflow-hidden shadow-2xl flex justify-center items-center">
                <div className="w-full rounded-2xl overflow-hidden bg-black border border-white/5 relative">
                  <img 
                    src="/img/img60.jpg" 
                    alt="Comments section dashboard screenshot" 
                    className="w-full h-auto object-contain max-h-[500px]" 
                  />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ── SECTION 6: OUTBOUND ENQUIRIES & OUTCOMES ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-7xl border-t border-white/5 relative z-10">
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 size-64 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-2xl text-left">
            <span className="font-general text-[9px] uppercase tracking-widest text-[#D4AF37] block mb-2">Business Outcomes</span>
            <h3 className="font-circular-web text-2xl font-bold mb-4">Converting Visibility into Enquiries</h3>
            <p className="font-robert-regular text-xs md:text-sm text-white/50 leading-relaxed mb-6">
              The increased B2B profile reach translated directly into inquiries. Pune buyers commented and sent direct messages asking for detailed property pricing, site visit scheduling, office locations, and investment consultations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-4 border-t border-white/5 pt-8 mt-6">
            <div>
              <h5 className="font-circular-web text-xs font-bold text-[#D4AF37] uppercase">01 / Property Details</h5>
              <p className="text-[10px] text-white/40 mt-1 font-robert-regular">Requesting catalogs and price lists.</p>
            </div>
            <div>
              <h5 className="font-circular-web text-xs font-bold text-[#D4AF37] uppercase">02 / Office Locations</h5>
              <p className="text-[10px] text-white/40 mt-1 font-robert-regular">Enquiring about direct branch details.</p>
            </div>
            <div>
              <h5 className="font-circular-web text-xs font-bold text-[#D4AF37] uppercase">03 / Site Visit Bookings</h5>
              <p className="text-[10px] text-white/40 mt-1 font-robert-regular">Scheduling on-ground property reviews.</p>
            </div>
            <div>
              <h5 className="font-circular-web text-xs font-bold text-[#D4AF37] uppercase">04 / Consultations</h5>
              <p className="text-[10px] text-white/40 mt-1 font-robert-regular">Seeking B2B real estate advisory sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CONCLUSION & CTA ── */}
      <section className="container mx-auto px-4 md:px-10 py-16 max-w-5xl relative z-10">
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
          
          <h3 className="font-circular-web text-2xl font-bold mb-4">Summary</h3>
          <p className="font-robert-regular text-xs md:text-sm text-white/50 leading-relaxed max-w-2xl mx-auto">
            By shifting from direct sales advertising to high-value real estate education, we built authentic B2B authority. The campaign drove consistent follow traction, turning organic attention into property leads on autopilot.
          </p>
          
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37] px-6 py-2.5 text-xs font-general uppercase tracking-widest text-black font-bold hover:bg-white hover:scale-105 transition-all duration-300 pointer-events-auto">
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

export default CaseStudy53Acres;