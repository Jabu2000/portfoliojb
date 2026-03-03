import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import transition from "../transition";

const Fixitmobile = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <div className="bg-white pl-[60px]">
      {/* Top Dot Decoration */}
      <div className="flex flex-wrap justify-between items-start xl:pt-0 pt-[30px] px-4 sm:px-10 lg:px-[80px] mr-3">
        <div className="w-1/3 sm:w-[15%] flex justify-between text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
          {[...Array(3)].map((_, i) => (
            <p key={`left-dot-${i}`} className="sorts-mill-goudy-regular">
              .
            </p>
          ))}
        </div>
        <div className="w-1/3 sm:w-[40%] flex justify-between items-center text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
          {[...Array(3)].map((_, i) => (
            <p key={`middle-dot-${i}`} className="sorts-mill-goudy-regular">
              .
            </p>
          ))}
        </div>
        <div className="w-1/3 sm:w-[15%] flex justify-between text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
          {[...Array(3)].map((_, i) => (
            <p key={`right-dot-${i}`} className="sorts-mill-goudy-regular">
              .
            </p>
          ))}
        </div>
      </div>

      {/* Sticky Title & Description */}
      <div className="relative w-full ">
        <div className="w-full flex justify-center sm:justify-end items-center pr-4 sm:pr-[20px]">
          <h1 className="text-center text-black leading-tight font-semibold text-[40px] sm:text-[80px] md:text-[100px] xl:text-[160px] 2xl:text-[220px] z-20">
            Fixit Mobile
          </h1>
        </div>
        <div className="lg:sticky sticky-none top-[80px] mix-blend-difference z-10">
          <div className="w-full px-4 sm:pl-[40px] sm:w-[90%] md:w-[70%] xl:w-[40%] text-white 2xl:mt-[90px] xl:mt-[80px]  mt-[50px] gap-4 text-[12px] sm:text-[14px] xl:text-[14px] z-10 flex flex-col">
            <p>
              Fixit Mobile is a responsive web platform designed for a mobile
              repair service, allowing customers to easily browse services,
              request repairs, and connect with technicians. The project focuses
              on clear service presentation, smooth user flow, and a
              mobile-first design to ensure accessibility and convenience across
              all devices.
            </p>

            <p>
              The goal was to create a fast, user-friendly digital experience
              that builds trust while simplifying the repair booking process.
            </p>
            <p className="mb-2">
              Tools & Technologies Used:
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>React</strong>
                </li>
                <li>
                  <strong>Tailwind CSS</strong>
                </li>
                <li>
                  <strong>GSAP</strong>
                </li>
                <li>
                  <strong>Framer Motion</strong>
                </li>
                <li>
                  <strong>Git & GitHub</strong>
                </li>
                <li>
                  <strong>Figma</strong>
                </li>
              </ul>
            </p>

            <Link
              to="https://fixit-mobile-solutions.vercel.app"
              className="text-[16px] sm:text-[18px] md:text-[20px] cursor-pointer underline"
            >
              Click To View Site
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full flex flex-col gap-10 sm:gap-[60px] xl:mt-[1vw] mt-[20vw] px-4 sm:px-[40px] pb-[50px]">
          <div className="flex justify-center">
            <img
              src="./Fixit/fixit_img1.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Fixitmobile 1"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./Fixit/fixit_img2.png"
              className="w-full sm:w-[90%] md:w-[70%] xl:w-[30%] object-cover rounded-2xl border-black border-[2px]"
              alt="Fixitmobile 2"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./Fixit/fixit_img3.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Fixitmobile 3"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./Fixit/fixit_img4.png"
              className="w-full sm:w-[90%] md:w-[70%] xl:w-[30%] object-cover rounded-2xl border-black border-[2px]"
              alt="Fixitmobile 4"
            />
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center text-[24px] sm:text-[32px] md:text-[50px] gap-6 sm:gap-10 font-extrabold mt-[80px] sm:mt-[100px] pb-[80px]">
        <Link
          to="/antidote"
          className="cursor-pointer uppercase hover:text-[#9ead85] hover:scale-105 transition duration-300"
        >
          back
        </Link>

        <Link
          to="/b&b"
          className="cursor-pointer uppercase hover:text-[#a72608] hover:scale-105 transition duration-300"
        >
          next
        </Link>
      </div>
    </div>
  );
};

export default transition(Fixitmobile);
