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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          temporibus?
        </p>
        <div className="flex gap-6 md:w-[75%] mt-6">
          <FaLinkedin size={35} />
          <FaInstagram size={35} />
          <FaFacebookSquare size={35} />
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
