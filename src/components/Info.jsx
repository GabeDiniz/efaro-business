import React from "react";
import Img from "../assets/check.png";

const Info = () => {
  return (
    <section className="w-full py-16  text-white bg-back">
      <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center md:flex-nowrap">
        <img className="w-[300px] h-[300px] my-4 mx-10 p-4" src={Img} alt="/" />
        <div className="flex flex-col justify-center px-10">
          <p className="text-accentLight uppercase font-bold">Our promise</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Satisfaction Guaranteed
          </h1>
          <p className="">
            At Student Works, customer satisfaction is at the heart of our
            mission. We are dedicated to ensuring that every interaction with
            our products or services exceeds your expectations. Our commitment
            to quality, personalized attention, and continuous improvement is
            the foundation of our guarantee to provide you with an exceptional
            experience. Your satisfaction is not just a goal; it's our promise,
            and we stand firmly behind it.
          </p>
          {/* <button className="bg-accent text-blackDark w-[200px] rounded-md font-medium my-6 px-6 py-3 mx-auto md:mx-0">
            Get Started
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Info;
