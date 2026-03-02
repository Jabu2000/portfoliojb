import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { transition2 } from "../transition";

const NIL = () => {
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
          <h1 className="text-center text-black leading-tight font-semibold text-[40px] sm:text-[80px] md:text-[100px] xl:text-[150px] 2xl:text-[250px] z-20">
            Night in lagos
          </h1>
        </div>

        <div className="lg:sticky sticky-none top-[80px] mix-blend-difference z-10">
          <div className="w-full px-4 sm:pl-[40px] sm:w-[90%] md:w-[70%] xl:w-[40%] text-white 2xl:mt-[90px] xl:mt-[80px]  mt-[50px] gap-4 text-[12px] sm:text-[14px] xl:text-[14px] z-10 flex flex-col">
            <p>
              Night IN Lagos is a bold and visually dynamic website design
              concept created to reflect the vibrant nightlife and cultural
              energy of Lagos, Nigeria. This design was built to represent
              clubs, lounges, social events, and nightlife experiences, blending
              a sleek modern aesthetic with the electric mood of the city after
              dark.
            </p>

            <p>
              The concept was crafted for entertainment lovers, event-goers, and
              tourists — anyone looking to explore and experience the best of
              Lagos at night. The focus was on immersive visuals, smooth layout
              flow, and an engaging interface that invites users to explore.
            </p>

            <p className="mb-2">
              Tools & Technologies Used:
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Figma</strong> – for high-fidelity UI/UX design and
                  interactive prototypes
                </li>
              </ul>
            </p>
            <p className="">
              This is a design-only project, built for creative exploration and
              to showcase interface design capabilities for lifestyle and
              entertainment brands.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full flex flex-col gap-10 sm:gap-[60px] xl:mt-[1vw] mt-[20vw] px-4 sm:px-[40px] pb-[50px]">
          {" "}
          <div className="flex justify-end">
            <img
              src="./NIL/NILwebsitedesign.png"
              className="w-full sm:w-[90%] md:w-[70%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 2"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./NIL/NILwebsitedesign1.png"
              className="w-full sm:w-[90%] md:w-[70%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center text-[24px] sm:text-[32px] md:text-[50px] gap-6 sm:gap-10 font-extrabold mt-[80px] sm:mt-[100px] pb-[80px]">
        <Link
          to="/coconutforlife"
          className="cursor-pointer uppercase hover:text-[#a72608] hover:scale-105 transition duration-300"
        >
          next
        </Link>
      </div>
    </div>
  );
};

export default transition2(NIL);
