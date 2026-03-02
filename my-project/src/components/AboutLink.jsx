import React from "react";
import { Link } from "react-scroll";

const AboutLink = () => {
  return (
    <div className="flex cursor-pointer">
      <Link
        to="about"
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        aria-label="Go to about"
        className="flex text-white font-medium hover:scale-105 transition duration-300"
      >
        About
      </Link>
    </div>
  );
};

export default AboutLink;
