import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import AnimatedTitle from "./AnimatedTitle";

const SLIDES = [
  {
    src: "/img/gallery.jpeg",
    title: "53 a<b>c</b>res <br /> real estate gr<b>o</b>wth",
    label: "REAL ESTATE CONSULTANCY",
    desc: "How we shifted 53Acres Pune from direct sales to real estate education on Instagram, generating 21,000+ views and converting social attention into property leads.",
    href: "/case-studies/53-acres"
  },
  {
    src: "/img/gallery-2.jpg",
    title: "aur<b>o</b>ra <br /> text<b>i</b>les",
    label: "WHOLESALE FABRICS",
    desc: "How we built a series-based fabric education campaign for Aurora Textiles Dubai, positioning them as trusted industry experts for wholesalers in African markets.",
    href: "/case-studies/aurora-textiles"
  }
];

const Story = () => {
  const frameRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play continuous cycle: resets interval when active slide index changes
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const fadeToSlide = (targetIdx) => {
    const img = frameRef.current;
    if (!img) return;

    gsap.to(img, {
      opacity: 0,
      scale: 0.95,
      duration: 0.22,
      onComplete: () => {
        setCurrentIndex(targetIdx);
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      },
    });
  };

  const handlePrev = () => {
    const targetIdx = currentIndex === 0 ? SLIDES.length - 1 : currentIndex - 1;
    fadeToSlide(targetIdx);
  };

  const handleNext = () => {
    const targetIdx = currentIndex === SLIDES.length - 1 ? 0 : currentIndex + 1;
    fadeToSlide(targetIdx);
  };

  const handleGoTo = (idx) => {
    if (idx === currentIndex) return;
    fadeToSlide(idx);
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase tracking-wider text-[#D4AF37] md:text-[10px] font-semibold">
          Case Studies
        </p>

        <div className="relative size-full">
          {/* AnimatedTitle re-mounts on slide change to re-trigger letter animation */}
          <AnimatedTitle
            key={currentIndex}
            title={SLIDES[currentIndex].title}
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container relative group">
            {/* Left Hover Navigation Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg"
              aria-label="Previous slide"
            >
              ←
            </button>

            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src={SLIDES[currentIndex].src}
                  alt={SLIDES[currentIndex].label}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Hover Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="font-general text-xs uppercase tracking-widest text-[#D4AF37]/80 mb-2">
              {SLIDES[currentIndex].label}
            </p>
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start min-h-[72px]">
              {SLIDES[currentIndex].desc}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
              <Link 
                to={SLIDES[currentIndex].href} 
                className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37] px-5 py-2 text-[10px] font-general uppercase tracking-widest text-black font-bold hover:bg-white hover:scale-105 transition-all duration-300"
              >
                <span>Read Case Study</span>
                <LuArrowRight className="text-xs" />
              </Link>
              
              {/* Progress indicators */}
              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleGoTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
