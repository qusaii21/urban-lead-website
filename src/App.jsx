import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/social-media-marketting" element={<CreativeGrowth />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
