import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const ContactLink = () => {
  return (
    <div className="flex cursor-pointer justify-end items-center gap-2 rounded-3xl font-normal text-[14px] bg-[#ffffff] hover:bg-[#31c5ff] px-6 py-2 hover:scale-105 transition duration-300">
      <FaArrowRight className="text-black" />
      <Link
        to="contact"
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        aria-label="Go to contact"
        className="flex text-black font-medium"
      >
        Contact
      </Link>
    </div>
  );
};

export default ContactLink;
