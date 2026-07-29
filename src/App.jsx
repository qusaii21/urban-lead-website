import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/Navbar";
import Preloader from "./components/Preloader";

// Pages
import Hero from "./components/Hero";
import Storytelling from "./components/Storytelling";
import Features from "./components/Features";
import GlobalReach from "./components/GlobalReach";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WebDevelopment from "./pages/WebDevelopment";
import CreativeGrowth from "./pages/CreativeGrowth";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CrmAutomation from "./pages/CrmAutomation";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudy53Acres from "./pages/CaseStudy53Acres";
import CaseStudyAurora from "./pages/CaseStudyAurora";

/* ── Scroll To Top Helper ───────────────────────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* ── Home page assembled inline ─────────────────────────────── */
const Home = ({ preloaderDone }) => (
  <>
    <Hero preloaderDone={preloaderDone} />
    <Storytelling />
    <Features />
    <GlobalReach />
    <Story />
    <Contact />
    <Footer />
  </>
);

/* ── App shell ───────────────────────────────────────────────── */
function App() {
  const [showSite, setShowSite] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!preloaderDone && (
        <Preloader
          onComplete={() => {
            setPreloaderDone(true);
            setShowSite(true);
          }}
        />
      )}

      <main
        className="relative min-h-screen w-screen"
        style={{
          overflowX: "clip",
          opacity: showSite ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: showSite ? "auto" : "none",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home preloaderDone={preloaderDone} />} />
          <Route path="/services/development" element={<WebDevelopment />} />
          <Route path="/services/social-media-marketting" element={<CreativeGrowth />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/crm-automation" element={<CrmAutomation />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/53-acres" element={<CaseStudy53Acres />} />
          <Route path="/case-studies/aurora-textiles" element={<CaseStudyAurora />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
