import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaInstagram,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { Link, useLocation } from "react-router-dom";
import ContactLink from "./ContactLink";
import AboutLink from "./AboutLink";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownWrapperRef = useRef(null);
  const location = useLocation();

  // Animate nav items in
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "hop" } });

    tl.fromTo(
      [".nav-logo", ".nav-menu-icon", ".nav-contact-btn"],
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.25,
        stagger: 0.1,
      },
    );
  }, []);

  // Animate dropdown open/close (cleaned up)
  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;

    if (showDropdown) {
      gsap.killTweensOf(el);
      gsap.set(el, { display: "block" });

      gsap.fromTo(
        el,
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
      );
    } else {
      gsap.killTweensOf(el);
      gsap.to(el, {
        opacity: 0,
        y: -15,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(el, { display: "none" });
        },
      });
    }
  }, [showDropdown]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed z-[100] border-l-[1px] ml-[72px] border-white mix-blend-difference h-full" />

      <div className="fixed z-[99] border-b-[1px] py-3 backdrop-blur-sm border-white mix-blend-difference w-full flex items-center">
        <Link
          to="/"
          className="nav-logo flex justify-start cursor-pointer absolute bg-[#ffffff] p-[22px]"
        >
          <img
            src="/Jblogo.png"
            alt="Logo"
            className="hover:scale-[1.2] transition duration-300"
          />
        </Link>

        <div className="w-full flex justify-end items-center  gap-6 mr-3">
          <AboutLink />
          <div className="nav-menu-icon flex gap-6">
            {/* Work Dropdown */}
            <div
              className="relative"
              ref={dropdownWrapperRef}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                aria-label="Work dropdown"
                className={`flex text-white font-medium hover:scale-105 transition duration-300 ${
                  showDropdown || location.pathname.startsWith("/work")
                    ? "text-[#31c5ff]"
                    : "hover:text-[#31c5ff]"
                }`}
              >
                Work
              </button>

              <div
                ref={dropdownRef}
                className=" w-[180px] absolute top-full mt-5 bg-[#ffffff] border border-[#000000] rounded-md shadow-lg z-10 hidden"
              >
                <Link
                  to="/webdevelope"
                  className="block px-4 py-2 text-black hover:text-white hover:bg-[#090c02] transition"
                  onClick={() => setShowDropdown(false)}
                >
                  Web Developed
                </Link>

                <Link
                  to="/logos"
                  className="block px-4 py-2 text-black hover:text-white hover:bg-[#a72608] transition"
                  onClick={() => setShowDropdown(false)}
                >
                  Logos
                </Link>

                <Link
                  to="/webdesigns"
                  className="block px-4 py-2 text-black hover:text-white hover:bg-[#9ead85] transition"
                  onClick={() => setShowDropdown(false)}
                >
                  Web Designs
                </Link>
              </div>
            </div>
          </div>

          <ContactLink />
        </div>
      </div>
    </>
  );
};

export default Navbar;
