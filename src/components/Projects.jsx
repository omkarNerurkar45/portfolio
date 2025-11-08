import React from "react";
import ProjectData from "./ProjectData.json";

const Projects = () => {
  return (
    <section className="bg-[#0f0d11] text-white py-16 px-5 sm:px-10 md:px-20">
      
      <div className="text-center mb-10 w-full md:w-[56vw] m-auto">
        <h1 className="text-3xl sm:text-4xl font-bold p-2">My Projects</h1>
        <div className="h-1 w-24 sm:w-28 mx-auto mt-2 rounded-2xl bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
        <p className="mt-4 text-gray-300 text-sm sm:text-lg">
          🚀 A Glimpse Into My Recent Work
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-7">
        {ProjectData.map((info, index) => (
          <div
            key={index}
            className="bg-[#161616] rounded-2xl p-4 sm:p-6
                       w-full sm:w-[45%] md:w-[30%] lg:w-[25vw]
                       transition-transform duration-300 ease-out
                       hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={info.image}
              alt={info.name}
              className="rounded-lg w-full h-[180px] sm:h-[200px] md:h-[180px] object-cover"
            />
            <h1 className="font-bold text-lg sm:text-xl mt-4">{info.name}</h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">{info.details}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {info.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm bg-[#133235] text-[#1f829b] px-2 py-1 rounded-md border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3 sm:gap-0">
              <a
                href={info.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 sm:py-4 bg-gradient-to-r from-[#1192c9] to-[#7f35dd] rounded-4xl text-sm sm:text-sm font-semibold hover:opacity-90 transition-all duration-500 transform 
                           hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-10px)_scale(1.01)] 
                           hover:shadow-2xs shadow-[#029dc1] text-center"
              >
                Live Demo
              </a>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 sm:py-4 bg-[#2c2c2c] rounded-4xl text-sm sm:text-sm font-semibold hover:bg-[#3a3a3a] transition 
                           hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-10px)_scale(1.01)] 
                           hover:shadow-2xs shadow-[#029dc1] text-center"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
