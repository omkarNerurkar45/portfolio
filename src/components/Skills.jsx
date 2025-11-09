import React from "react";
import TempApi from "../components/TempApi.json";

const Skills = () => {
  return (
    <section className="bg-[#0f0d11] text-white py-20 px-5 sm:px-10 md:px-20">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold">My Skills</h1>
        <div className="h-1 w-24 sm:w-28 mx-auto mt-2 rounded-2xl bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
      </div>

      
      <div className="text-center mb-10">
        <h2 className="text-base sm:text-lg md:text-xl">
          Technologies and tools I use to bring ideas to life
        </h2>
      </div>

      
      <div className="flex flex-wrap justify-center gap-6">
        {TempApi.map((skill, index) => (
          <div
            key={index}
            className="bg-[#161616] rounded-2xl flex flex-col items-center justify-center text-center
                       p-5 sm:p-6 md:p-8
                       h-[220px] sm:h-[250px] md:h-[12vw]
                       w-[90%] sm:w-[45%] md:w-[30vw] lg:w-[18vw]
                       border border-transparent cursor-pointer
                       transition-all duration-500
                       hover:scale-105
                       md:hover:[transform:rotateY(10deg)_rotateX(10deg)_translateY(-10px)_scale(1.05)] 
             hover:shadow-lg shadow-[#029dc1]"
          >
            <img
              className="h-14 sm:h-20 md:h-[3vw]"
              src={`img/${skill.name}.png`}
              alt={skill.name}
            />
            <h1 className="font-bold text-lg sm:text-xl md:text-[20px] pt-2">{skill.name}</h1>
            <p className="text-sm sm:text-base md:text-[16px] pt-2">{skill.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
