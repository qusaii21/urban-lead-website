import { useState } from "react";
import { LuMapPin, LuPhone, LuMail, LuArrowRight } from "react-icons/lu";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Web & App Development",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "Web & App Development", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen min-h-screen bg-black pt-28 text-white relative">
      
      {/* ── MAIN CONTENT GRID ───────────────────────────────────────── */}
      <section className="container mx-auto px-4 md:px-10 py-12 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: OFFICE INFO & MAP */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal>
              <p className="font-general text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] mb-2">
                Get In Touch
              </p>
              <h2 className="special-font font-zentry text-5xl md:text-6xl !leading-[0.9] text-white mb-6">
                Let's start<br />something <b>b</b>ig.
              </h2>
              <p className="font-robert-regular text-sm text-white/50 leading-relaxed max-w-md">
                Have a campaign, web build, or social media expansion ready to scale? Reach out directly or complete the form.
              </p>
            </Reveal>

            {/* Office Details */}
            <div className="flex flex-col gap-6 mt-4">
              <Reveal delay={0.05}>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#D4AF37] shrink-0">
                    <LuMapPin className="text-lg" />
                  </span>
                  <div>
                    <h4 className="font-circular-web text-xs uppercase tracking-wider text-white/40">Head Office</h4>
                    <p className="font-robert-regular text-sm text-white/80 mt-1 leading-relaxed">
                      Office no 16, Blue Titan Elite Business Center,<br />
                      City Center - 1st Floor - Al Ghubaiba Rd,<br />
                      Al Shindagha - Al Fahidi - Dubai,<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#D4AF37] shrink-0">
                    <LuPhone className="text-lg" />
                  </span>
                  <div>
                    <h4 className="font-circular-web text-xs uppercase tracking-wider text-white/40">Direct Contact</h4>
                    <div className="flex flex-col mt-1 font-robert-regular text-sm text-white/80">
                      <a href="tel:+971541533661" className="hover:text-[#D4AF37] transition-colors">
                        +971 541533661
                      </a>
                      <a href="tel:+971529236152" className="hover:text-[#D4AF37] transition-colors mt-0.5">
                        +971 52 923 6152
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#D4AF37] shrink-0">
                    <LuMail className="text-lg" />
                  </span>
                  <div>
                    <h4 className="font-circular-web text-xs uppercase tracking-wider text-white/40">Email Inquiry</h4>
                    <a href="mailto:sales@urbanlead.com" className="font-robert-regular text-sm text-white/80 hover:text-[#D4AF37] transition-colors block mt-1">
                      sales@urbanlead.com
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Premium Grayscale Map */}
            <Reveal delay={0.2} className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 relative mt-4 shadow-2xl">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2325946892556!2d55.2894677!3d25.2627914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4339b69b61bb%3A0xea80277cb7eb8cfd!2sAl%20Ghubaiba%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1690000000000!5m2!1sen!2sae"
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: "grayscale(1) invert(1) opacity(0.7) contrast(1.1)" }}
              />
            </Reveal>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7 border border-white/10 bg-[#050507] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 size-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <Reveal>
              <h3 className="font-circular-web text-2xl font-bold mb-8">Send a Message</h3>
            </Reveal>

            {formSubmitted ? (
              <div className="h-96 flex flex-col items-center justify-center text-center animate-fadeIn">
                <span className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-3xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-pulse">
                  ✓
                </span>
                <h4 className="font-circular-web text-lg font-bold text-white">Message Sent Successfully</h4>
                <p className="font-robert-regular text-xs text-white/50 mt-2 max-w-xs leading-relaxed">
                  Thank you for reaching out. A digital strategy advisor will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-general text-[9px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-general text-[9px] uppercase tracking-widest text-white/40">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your business email"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] transition-all"
                  />
                </div>

                {/* Subject Selector */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-general text-[9px] uppercase tracking-widest text-white/40">Service Needed</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white/80 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] transition-all cursor-pointer"
                  >
                    <option value="Web & App Development" className="bg-[#18181b] text-white">Web & Mobile Development</option>
                    <option value="Social Media Strategy" className="bg-[#18181b] text-white">Social Media Strategy</option>
                    <option value="Search Engine SEO" className="bg-[#18181b] text-white">Search Engine SEO</option>
                    <option value="CRM Integration Pipeline" className="bg-[#18181b] text-white">CRM Integration Pipeline</option>
                    <option value="Other" className="bg-[#18181b] text-white">Other Design/Strategy</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-general text-[9px] uppercase tracking-widest text-white/40">Your Project Description</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your brand goals and timeline requirements..."
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 w-full bg-[#D4AF37] hover:bg-white hover:text-black text-black font-general text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
                >
                  <span>Submit Inquiry</span>
                  <LuArrowRight className="text-sm" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── FLOATING CONTROLS / SOCIAL TRIGGERS ────────────────────── */}
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971541533661"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute right-full mr-3 bg-black/90 text-white text-[9px] font-general uppercase tracking-widest py-1.5 px-3 rounded-lg border border-white/10 shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none duration-300">
          Chat on WhatsApp
        </span>
        <SiWhatsapp className="text-2xl" />
      </a>

      {/* Instagram Floating/Side Link */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow on Instagram"
        className="fixed bottom-24 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_4px_20px_rgba(238,42,123,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute right-full mr-3 bg-black/90 text-white text-[9px] font-general uppercase tracking-widest py-1.5 px-3 rounded-lg border border-white/10 shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none duration-300">
          Instagram Feed
        </span>
        <SiInstagram className="text-2xl" />
      </a>

      <Footer />
    </div>
  );
};

export default ContactPage;
