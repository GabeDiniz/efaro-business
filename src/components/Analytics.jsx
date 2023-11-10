import React from "react";
import Img from "../assets/temp.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Img} alt="/" />
        <div>
          <p>Data Analytics Dashboard</p>
          <h1>Manage Data Analytics</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem
            inventore, dicta ex voluptate omnis temporibus expedita facere
            dolore similique nam, consequatur impedit veniam dolorum et aliquid
            quo perspiciatis maiores?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
