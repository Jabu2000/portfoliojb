import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const WebDesignHero = () => {
  const cardsRef = useRef([]);
  const starRef = useRef([]);
  const countContainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    const cardss = cardsRef.current;
    const star = starRef.current;
    const countContain = countContainRef.current;

    const totalCards = cardss.length;
    const totalStars = star.length;

    const getRadius = () => {
      return window.innerWidth < 900
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5;
    };

    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    function positionCards(progress = 0) {
      const radius = getRadius();
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (progress * totalTravel - 1) * 0.75;

      star.forEach((card, i) => {
        const normalizedProgress = (totalStars - 1 - i) / totalStars;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x: x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: "center center",
        });
      });
    }

    positionCards(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardss.indexOf(entry.target);
            if (cardIndex !== -1) {
              const targetY = 150 - cardIndex * 150;
              gsap.to(countContain, {
                y: targetY,
                duration: 0.3,
                ease: "power1.out",
                overwrite: true,
              });
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardss.forEach((card) => observer.observe(card));
    window.addEventListener("resize", () => positionCards(0));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  return (
    <div className="">
      <div className="intro mt-[60px] ml-[73px] h-[50vh] overflow-hidden  border-black border-b-[1px]">
        <h1 className="absolute w-full h-[50vh] flex justify-center items-center text-center pr-[10%] md:pr-0 2xl:text-[245px] lg:text-[160px] text-[80px] md:leading-[120px] leading-[90px] text-[#9ead85] font-semibold ">
          web designs
        </h1>
        <div className="mix-blend-difference flex flex-col text-white leading-[30px]">
         <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div> 
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px] "
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">
                  .
                </p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
          <div className="flex mr-8 md:mr-3 justify-between">
            {[...Array(70)].map((_, i) => (
              <div
                className="flex justify-between text-[50px]"
                key={i}
                ref={(el) => (starRef.current[i] = el)}
              >
                <p className="sorts-mill-goudy-regular text-white hover:scale-150 transition duration-300">.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignHero;
