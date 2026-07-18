import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PHRASE = "YOUR IDEA DESERVES BETTER";

const Preloader = ({ onComplete }) => {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const overlayRef = useRef(null);
  const flashRef = useRef(null);

  // Typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(PHRASE.slice(0, i));
      if (i === PHRASE.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 68);
    return () => clearInterval(interval);
  }, []);

  // Once typing finishes, run exit transition
  useEffect(() => {
    if (typing) return;

    // short pause, then explode out
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    // cursor blink stops — fade it out
    tl.to(cursorRef.current, { opacity: 0, duration: 0.15 }, "+=0.55")

      // text shoots up and fades
      .to(
        ".preloader-text",
        {
          y: -60,
          opacity: 0,
          duration: 0.35,
          ease: "power3.in",
        },
        "-=0.05"
      )

      // white flash panel slams in from bottom
      .fromTo(
        flashRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        { scaleY: 1, duration: 0.28, ease: "expo.in" },
        "-=0.1"
      )

      // then instantly wipes away upward revealing the site
      .to(flashRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.32,
        ease: "expo.out",
      })

      // black overlay itself slides up and off
      .to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 0.45,
          ease: "expo.inOut",
        },
        "-=0.18"
      );
  }, [typing]);

  return (
    <>
      {/* Main black screen */}
      <div
        ref={overlayRef}
        className="preloader-overlay"
      >
        <p className="preloader-text">
          {displayed}
          <span ref={cursorRef} className="preloader-cursor">
            |
          </span>
        </p>
      </div>

      {/* White flash panel — sits on top of everything during transition */}
      <div ref={flashRef} className="preloader-flash" />
    </>
  );
};

export default Preloader;
