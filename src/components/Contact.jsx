import AnimatedTitle from "./AnimatedTitle";
import { TiLocationArrow } from "react-icons/ti";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-28 md:py-40 w-full px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full pointer-events-none blur-[140px] opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ff4f12 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <div className="text-center md:text-left">
          <p className="font-general text-[10px] uppercase tracking-[0.25em] text-[#ff4f12] mb-4">
            Next Level Growth
          </p>
          <h2 className="font-zentry text-6xl sm:text-8xl md:text-[9rem] font-black text-white leading-none tracking-tighter uppercase select-none">
            LET'S TALK.
          </h2>
        </div>

        <a 
          href="mailto:hello@urbanlead.agency" 
          className="size-32 sm:size-40 rounded-full bg-[#9eff00] hover:bg-white text-black flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(158,255,0,0.35)] transition-all duration-500 hover:scale-105 group relative overflow-hidden shrink-0"
        >
          <span className="absolute animate-[spin_12s_linear_infinite] text-[8px] font-general font-black tracking-[0.2em] uppercase text-black/60 pointer-events-none">
            START A PROJECT · START A PROJECT · 
          </span>
          <TiLocationArrow className="text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
