import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <section className="text-white bg-gradient-to-t from-back to-blue-950">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-accentLight text-lg md:text-xl font-bold p-2">
          Student Works Management Program
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
          EFaro providing
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            the best cleaning for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Windows", "Gutters", "Eavestrough"]}
            typeSpeed={120}
            backSpeed={60}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Let us brighten your home this summer.
        </p>
        <a
          className="bg-accent hover:bg-accentLight duration-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black"
          href="#contactMe"
        >
          FREE ESTIMATE
        </a>
      </div>
    </section>
  );
};

export default Hero;
