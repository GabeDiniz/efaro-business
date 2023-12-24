import React from "react";
import teamMember1 from "../assets/temp.JPG";

const OurTeam = () => {
  const teamName = [
    "Eric Faro",
    "John Doe",
    "Gabe Diniz",
    "Robert Downey",
    "Jonny Fisher",
    "Chris Touble",
  ];
  const position = [
    "President",
    "Vice President",
    "Event Coordinator",
    "Onsite Operator",
    "Onsite Operator",
    "Onsite Operator",
  ];

  return (
    <section className="w-full bg-gradient-to-t from-blue-950 to-back">
      <div className="max-w-[1240px] mx-auto py-8 px-4 md:px-10">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-white">
          Our Team
        </h1>
        <div className="grid md:grid-cols-3">
          {/* Map each Member */}
          {teamName.map((name, index) => (
            <div key={index} className="flex items-center my-6">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full"
                src={teamMember1}
                alt="teamMember"
              />
              <div className="flex flex-col ml-4 text-white">
                <h1 className="md:text-2xl sm:text-xl text-lg font-bold">
                  {name}
                </h1>
                <h2 className="">{position[index]}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
