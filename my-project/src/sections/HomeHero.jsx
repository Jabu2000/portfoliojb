import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HeroName from "../components/HeroName";
import { Link } from "react-router-dom";
import {
  CardSelecter,
  CardSelecter1,
  CardSelecter2,
} from "../components/CardSelecter";
import About from "./About";

const HomeHero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const smoothStep = (p) => p * p * (3 - 2 * p);

    // HERO SECTION ANIMATION
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "100% top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = smoothStep(self.progress);

        const opacity = gsap.utils.interpolate(1, 0.5, progress);
        gsap.set(".hero-cards", { opacity });

        ["#hero-card-1", "#hero-card-2", "#hero-card-3"].forEach(
          (cardId, index) => {
            const delay = index * 0.9;
            const cardProgress = gsap.utils.clamp(
              0,
              1,
              (progress - delay * 0.1) / (1 - delay * 0.1),
            );

            const y = gsap.utils.interpolate(
              "0%",
              "250%",
              smoothStep(cardProgress),
            );
            const scale = gsap.utils.interpolate(
              1,
              0.75,
              smoothStep(cardProgress),
            );
            let x = "0%",
              rotation = 0;

            if (index === 0) {
              x = gsap.utils.interpolate("0%", "90%", smoothStep(cardProgress));
              rotation = gsap.utils.interpolate(
                0,
                -15,
                smoothStep(cardProgress),
              );
            } else if (index === 2) {
              x = gsap.utils.interpolate(
                "0%",
                "-90%",
                smoothStep(cardProgress),
              );
              rotation = gsap.utils.interpolate(
                0,
                15,
                smoothStep(cardProgress),
              );
            }

            gsap.set(cardId, { y, x, rotation, scale });
          },
        );
      },
    });

    // SERVICES SECTION PINNING
    const servicesEnd = window.innerHeight * 4;
    ScrollTrigger.create({
      trigger: ".services",
      start: "top top",
      end: `+=${servicesEnd}`,
      pin: ".services",
      pinSpacing: true,
    });

    ScrollTrigger.create({
      trigger: ".services",
      start: "top top",
      end: `+=${servicesEnd}`,
      onLeave: () => {
        const section = document.querySelector(".services");
        const rect = section.getBoundingClientRect();
        const top = window.pageYOffset + rect.top;

        gsap.set(".cards", {
          position: "absolute",
          top,
          left: 0,
          width: "100nw",
          height: "100vh",
        });
      },
      onEnterBack: () => {
        gsap.set(".cards", {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        });
      },
    });

    // SERVICES CARDS FLIP ANIMATION
    ScrollTrigger.create({
      trigger: ".services",
      start: "top bottom",
      end: `+=${servicesEnd}`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);

        gsap.set(".services-header", {
          y: gsap.utils.interpolate("100%", "0%", smoothStep(headerProgress)),
        });

        ["#card-1", "#card-2", "#card-3"].forEach((cardId, index) => {
          const delay = index * 0.5;
          const cardProgress = gsap.utils.clamp(
            0,
            1,
            (progress - delay * 0.1) / (0.9 - delay * 0.1),
          );

          const el = document.querySelector(cardId);
          const innerCard = el?.querySelector(".flip-card-inner");

          // Card position
          let y = "0%";
          if (cardProgress < 0.4) {
            y = gsap.utils.interpolate(
              "-100%",
              "50%",
              smoothStep(cardProgress / 0.4),
            );
          } else if (cardProgress < 0.6) {
            y = gsap.utils.interpolate(
              "50%",
              "0%",
              smoothStep((cardProgress - 0.4) / 0.2),
            );
          }

          // Scale
          let scale = 1;
          if (cardProgress < 0.4) {
            scale = gsap.utils.interpolate(
              0.25,
              0.75,
              smoothStep(cardProgress / 0.4),
            );
          } else if (cardProgress < 0.6) {
            scale = gsap.utils.interpolate(
              0.75,
              1,
              smoothStep((cardProgress - 0.4) / 0.2),
            );
          }

          // Opacity
          const opacity =
            cardProgress < 0.2 ? smoothStep(cardProgress / 0.2) : 1;

          // X, rotate, rotationY
          let x = "0%",
            rotate = 0,
            rotationY = 0;

          const baseX = index === 0 ? "100%" : index === 2 ? "-100%" : "0%";
          const baseRotate = index === 0 ? -5 : index === 2 ? 5 : 0;

          if (cardProgress < 0.6) {
            x = baseX;
            rotate = baseRotate;
          } else {
            const normalized = (cardProgress - 0.6) / 0.4;
            x = gsap.utils.interpolate(baseX, "0%", smoothStep(normalized));
            rotate = gsap.utils.interpolate(
              baseRotate,
              0,
              smoothStep(normalized),
            );
            rotationY = smoothStep(normalized) * 180;
          }

          gsap.set(cardId, { opacity, y, x, rotate, scale });
          if (innerCard) {
            gsap.set(innerCard, { rotateY: rotationY });
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <section className="hero">
        <HeroName />
        <div className="hero-cards md:flex hidden lg:mt-0 mt-[100px] ">
          <Link
            to="/webdevelope"
            className="card image-hover-target6 md:h-fit h-[80px] text-white cursor-pointer hover:scale-105 transition duration-300 z-[100]"
            id="hero-card-1"
          >
            <div className="card-title items-center ">
              <span className="sorts-mill-goudy-regular text-[40px]">.</span>
              <span>{""} Developed</span>
            </div>
          </Link>
          <Link
            to="/logos"
            className="card image-hover-target6 md:h-fit h-[85px] text-white cursor-pointer hover:scale-105 transition duration-300 z-[100]"
            id="hero-card-2"
          >
            <div className="card-title items-center ">
              <span>Logo {""}</span>
              <span className="sorts-mill-goudy-regular text-[40px]">.</span>
            </div>
          </Link>
          <Link
            to="/webdesigns"
            className="card image-hover-target6 md:h-fit h-[80px] text-white cursor-pointer hover:scale-105 transition duration-300 z-[100]"
            id="hero-card-3"
          >
            <div className="card-title items-center ">
              <span>{""} Design</span>
              <span className="sorts-mill-goudy-regular text-[40px]">.</span>
            </div>
          </Link>
        </div>
      </section>

      <div className="about">
        <About />
      </div>

      <section className="services mix-blend-difference">
        <div className="services-header 2xl:text-[32px] lg:text-[25px] text-[20px] font-medium">
          <h3 className="text-white ">my work</h3>
          <h3 className="text-[#797979]">portfolio</h3>
        </div>
      </section>

      <section className="cards overflow-hidden">
        <div className="cards-container">
          <div className="card" id="card-1">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Link
                    to="/webdevelope"
                    className="card-title image-hover-target6 text-white items-center cursor-pointer z-[60]"
                  >
                    <span>Developed</span>
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                  </Link>
                  <Link
                    to="/webdevelope"
                    className="card-title image-hover-target6 text-white items-center cursor-pointer z-[60]"
                  >
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                    <span>Developed</span>
                  </Link>
                </div>
                <div className="flip-card-back">
                  <div className="card-title text-white items-center">
                    <span>Developed</span>
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                  </div>
                  <CardSelecter />
                  <div className="card-title text-white items-center">
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                    <span>Developed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card " id="card-2">
            <div className="card-wrapper cursor-pointer">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title text-white items-center">
                    <span>Logo</span>
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                  </div>
                  <div className="card-title text-white items-center">
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                    <span>Logo</span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <Link
                    to="/logos"
                    className="card-title image-hover-target6 text-white items-center cursor-pointer z-[60]"
                  >
                    <span>Logo</span>
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                  </Link>
                  <CardSelecter1 />
                  <Link
                    to="/logos"
                    className="card-title image-hover-target6 text-white items-center cursor-pointer z-[60]"
                  >
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                    <span>Logo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card " id="card-3">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-title text-white items-center">
                    <span>Design</span>
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                  </div>
                  <div className="card-title text-white items-center">
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                    <span>Design</span>
                  </div>
                </div>
                <div className="flip-card-back">
                  <Link
                    to="/webdesigns"
                    className="card-title image-hover-target6 text-white items-center cursor-pointer z-[60]"
                  >
                    <span>Design</span>
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                  </Link>
                  <CardSelecter2 />
                  <Link
                    to="/webdesigns"
                    className="card-title image-hover-target6 text-white items-center cursor-pointer z-[60]"
                  >
                    <span className="sorts-mill-goudy-regular text-[40px]">
                      .
                    </span>
                    <span>Design</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
