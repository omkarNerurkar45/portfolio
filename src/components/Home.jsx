import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  const btnResume = () => {
    const pdfUrl = "../src/Assets/omkarNerurkar_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "omkarNerurkar_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-800 h-[99vh] text-white bg-gradient-to-r from-[#0e1821] to-[#130a1b]">
      <div className="w-3/4 m-auto h-full flex justify-around">
        {/* Left Div */}

        <div className="left w-1/2 flex flex-col my-auto">
          <div>
            <h1 className="pl-2 leading-17 text-[#215abc]">👋 Hello, I'm</h1>
          </div>
          <div>
            <h1 className="pl-2 leading-17 text-7xl font-extrabold">
              Omkar{" "}
              <span className="bg-gradient-to-r from-[#1192c9] to-[#4961d4] via-[#7f35dd] bg-clip-text text-transparent">
                Nerurkar
              </span>
            </h1>
          </div>
          <div>
            <h2 className="pl-2 leading-20 text-3xl">
              Frontend Developer & React Enthusiast
            </h2>
          </div>
          <div>
            <p className=" pl-2 text-[2vh] font-extralight">
              I create beautiful, functional, and responsive web experiences
              using modern technologies. Passionate about clean code and
              user-centric design.
            </p>
          </div>
          <div className="btns flex">
            <button className="btnHover cursor-pointer font-bold m-8 rounded-3xl p-4 bg-gradient-to-r from-[#1192c9] to-[#4961d4] via-[#7f35dd] shadow-[#029dc1]">
              <Link to="Projects" smooth={true} duration={700} offset={-80}>View My Work</Link>
            </button>
            <button
              className="btnHover cursor-pointer font-bold m-8 border-2 border-[#1c96ac] text-[#1c96ac] rounded-3xl p-3 hover:text-white hover:bg-[#1c96ac] hover:duration-[0.6s] shadow-md shadow-[#1c96ac] "
              onClick={btnResume}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* right Div */}

        <div className="right rounded-full p-px bg-gradient-to-b  from-[#4961d4] to-[#7f35dd] my-auto h-[15vw]">
          <div className="overflow-hidden bg-gradient-to-b from-[#4961d4] to-[#7f35dd] p-1 h-[15vw] rounded-full">
            <img
              className="w-full rounded-full h-full"
              src="../src/Assets/photo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
