import React from "react";
import { CgFramer } from "react-icons/cg";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobe } from "react-icons/si";

const About = () => {
  return (
    <div id="about">
      <div className="about md:hidden pl-[80px] bg-black pr-[20px] text-white 2xl:pt-[100px] pt-[50px] pb-[60px] flex flex-col items-start z-[50]">
        {/* Section Heading */}
        <div className="2xl:mb-10 pl-[10px]">
          <h3 className="2xl:text-[32px] lg:text-[25px] text-[20px] font-medium text-white leading-tight">
            get to know me
          </h3>
          <h3 className="2xl:text-[32px] lg:text-[25px] text-[20px] font-medium text-[#797979] leading-tight">
            about
          </h3>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto pl-[10px] w-full">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col pt-10 2xl:gap-6 gap-2 text-sm sm:text-base 2xl:text-xl xl:text-[14px]">
              <p>
                I graduated from the IIE Rosebank College after completing a
                Bachelor of IT in Business Systems.
              </p>
              <p>
                My journey into web developer/designer began with a passion for
                art and tech. I find inspiration in the creative arts that fuel
                my designs. This fusion of technical skills and artistic
                sensibility allows me to create digital experiences that are
                both functional and aesthetically pleasing.
              </p>
              <p>
                When I'm not coding, designing or learning new tech, you'll find
                me exploring art galleries, watching football or anime, or
                losing myself in a game. I guess I’m just a guy.
              </p>
            </div>

            {/* Tech Icons */}
            <div className="mt-[45px] grid grid-cols-4 sm:grid-cols-6 gap-4 justify-items-center ">
              <div className="flex flex-col justify-center items-center">
                <FaHtml5 className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaCss3 className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaJs className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">JavaScript</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaReact className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">React</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaGithub className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">GitHub</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaNodeJs className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Node.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <RiTailwindCssFill className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Tailwind CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <RiNextjsLine className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Next.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <CgFramer className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Framer Motion</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaFigma className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Figma</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <SiAdobe className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Adobe</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[25px] 2xl:text-[20px] font-bold">UI/UX</p>
              </div>
            </div>
          </div>

          {/* Image Section (Visible only on lg and up) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <img
              src="/JbImg.jpg"
              alt="Jabulani"
              className="rounded-2xl w-2/3 sm:w-1/2 lg:w-[55%] 2xl:w-[60%]"
            />
          </div>
        </div>
      </div>

      <section className="about hidden pl-[80px] bg-black  pr-[20px] text-white 2xl:pt-[100px] pt-[50px] pb-[60px] md:flex flex-col items-start z-[50]">
        {/* Section Heading */}
        <div className="about 2xl:mb-10 pl-[10px]">
          <h3 className="2xl:text-[32px] lg:text-[25px] text-[20px] font-medium text-white leading-tight">
            get to know me
          </h3>
          <h3 className="2xl:text-[32px] lg:text-[25px] text-[20px] font-medium text-[#797979] leading-tight">
            about
          </h3>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto pl-[10px] w-full">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col 2xl:gap-6 gap-2 text-sm sm:text-base 2xl:text-xl xl:text-[14px]">
              <p>
                I graduated from the IIE Rosebank College after completing a
                Bachelor of IT in Business Systems.
              </p>
              <p>
                My journey into web developer/designer began with a passion for
                art and tech. I find inspiration in the creative arts that fuel
                my designs. This fusion of technical skills and artistic
                sensibility allows me to create digital experiences that are
                both functional and aesthetically pleasing.
              </p>
              <p>
                When I'm not coding, designing or learning new tech, you'll find
                me exploring art galleries, watching football or anime, or
                losing myself in a game. I guess I’m just a guy.
              </p>
            </div>

            {/* Tech Icons */}
            <div className="mt-[45px] grid grid-cols-4 sm:grid-cols-6 gap-4 justify-items-center ">
              <div className="flex flex-col justify-center items-center">
                <FaHtml5 className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaCss3 className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaJs className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">JavaScript</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaReact className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">React</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaGithub className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">GitHub</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaNodeJs className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Node.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <RiTailwindCssFill className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Tailwind CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <RiNextjsLine className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Next.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <CgFramer className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Framer Motion</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaFigma className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Figma</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <SiAdobe className="text-[25px] 2xl:text-[35px]" />
                <p className="text-center">Adobe</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[25px] 2xl:text-[20px] font-bold">UI/UX</p>
              </div>
            </div>
          </div>

          {/* Image Section (Visible only on lg and up) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <img
              src="/JbImg.jpg"
              alt="Jabulani"
              className="rounded-2xl w-2/3 sm:w-1/2 lg:w-[55%] 2xl:w-[60%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
