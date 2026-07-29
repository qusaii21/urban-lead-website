import { useState, useEffect } from "react";
import { 
  LuMessageSquare, 
  LuBot, 
  LuDatabase, 
  LuArrowRight, 
  LuMail, 
  LuShare2, 
  LuPhoneCall, 
  LuZap, 
  LuCheckCircle2, 
  LuActivity 
} from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";

import Reveal from "../components/Reveal";
import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

// Eyebrow label helper
const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-general text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] ${className}`}>
    {children}
  </p>
);

// Typing loader component
const TypingBubble = () => (
  <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3.5 py-2 w-fit">
    <span className="size-1.5 rounded-full bg-white/40 animate-bounce" />
    <span className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.2s]" />
    <span className="size-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.4s]" />
  </div>
);

const CrmAutomation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [chatStep, setChatStep] = useState(0);

  // Auto-cycle the flowchart active nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle the WhatsApp chat simulation
  useEffect(() => {
    let timer;
    if (chatStep === 0) {
      timer = setTimeout(() => setChatStep(1), 2000);
    } else if (chatStep === 1) {
      timer = setTimeout(() => setChatStep(2), 1200);
    } else if (chatStep === 2) {
      timer = setTimeout(() => setChatStep(3), 2500);
    } else if (chatStep === 3) {
      timer = setTimeout(() => setChatStep(4), 1000);
    } else if (chatStep === 4) {
      timer = setTimeout(() => setChatStep(0), 5000);
    }
    return () => clearTimeout(timer);
  }, [chatStep]);

  const flowsteps = [
    { title: "1. Customer Action", desc: "User sends WhatsApp message or fills a web form." },
    { title: "2. AI Assessment", desc: "AI reads intent, drafts a response, and formats details." },
    { title: "3. CRM Database Sync", desc: "Lead info is created in Salesforce or HubSpot instantly." },
    { title: "4. Unified Action", desc: "Sends confirmation email, triggers SMS, alerts sales team." },
  ];

  const projects = [
    {
      icon: SiWhatsapp,
      title: "WhatsApp AI Lead Bot",
      desc: "Our custom bots answer customer queries on WhatsApp 24/7. When a customer expresses interest, the bot collects their contact details and automatically creates a new lead in your CRM database (Salesforce, HubSpot, etc.). No manual entry required.",
      color: "#25D366"
    },
    {
      icon: LuMessageSquare,
      title: "WhatsApp Bulk Campaigns",
      desc: "Send personalized broadcast campaigns to thousands of contacts at once. Reach customers directly on their favorite messaging channel to announce products or offers, with full open-rate analytics and automatic opt-out lists.",
      color: "#38bdf8"
    },
    {
      icon: LuMail,
      title: "Email Drip Automation",
      desc: "Trigger custom email series based on user actions. If a customer views a service but doesn't book, our automation sends a helpful follow-up email. Nurture sales leads on autopilot until they convert.",
      color: "#fb923c"
    },
    {
      icon: LuShare2,
      title: "Social Media Auto-Publish",
      desc: "Create a post once and publish it simultaneously to Instagram, TikTok, Facebook, LinkedIn, and YouTube in 1 click. Save hours of manual copy-pasting every single week.",
      color: "#a78bfa"
    },
    {
      icon: LuPhoneCall,
      title: "AI Voice Call Agents",
      desc: "Automated AI voice dialers that call leads to qualify interest or schedule meetings. They speak naturally, understand questions, book Calendar appointments, and update CRM records instantly.",
      color: "#f43f5e"
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative pt-28">
      
      {/* ── HERO SECTION WITH CHAT WINDOW ────────────────────────────── */}
      <section className="container mx-auto px-4 md:px-10 py-12 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Reveal>
              <Eyebrow>Autopilot Strategy</Eyebrow>
              <h2 className="special-font font-zentry text-5xl md:text-7xl !leading-[0.9] text-white">
                CRM & Business <br /> <b>A</b>utomation.
              </h2>
              <p className="font-robert-regular text-sm md:text-base text-white/50 leading-relaxed max-w-xl">
                Stop spending hours on manual data entry, copy-pasting, and cold follow-ups. We integrate smart AI systems and auto-sync your workflows so you can focus on building your business.
              </p>
            </Reveal>
            
            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-general uppercase tracking-wider">
                  <LuZap className="text-[#D4AF37]" /> CRM Integration
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-general uppercase tracking-wider">
                  <LuBot className="text-[#38bdf8]" /> AI Bot Triggers
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Live WhatsApp Simulator */}
          <div className="lg:col-span-6 border border-white/10 bg-[#08080c] p-6 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 size-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Simulation Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <SiWhatsapp className="text-xl" />
                </span>
                <div>
                  <h4 className="font-circular-web text-xs font-bold text-white uppercase tracking-wider">WhatsApp AI Assistant</h4>
                  <p className="text-[10px] text-emerald-400 font-general uppercase tracking-widest flex items-center gap-1">
                    System Online <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-general uppercase tracking-widest text-white/40">Simulation</span>
            </div>

            {/* Chat Messages */}
            <div className="flex flex-col gap-4 min-h-[220px] justify-end">
              
              {/* Customer typing / message */}
              {chatStep === 0 && (
                <div className="flex flex-col items-start max-w-[85%] self-start animate-fadeIn">
                  <span className="text-[8px] font-general uppercase tracking-widest text-white/30 mb-1 ml-1">Customer typing...</span>
                  <TypingBubble />
                </div>
              )}

              {chatStep >= 1 && (
                <div className="flex flex-col items-start max-w-[85%] self-start animate-fadeIn">
                  <span className="text-[8px] font-general uppercase tracking-widest text-white/30 mb-1 ml-1">Customer</span>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3.5 text-xs md:text-sm font-robert-regular text-white/90">
                    "Hey! I would like to book a branding project. Do you have slots next week?"
                  </div>
                </div>
              )}

              {/* AI typing / message */}
              {chatStep === 2 && (
                <div className="flex flex-col items-end max-w-[85%] self-end mt-2 animate-fadeIn">
                  <span className="text-[8px] font-general uppercase tracking-widest text-[#38bdf8] mb-1 mr-1">AI Assistant typing...</span>
                  <TypingBubble />
                </div>
              )}

              {chatStep >= 3 && (
                <div className="flex flex-col items-end max-w-[85%] self-end mt-2 animate-fadeIn">
                  <span className="text-[8px] font-general uppercase tracking-widest text-[#38bdf8] mb-1 mr-1">AI Assistant</span>
                  <div className="bg-[#1e293b] border border-white/10 rounded-2xl rounded-tr-none p-3.5 text-xs md:text-sm font-robert-regular text-white/90">
                    "Hi! Yes we do. I've created a custom lead card for you in our sales CRM and sent a calendar invite. Pick a time here: cal.com/urbanlead"
                  </div>
                </div>
              )}

              {/* CRM notification */}
              {chatStep >= 4 && (
                <div className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-general uppercase tracking-widest py-2.5 px-4 rounded-xl mt-4 animate-fadeIn">
                  <LuDatabase className="text-sm shrink-0" />
                  <span>Salesforce Lead synced: &quot;New Branding Opportunity&quot;</span>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ── FLOWCHART PIPELINE VISUALS ───────────────────────────────── */}
      <section className="bg-[#050508] border-t border-white/5 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-10 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <Eyebrow>How it Works</Eyebrow>
            <AnimatedTitle
              title="Workflows in Action"
              containerClass="mt-4"
            />
            <p className="mt-4 max-w-lg mx-auto font-robert-regular text-sm text-white/50 leading-relaxed">
              Below is an example of an AI-powered pipeline working completely on autopilot:
            </p>
          </div>

          {/* Interactive Flowchart Diagram */}
          <div className="grid gap-6 lg:grid-cols-4 items-stretch mt-12">
            {flowsteps.map((step, idx) => (
              <div 
                key={idx}
                className={`flex flex-col justify-between p-6 border rounded-2xl transition-all duration-500 relative ${
                  activeStep === idx 
                    ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_25px_rgba(212,175,55,0.08)]" 
                    : "border-white/10 bg-[#08080c]"
                }`}
              >
                {/* Visual connecting arrow */}
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 hidden lg:flex items-center justify-center size-6 rounded-full bg-black border border-white/10 text-white/35 z-20">
                    <LuArrowRight className="text-xs" />
                  </div>
                )}
                
                <div>
                  <span className={`flex size-8 items-center justify-center rounded-lg border text-xs font-semibold mb-6 transition-colors ${
                    activeStep === idx 
                      ? "border-[#D4AF37] bg-[#D4AF37] text-black" 
                      : "border-white/10 bg-white/[0.02]"
                  }`}>
                    {idx + 1}
                  </span>
                  <h4 className="font-circular-web text-base font-bold mb-2">{step.title}</h4>
                  <p className="font-robert-regular text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[9px] font-general uppercase tracking-widest text-[#D4AF37]/80">
                  <LuActivity className="animate-pulse" />
                  <span>{activeStep === idx ? "Active Step" : "Monitoring"}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CUSTOMIZED AUTOMATION SECTION ───────────────────────────── */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-10 max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column - Workflow visual builder mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1 border border-white/10 bg-[#08080c] p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 size-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />
              
              <span className="font-general text-[9px] uppercase tracking-widest text-[#D4AF37] block mb-6">Interactive Blueprint</span>
              <h3 className="font-circular-web text-2xl font-bold mb-6">Bespoke Flow Builder</h3>
              
              {/* Visual Nodes */}
              <div className="flex flex-col gap-6 relative">
                
                {/* Node 1 */}
                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl relative group hover:border-[#D4AF37]/30 transition-colors">
                  <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">A</div>
                  <div>
                    <h5 className="font-circular-web text-xs font-bold">Trigger Source</h5>
                    <p className="font-robert-regular text-[10px] text-white/40">Custom API, Webhook, WhatsApp Inbound</p>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="w-[2px] h-6 bg-gradient-to-b from-emerald-500 to-amber-500 ml-5 opacity-40" />

                {/* Node 2 */}
                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl relative group hover:border-[#D4AF37]/30 transition-colors">
                  <div className="size-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">B</div>
                  <div>
                    <h5 className="font-circular-web text-xs font-bold">Custom Logic & AI Filter</h5>
                    <p className="font-robert-regular text-[10px] text-white/40">Extract fields, classify intent, format prompt</p>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="w-[2px] h-6 bg-gradient-to-b from-amber-500 to-[#D4AF37] ml-5 opacity-40" />

                {/* Node 3 */}
                <div className="flex items-center gap-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-4 rounded-xl relative group transition-colors">
                  <div className="size-10 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center font-bold text-sm">C</div>
                  <div>
                    <h5 className="font-circular-web text-xs font-bold text-[#D4AF37]">Bespoke Destination</h5>
                    <p className="font-robert-regular text-[10px] text-[#D4AF37]/70">Proprietary CRM, Legacy SQL, custom Slack/Email triggers</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Informational block */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
              <Reveal>
                <Eyebrow>Bespoke Engineering</Eyebrow>
                <h2 className="special-font font-zentry text-4xl md:text-6xl !leading-[0.9] text-white uppercase mt-4">
                  Customized <br /> <b>A</b>utomation.
                </h2>
                <p className="font-robert-regular text-sm md:text-base text-white/50 leading-relaxed mt-2">
                  Every business operates differently. If out-of-the-box integrations don't fit your daily stack, we engineer customized automation pipelines built specifically for you.
                </p>
                
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex gap-3 items-start">
                    <span className="size-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-circular-web text-sm font-bold">Audit & Blueprint Planning</h4>
                      <p className="font-robert-regular text-xs text-white/40 mt-1">We watch your team work, locate the bottlenecks, and design a blueprint of what to automate first.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start mt-2">
                    <span className="size-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-circular-web text-sm font-bold">Bespoke API Integrations</h4>
                      <p className="font-robert-regular text-xs text-white/40 mt-1">We build custom serverless webhooks to connect internal portals, proprietary databases, and obscure tools.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start mt-2">
                    <span className="size-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-circular-web text-sm font-bold">Tailored AI Models</h4>
                      <p className="font-robert-regular text-xs text-white/40 mt-1">We train AI callers, scrapers, and auto-responders on your specific documents, catalog files, and brand guidelines.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES / PROJECTS ──────────────────────────────── */}
      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Eyebrow>Automation Catalog</Eyebrow>
          <AnimatedTitle
            title="What we automate"
            containerClass="mt-4"
          />
          <p className="mt-4 max-w-lg mx-auto font-robert-regular text-sm text-white/50 leading-relaxed">
            Simple, straight-to-the-point solutions to handle your operations on autopilot:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="flex flex-col justify-between p-8 border border-white/10 bg-[#08080c] rounded-3xl hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                {/* Corner hover glow */}
                <div 
                  className="absolute top-0 right-0 size-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ backgroundColor: `${proj.color}15` }} 
                />
                
                <div>
                  <span 
                    className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.01] mb-8 transition-colors duration-300"
                    style={{ color: proj.color }}
                  >
                    <Icon className="text-2xl" />
                  </span>
                  
                  <h3 className="font-circular-web text-xl font-bold mb-4">{proj.title}</h3>
                  <p className="font-robert-regular text-xs md:text-sm text-white/50 leading-relaxed">{proj.desc}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-general uppercase tracking-widest text-[#D4AF37]">
                  <LuCheckCircle2 className="text-sm shrink-0" />
                  <span>Ready to Integrate</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── SYSTEM BENEFITS ─────────────────────────────────────────── */}
      <section className="bg-[#050508] border-y border-white/5 py-20 px-3 md:px-10">
        <div className="container mx-auto max-w-5xl text-center flex flex-col items-center">
          <Reveal>
            <Eyebrow>The Bottom Line</Eyebrow>
            <h3 className="font-circular-web text-2xl md:text-3xl font-bold mt-4 leading-tight max-w-xl">
              Free up hours of manual work and never miss another sales lead.
            </h3>
            <p className="font-robert-regular text-xs md:text-sm text-white/50 mt-6 max-w-md leading-relaxed">
              We connect the software tools you already use (Salesforce, HubSpot, Slack, WhatsApp, Google Drive) and automate the manual connections between them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STRATEGIC CONTACT SECTION ───────────────────────────────── */}
      <Contact />

      <Footer />
    </div>
  );
};

export default CrmAutomation;
