import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WebDevelope from "./pages/WebDevelope";
import WebDesigns from "./pages/WebDesigns";
import Logos from "./pages/Logos";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import AyodeleArt from "./projects/AyodeleArt";
import BandB from "./projects/BandB";
import Coco from "./projects/Coco";
import NIL from "./projects/NIL";
import JbLogo from "./projects/JbLogo";
import Hemisphere from "./projects/Hemisphere";
import KK from "./projects/KK";
import Antidote from "./projects/Antidote";
import Fixitmobile from "./projects/Fixitmobile";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    // expose lenis globally
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);
  return (
    <div>
      <Navbar />
      <ScrollTop />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdevelope" element={<WebDevelope />} />
        <Route path="/webdesigns" element={<WebDesigns />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/ayodele" element={<AyodeleArt />} />
        <Route path="/fixitmobile" element={<Fixitmobile />} />
        <Route path="/antidote" element={<Antidote />} />
        <Route path="/b&b" element={<BandB />} />
        <Route path="/nightinlagos" element={<NIL />} />
        <Route path="/coconutforlife" element={<Coco />} />
        <Route path="/hemisphere" element={<Hemisphere />} />
        <Route path="/jblogo" element={<JbLogo />} />
        <Route path="/kkcmaa" element={<KK />} />
      </Routes>
      <div className="outro">
        <Footer />
      </div>
    </div>
  );
};

export default App;
