import React from "react";
import {
  FaMailBulk,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className="outro overflow-hidden pl-[80px] lg:pl-[90px] pr-5 pb-[50px]"
    >
      {/* Title */}
      <div className="mt-[50px] mix-blend-difference">
        <h2 className="text-white text-[48px] sm:text-[72px] lg:text-[96px] font-semibold">
          let's talk
        </h2>
      </div>

      {/* Description */}
      <div className="w-full flex justify-end pb-[30px]">
        <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] max-w-sm text-right">
          Let’s play a game. It’s called contact and answer. You contact and
          I’ll answer.
        </p>
      </div>

      {/* Contact Boxes */}
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-0">
        
        {/* Gmail */}
        <a
          href="mailto:joabjabulanilongwe@gmail.com"
          className="w-full sm:w-1/5 text-white flex flex-col justify-between items-start border border-white rounded-tl-xl rounded-bl-xl p-[20px] sm:p-[25px] gap-[60px] sm:gap-[150px]"
        >
          <FaMailBulk className="text-[24px] sm:text-[30px]" />
          <p className="text-[18px] sm:text-[20px]">Gmail</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jabulani-longwe-179442269/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/5 text-white flex flex-col justify-between items-start border border-white sm:border-l-0 p-[20px] sm:p-[25px] gap-[60px] sm:gap-[150px]"
        >
          <FaLinkedin className="text-[24px] sm:text-[30px]" />
          <p className="text-[18px] sm:text-[20px]">LinkedIn</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Jabu2000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/5 text-white flex flex-col justify-between items-start border border-white sm:border-l-0 p-[20px] sm:p-[25px] gap-[60px] sm:gap-[150px]"
        >
          <FaGithub className="text-[24px] sm:text-[30px]" />
          <p className="text-[18px] sm:text-[20px]">GitHub</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/iamjabulani_longwe/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/5 text-white flex flex-col justify-between items-start border border-white sm:border-l-0 rounded-tr-xl rounded-br-xl p-[20px] sm:p-[25px] gap-[60px] sm:gap-[150px]"
        >
          <FaInstagram className="text-[24px] sm:text-[30px]" />
          <p className="text-[18px] sm:text-[20px]">Instagram</p>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between text-white mt-[30px] gap-2 sm:gap-0">
        <div className="flex flex-col text-[14px] sm:text-[16px] gap-4 break-all">
          <p>joabjabulanilongwe@gmail.com</p>
          <p>060 210 1851</p>
        </div>

        <p className="text-[12px] sm:text-[14px] text-right">
          Copyright © 2025 Jabulani Longwe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;