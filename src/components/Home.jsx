import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  const btnResume = () => {
    // ✅ Use PDF from the public folder
    const pdfUrl = "/omkarNerurkar_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "omkarNerurkar_resume.pdf";
    link.click();
  };

  return (
    <section
      id="Home"
      className="bg-gradient-to-r from-[#0e1821] to-[#130a1b] text-white min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-10 overflow-hidden"
    >
      
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-[1300px] gap-12">

        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 animate-fadeIn">
          <h1 className="text-[#215abc] text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 lg:mt-0">
            👋 Hello, I'm
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 leading-tight">
            Omkar{" "}
            <span className="bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4] bg-clip-text text-transparent">
              Nerurkar
            </span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-3 text-gray-200">
            Frontend Developer & React Enthusiast
          </h2>

          <p className="text-sm sm:text-base md:text-lg mt-5 leading-relaxed font-extralight text-gray-300 max-w-md">
            I create beautiful, functional, and responsive web experiences using
            modern technologies. Passionate about clean code and user-centric
            design.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-5 mt-8 w-full sm:w-auto justify-center lg:justify-start">
            <button className="cursor-pointer font-bold rounded-3xl px-8 py-3 bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4] shadow-md shadow-[#029dc1] hover:opacity-90 transition duration-300">
              <Link to="Projects" smooth={true} duration={700} offset={-80}>
                View My Work
              </Link>
            </button>

            <button
              className="cursor-pointer font-bold border-2 border-[#1c96ac] text-[#1c96ac] rounded-3xl px-8 py-3 hover:text-white hover:bg-[#1c96ac] transition duration-500 shadow-md shadow-[#1c96ac]"
              onClick={btnResume}
            >
              Download CV
            </button>
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-16 animate-fadeInUp">
          <div className="rounded-full p-[3px] bg-gradient-to-b from-[#4961d4] to-[#7f35dd] 
            h-[55vw] sm:h-[35vw] md:h-[25vw] lg:h-[18vw] max-h-[280px] min-h-[150px]">
            <div className="overflow-hidden rounded-full h-full bg-[#0e1821]">
              <img
                className="w-full h-full object-cover rounded-full"
                src="../src/Assets/img/photo.png"
                alt="Omkar Nerurkar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
