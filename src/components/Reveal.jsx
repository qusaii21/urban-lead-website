import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal — wraps children and animates them in when they enter the viewport.
 *
 * Props:
 *   delay     – stagger offset in seconds  (default 0)
 *   y         – vertical travel distance in px (default 32)
 *   className – extra classes on the wrapper div
 *   children
 */
const Reveal = ({ children, delay = 0, y = 32, className = "" }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
