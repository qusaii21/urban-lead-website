import { useState } from "react";
import Storytelling from "./components/Storytelling";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import GlobalReach from "./components/GlobalReach";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [showSite, setShowSite] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
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
        <Hero preloaderDone={preloaderDone} />
        <Storytelling />
        <Features />
        <GlobalReach />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;