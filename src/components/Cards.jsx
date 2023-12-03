import React from "react";
import Single from "../assets/user_icon.png";
import Double from "../assets/user_icon.png";
import Triple from "../assets/user_icon.png";

const Cards = () => {
  // Repeating Elements
  const Service = (
    <h2 className="text-2xl font-bold text-center py-8">Service</h2>
  );

  return (
    <section className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* CARD 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 pb-6 my-4 rounded-xl hover:scale-105 duration-300">
          <img
            className="w-16 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          {Service}
          <p className="text-center text-4xl font-bold">Gutter</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Small: $300</p>
            <p className="py-2 border-b mx-8">Avg: $1000</p>
            <p className="py-2 mx-8">Large: $3000</p>
          </div>
          {/* <button className="bg-accentLight w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
            Get Quote
          </button> */}
        </div>
        {/* CARD 2 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-xl hover:scale-105 duration-300">
          <img
            className="w-16 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          {Service}
          <p className="text-center text-4xl font-bold">Window</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Small: $300</p>
            <p className="py-2 border-b mx-8">Avg: $1000</p>
            <p className="py-2 mx-8">Large: $3000</p>
          </div>
          {/* <button className="bg-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-accent">
            Get Quote
          </button> */}
        </div>
        {/* CARD 3 */}
        <div className="w-full shadow-xl flex flex-col p-4 pb-6 my-4 rounded-xl hover:scale-105 duration-300">
          <img
            className="w-16 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          {Service}
          <p className="text-center text-4xl font-bold">Eavestrough</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Small: $300</p>
            <p className="py-2 border-b mx-8">Avg: $1000</p>
            <p className="py-2 mx-8">Large: $3000</p>
          </div>
          {/* <button className="bg-accentLight w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
            Get Quote
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Cards;
