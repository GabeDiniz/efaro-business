import React from "react";
import Typed from "react-typed";

const Hero = () => {
  const handleEstimateButton = () => {
    const email = "efaro@hotmail.com";
    const subject = "EFBusiness Estimate Booking";
    const body = "Hi, I would like to book an estimate for...";

    const mailTo = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailTo;
  };

  return (
    <section className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-lg md:text-xl font-bold p-2">
          Student Works Management Program
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
          EF Lt. providing
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            the best cleaning for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Windows", "Gutters", "Eavestrough"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Let us clean your home for you this summer.
        </p>
        <button
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black"
          onClick={handleEstimateButton}
        >
          FREE ESTIMATE
        </button>
      </div>
    </section>
  );
};

export default Hero;
