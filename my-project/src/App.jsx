import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WebDevelope from "./pages/WebDevelope";
import WebDesigns from "./pages/WebDesigns";
import Logos from "./pages/Logos";
import ScrollToTop from "./components/ScrollToTop";
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

const App = () => {
  return (
    <div>
      <Navbar />
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
