import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 py-8 px-4 md:px-10">
        <h1 className="w-full text-3xl font-bold text-accentLight">
          EFaro Business.
        </h1>
        <p className="py-4">
          Contact me on any of these platforms and I will get back to you as
          soon as possible!
        </p>
        <div className="flex gap-6 md:w-[75%] mt-6 text-darkCard">
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
    </footer>
  );
};

export default Footer;
