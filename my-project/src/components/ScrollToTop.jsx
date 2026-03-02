import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Optional: Lucide icon for arrow
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-0  z-[999] px-[21px] py-[15px] bg-white mix-blend-difference text-blackshadow-lg transition-opacity duration-500 hover:bg-[#31c5ff] cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={30} className="hover:scale-[1.2] transition duration-300"/>
    </button>
  );
};

export default ScrollToTop;
