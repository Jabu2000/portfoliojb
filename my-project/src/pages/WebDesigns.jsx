import React from "react";
import WebDesignHero from "../sections/WebDesignHero";
import WebDesignWork from "../sections/WebDesignWork";
import { transition2 } from "../transition";

const WebDesigns = () => {
  return (
    <div className="contain">
      <WebDesignHero />
      <WebDesignWork />
    </div>
  );
};

export default transition2(WebDesigns)
