import React from "react";
import LogoHero from "../sections/LogoHero";
import LogoWork from "../sections/LogoWork";
import { transition1 } from "../transition";

const Logos = () => {
  return (
    <div className="contain">
      <LogoHero />
      <LogoWork />
    </div>
  );
};

export default transition1(Logos)
