import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import transition from "../transition";

const BandB = () => {
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
          <h1 className="text-center text-black leading-tight font-semibold text-[40px] sm:text-[80px] md:text-[100px] xl:text-[200px] 2xl:text-[300px] z-20">
            B&B
          </h1>
        </div>
        <div className="lg:sticky sticky-none top-[80px] mix-blend-difference z-10">
          <div className="w-full px-4 sm:pl-[40px] sm:w-[90%] md:w-[70%] xl:w-[40%] text-white 2xl:mt-[90px] xl:mt-[80px]  mt-[50px] gap-4 text-[12px] sm:text-[14px] xl:text-[13px] z-10 flex flex-col">
            <p>
              Beauty and the Best (B&B) is a fully custom-designed website
              created for a client in the beauty and wellness industry. The goal
              of the website was to establish a strong online presence for the
              brand, showcasing their services, products, and passion for
              enhancing natural beauty. Built with both aesthetics and usability
              in mind, the site offers an elegant, modern experience that
              reflects the client’s unique style and professional standards.
            </p>

            <p>
              This project was specifically tailored for beauty professionals
              and clients seeking premium services in skincare, makeup, and
              self-care. The website was created to attract new clients,
              streamline bookings, and build trust through a visually engaging
              and informative online platform.
            </p>

            <p className="mb-2">
              Tools & Technologies Used:
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>React</strong> – for a fast, component-based frontend
                  architecture
                </li>
                <li>
                  <strong>Tailwind CSS</strong> – for responsive, clean, and
                  efficient styling
                </li>
                <li>
                  <strong>GSAP</strong> – to create smooth scroll-based
                  animations and subtle transitions
                </li>
                <li>
                  <strong>Framer Motion</strong> – for engaging interactive
                  elements and fluid motion effects
                </li>
              </ul>
            </p>
            <p className="">
              The end result is a visually refined and responsive website that
              elevates the brand's digital presence and offers a seamless,
              delightful experience for users.
            </p>

            <Link
              to="https://beautyandthebest.vercel.app"
              className="text-[16px] sm:text-[18px] md:text-[20px] cursor-pointer underline"
            >
              Click To View Site
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full flex flex-col gap-10 sm:gap-[60px] xl:mt-[1vw] mt-[20vw] px-4 sm:px-[40px] pb-[50px]">
          {" "}
          <div className="flex justify-end">
            <img
              src="./BandB/B&Bworkimg1.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px] "
              alt="Ayodele Art 1"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./BandB/B&Bworkimg2.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 2"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./BandB/B&Bworkimg3.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./BandB/B&Bworkimg4.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./BandB/B&Bworkimg5.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./BandB/B&Bworkimg6.png"
              className="w-full sm:w-[90%] md:w-[60%] xl:w-[34%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="./BandB/B&BworkM2.png"
              className=" sm:w-[60%] md:w-[30%] xl:w-[14%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./BandB/B&BworkM3.png"
              className=" sm:w-[60%] md:w-[30%] xl:w-[14%] object-cover rounded-2xl border-black border-[2px]"
              alt="Ayodele Art 3"
            />
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center text-[24px] sm:text-[32px] md:text-[50px] gap-6 sm:gap-10 font-extrabold mt-[80px] sm:mt-[100px] pb-[80px]">
        <Link
          to="/fixitmobile"
          className="cursor-pointer uppercase hover:text-[#9ead85] hover:scale-105 transition duration-300"
        >
          back
        </Link>

        <Link
          to="/kkcmaa"
          className="cursor-pointer uppercase hover:text-[#a72608] hover:scale-105 transition duration-300"
        >
          next
        </Link>
      </div>
    </div>
  );
};

export default transition(BandB);
