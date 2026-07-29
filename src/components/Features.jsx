import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, href }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const pill = (
    <div
      ref={hoverButtonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsxPill(href)}
    >
      {/* Radial gradient hover effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: hoverOpacity,
          background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
        }}
      />
      <TiLocationArrow className="relative z-20" />
      <p className="relative z-20">{href ? "view service" : "coming soon"}</p>
    </div>
  );

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (href ? <Link to={href}>{pill}</Link> : pill)}
      </div>
    </div>
  );
};

// Coming-soon pill stays dim; a real "view service" pill is bright and inviting
const clsxPill = (href) =>
  href
    ? "border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white transition-colors hover:border-white/40"
    : "border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20";

const Features = () => (
  <section className="bg-black pb-52 pt-24">
    <div className="container mx-auto px-3 md:px-10">

      {/* Section Title */}
      <div className="mb-16">
        <p className="font-general text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
          Explore Our Capabilities
        </p>
        <h2 className="special-font font-zentry text-5xl md:text-7xl font-black text-white uppercase leading-[0.8] tracking-tighter">
          Our Services
        </h2>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              web dev<b>e</b>lopme<b>n</b>t
            </>
          }
          description="High-performance websites, custom web apps, headless architectures, and lightning-fast speed optimization built to scale."
          isComingSoon
          href="/services/development"
        />
      </BentoTilt>

      <div className="flex flex-col w-full gap-7 h-auto md:grid md:grid-cols-2 md:grid-rows-3 md:gap-7 md:h-[135vh]">
        <BentoTilt className="bento-tilt_1 h-96 md:h-full row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                app dev<b>e</b>lopme<b>n</b>t
              </>
            }
            description="Native iOS & Android mobile applications built using Swift, Kotlin, Flutter, and React Native for modern mobile users."
            isComingSoon
            href="/services/development"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 h-96 md:h-full row-span-1 ms-0 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                digit<b>a</b>l mark<b>e</b>ting
              </>
            }
            description="Hyper-targeted campaigns, advanced search engine optimization (SEO), and data-driven marketing flows that scale customer acquisition."
            isComingSoon
            href="/services/social-media-marketting"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 h-96 md:h-full me-0 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                br<b>a</b>nding
              </>
            }
            description="Visual identity systems, logotypes, strategy guidelines, and premium design collateral built to leave a permanent mark."
            isComingSoon
            href="/services/social-media-marketting"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 h-96 md:h-full">
          <Link to="/services/crm-automation" className="flex size-full flex-col justify-between bg-[#dfdff0] p-5 text-black hover:bg-[#D4AF37] transition-all duration-500 pointer-events-auto rounded-md">
            <div>
              <h1 className="bento-title special-font max-w-64">
                Cr<b>m</b>s & aut<b>o</b>mati<b>o</b>n
              </h1>
              <p className="mt-3 max-w-64 text-xs font-robert-regular text-black/70">
                Automate sales funnels, link Salesforce & HubSpot databases, and eliminate repetitive manual tasks.
              </p>
            </div>

            <TiLocationArrow className="m-5 scale-[4] self-end text-black" />
          </Link>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 h-96 md:h-full">
          <BentoCard
            src="videos/feature-5.mp4"
            title={
              <>
                soci<b>a</b>l str<b>a</b>t<b>e</b>gy
              </>
            }
            description="Viral organic reels, creator marketing partnerships, visual content studio production, and social audience scaling."
            isComingSoon
            href="/services/social-media-marketting"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;