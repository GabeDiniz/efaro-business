import React from "react";
import teamMember1 from "../assets/temp.JPG";

const OurTeam = () => {
  const teamName = ["Eric Faro", "John Doe", "Gabe Diniz"];
  const position = ["President", "Vice President", "Event Coordinator"];
  const images = ["img-Eric", "img-John", "img-Gabe"];
  console.log(images);

  return (
    <section className="w-full max-w-[1240px] mx-auto">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
        Our Team
      </h1>
      <div className="grid sm:grid-cols-3">
        {/* Map each Member */}
        {teamName.map((name, index) => (
          <div className="flex items-center">
            <img
              className="w-[100px] h-[100px] object-cover rounded-full"
              src={teamMember1}
              alt="teamMember"
            />
            <div className="flex flex-col">
              <h1>{name}</h1>
              <h1>{position[index]}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
