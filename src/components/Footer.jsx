import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          EFaro Business.
        </h1>
        <p className="py-4">
          Contact me on any of these platforms and I will get back to you as
          soon as possible!
        </p>
        <div className="flex gap-6 md:w-[75%] mt-6">
          <a href="https://www.linkedin.com/in/ericfariasdefaro/">
            <FaLinkedin size={35} />
          </a>
          <a href="https://www.instagram.com/ericfaro/">
            <FaInstagram size={35} />
          </a>
          <a href="https://www.google.ca/">
            <FaFacebookSquare size={35} />
          </a>
        </div>
      </div>
      {/* <div className="lg:cols-span-3 flex justify-between">
        <ul>
          <li></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Footer;
