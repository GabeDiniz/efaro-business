import React from "react";
import Img from "../assets/check.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px] mx-auto my-4 p-4" src={Img} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">Our promise</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Satisfaction Guaranteed
          </h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem
            inventore, dicta ex voluptate omnis temporibus expedita facere
            dolore similique nam, consequatur impedit veniam dolorum et aliquid
            quo perspiciatis maiores?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
