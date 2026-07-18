const Footer = () => {
  return (
    <footer className="w-screen bg-[#dfdff0] py-12 text-black">
      {/* Huge brand heading - outside container for true full-width display */}
      <div className="w-full overflow-hidden select-none mb-10">
        <h1 className="special-font font-zentry text-[17vw] font-black leading-[0.75] text-black text-center uppercase tracking-normal">
          urb<b>a</b><b>n</b> le<b>a</b>d
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-16">
        {/* Bottom bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/10 text-xs font-light text-black/60">
          <p>© {new Date().getFullYear()} Urban Lead. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="hover:text-black transition-colors">About Us</a>
            <a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
