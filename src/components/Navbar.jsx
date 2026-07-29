import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";

import Button from "./Button";

const navItems = ["Services", "Case Studies", "About", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link to="/">
              <img src="/img/logo.png" alt="logo" className="w-16 h-auto" />
            </Link>

            <Link to="/contact">
              <Button
                id="product-button"
                title="Start a Project"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </Link>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => {
                if (item === "Services") {
                  return (
                    <div key={index} className="relative group h-full flex items-center py-2">
                      <button className="nav-hover-btn flex items-center gap-1 cursor-pointer select-none">
                        <span>{item}</span>
                        <span className="text-[8px] opacity-60 group-hover:rotate-180 transition-transform duration-300">▼</span>
                      </button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:flex flex-col gap-1 rounded-xl border border-white/10 bg-black/95 p-3 min-w-[220px] shadow-2xl backdrop-blur-md z-50">
                        <Link
                          to="/services/development"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          Web Development
                        </Link>
                        <Link
                          to="/services/development"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          App Development
                        </Link>
                        <Link
                          to="/services/crm-automation"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          CRMs & Automation
                        </Link>
                        <hr className="border-white/10 my-1" />
                        <Link
                          to="/services/social-media-marketting"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          Digital Marketing
                        </Link>
                        <Link
                          to="/services/social-media-marketting"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          Branding
                        </Link>
                        <Link
                          to="/services/social-media-marketting"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          Social Media Strategy
                        </Link>
                        <Link
                          to="/services/social-media-marketting#video-editing"
                          className="text-[10px] font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03] block text-left"
                        >
                          Video Editing
                        </Link>
                      </div>
                    </div>
                  );
                }

                if (item === "Contact") {
                  return (
                    <Link
                      key={index}
                      to="/contact"
                      className="nav-hover-btn"
                    >
                      {item}
                    </Link>
                  );
                }

                if (item === "Case Studies") {
                  return (
                    <Link
                      key={index}
                      to="/case-studies"
                      className="nav-hover-btn"
                    >
                      {item}
                    </Link>
                  );
                }

                if (item === "About") {
                  return (
                    <Link
                      key={index}
                      to="/about"
                      className="nav-hover-btn"
                    >
                      {item}
                    </Link>
                  );
                }

                return (
                  <a
                    key={index}
                    href={`/#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5 pointer-events-auto"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>

            {/* Mobile Hamburger menu toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-6 flex md:hidden items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer"
            >
              {isMobileMenuOpen ? <LuX className="text-xl" /> : <LuMenu className="text-xl" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="absolute top-[calc(100%+8px)] left-4 right-4 bg-black/95 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md z-50 flex flex-col gap-4 animate-fadeIn pointer-events-auto max-h-[75vh] overflow-y-auto">
              
              {/* Home Link */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5 block"
              >
                Home
              </Link>

              {/* Services Header */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-general uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">Our Services</span>
                
                <div className="pl-3 flex flex-col gap-2 border-l border-white/10">
                  <Link
                    to="/services/development"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-white/45 hover:text-white transition-colors py-1 block"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/services/development"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-white/45 hover:text-white transition-colors py-1 block"
                  >
                    App Development
                  </Link>
                  <Link
                    to="/services/crm-automation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-white/45 hover:text-white transition-colors py-1 block"
                  >
                    CRMs & Automation
                  </Link>
                  <Link
                    to="/services/social-media-marketting"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-white/45 hover:text-white transition-colors py-1 block"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/services/social-media-marketting"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-white/45 hover:text-white transition-colors py-1 block"
                  >
                    Branding
                  </Link>
                  <Link
                    to="/services/social-media-marketting"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-white/45 hover:text-white transition-colors py-1 block"
                  >
                    Social Media Strategy
                  </Link>
                  <Link
                    to="/services/social-media-marketting#video-editing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-general uppercase tracking-widest text-[#ff4f12]/80 hover:text-white transition-colors py-1 block font-semibold"
                  >
                    Video Editing
                  </Link>
                </div>
              </div>

              {/* Case Studies Link */}
              <Link
                to="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5 block"
              >
                Case Studies
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5 block"
              >
                About
              </Link>

              {/* Contact Link */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-general uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors py-2 block"
              >
                Contact
              </Link>

            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;