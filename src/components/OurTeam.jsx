import React from "react";

const OurTeam = () => {
  const teamName = ["Eric", "John", "Gabe"];
  const images = ["img-Eric", "img-John", "img-Gabe"];
  console.log(images);

  return (
    <section className="w-full max-w-[1240px] mx-auto">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
        Our Team
      </h1>
      <div className="grid lg:grid-cols-3">
        {teamName.map((name) => (
          <div>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
