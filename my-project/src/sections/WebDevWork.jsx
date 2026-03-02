import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const WebDevWork = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
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

    const stickySection = sectionRef.current;
    const cardss = cardsRef.current;
    const countContain = countContainRef.current;

    if (!stickySection || cardss.length === 0 || !countContain) return;

    const stickyHeight = window.innerHeight * 7;
    const totalCards = cardss.length;

    ScrollTrigger.create({
      id: "cardTrigger",
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        positionCards(self.progress);
      },
    });
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

      cardss.forEach((card, i) => {
        const normalizedProgress = (totalCards - 1 - i) / totalCards;
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
      <section className="step w-full" ref={sectionRef}>
        <div className="step-counter ml-[80px] lg:mt-[40px] mt-[80px]">
          <div className="counter-title">
            <h1 className="">my work</h1>
          </div>
          <div className="count lg:flex hidden">
            <div className="count-contain" ref={countContainRef}>
              <h1 className="text-[#797979]">Ayodele</h1>
              <h1 className="text-[#797979]">Antidote</h1>
              <h1 className="text-[#797979]">Fixit Mobile</h1>
              <h1 className="text-[#797979]">B&B</h1>
              <h1 className="text-[#797979]">KKCMAA</h1>
            </div>
          </div>
        </div>

        <div className="cardss ">
          <div className="cardd" ref={(el) => (cardsRef.current[0] = el)}>
            <Link
              to="/ayodele "
              className="cardd-img cursor-pointer image-hover-target"
            >
              <img
                src="./Ayo/imgAyo.png"
                className="img-cardd w-full object-cover  border-black border-[2px] rounded-2xl"
              />
            </Link>
          </div>

          <div className="cardd" ref={(el) => (cardsRef.current[1] = el)}>
            <Link
              to="/antidote "
              className="cardd-img cursor-pointer image-hover-target"
            >
              <img
                src="./Antidote/antidote_img1.png"
                className="img-cardd w-full object-cover  border-black border-[2px] rounded-2xl"
              />
            </Link>
          </div>

          <div className="cardd" ref={(el) => (cardsRef.current[2] = el)}>
            <Link
              to="/fixitmobile"
              className="cardd-img cursor-pointer image-hover-target"
            >
              <img
                src="./Fixit/fixit_img1.png"
                className="img-cardd w-full object-cover  border-black border-[2px] rounded-2xl"
              />
            </Link>
          </div>

          <div className="cardd" ref={(el) => (cardsRef.current[3] = el)}>
            <Link
              to="/b&b"
              className="cardd-img image-hover-target cursor-pointer"
            >
              <img
                src="./BandB/B&Bworkimg.png"
                className="img-cardd w-full object-cover border-black border-[2px] rounded-2xl"
              />
            </Link>
          </div>

          <div className="cardd" ref={(el) => (cardsRef.current[4] = el)}>
            <Link
              to="/kkcmaa"
              className="cardd-img image-hover-target cursor-pointer"
            >
              <img
                src="./KK/KKdesignimg.png"
                className="img-cardd w-full object-cover border-black border-[2px] rounded-2xl"
              />
            </Link>
          </div>

          <div className="cardd" ref={(el) => (cardsRef.current[5] = el)}></div>
          <div className="cardd empty"></div>
          <div className="cardd empty"></div>
        </div>
      </section>

      <div className=" px-[100px] lg:px-0 mt-20 mb-24 flex flex-col lg:flex-row justify-center items-center gap-6">
        <Link
          to="/logos"
          aria-label="Go to contact"
          className="w-full lg:w-[200px] h-[60px] flex justify-center items-center rounded-3xl text-white font-medium text-lg bg-[#a72608] hover:bg-[#ff9078] px-6 py-2 hover:scale-105 transition duration-300"
        >
          Logos
        </Link>
        <Link
          to="/webdesigns"
          aria-label="Go to contact"
          className="w-full lg:w-[200px] h-[60px] flex justify-center items-center rounded-3xl text-white font-medium text-lg bg-[#9ead85] hover:bg-[#94998d] px-6 py-2 hover:scale-105 transition duration-300"
        >
          Web Designs
        </Link>
      </div>
    </div>
  );
};

export default WebDevWork;
