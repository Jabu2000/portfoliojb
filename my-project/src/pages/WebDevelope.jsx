import React from "react";
import WebDevHero from "../sections/WebDevHero";
import WebDevWork from "../sections/WebDevWork";
import transition from "../transition";

const WebDevelope = () => {
  return (
    <div className="contain">
      <WebDevHero />
      <WebDevWork />
    </div>
  );
};

export default transition(WebDevelope)
