import React from "react";
import Img from "../assets/check.png";

const Info = () => {
  return (
    <section className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px] mx-auto my-4 p-4" src={Img} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-accentLight uppercase font-bold">Our promise</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-blackDark">
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
          <button className="bg-accent text-blackDark w-[200px] rounded-md font-medium my-6 px-6 py-3 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
