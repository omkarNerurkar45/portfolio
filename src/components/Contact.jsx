import React from "react";

const Contact = () => {
  const handleMail = () => {
    window.location.href =
      "mailto:omkarnerurkar7@gmail.com?subject=Hello&body=Hi%20Omkar,";
  };

  const handleProfile = () => {
    window.open("https://linkedin.com/in/omkarnerurkar45"),
      "_blank",
      "noopener,noreference";
  };

  const handleInsta = ()=>{
    window.open("https://www.instagram.com/omkarn_45/"),
    "_blank",
    "noopener,noreference";
  };

  const handleGit = () => {
    window.open ("https://github.com/omkarNerurkar45"),
    "_blank",
    "noopener,noreference"
  };

  return (
    <div className="bg-[#0f0d11] text-white pb-5">
      <div className="w-[56vw] text-center">
        <h1 className="text-4xl font-bold p-2">Get In Touch</h1>
        <div className="rounded-2xl h-1 m-auto w-28 bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
        <div className="w-[99vw] m-auto">
          <p className="mt-4 text-lg text-center  text-gray-300">
            Contact me to bring your ideas and projects to life
          </p>
        </div>
      </div>

      <div className="w-[64vw] m-auto mt-5">
        <div className="flex gap-5 justify-evenly items-center content-center text-center">
          <div
            className="email transition-transform duration-300 ease-out 
                       hover:-translate-y-2 hover:shadow-3xl bg-[#161616] w-[25vw] p-5 rounded-2xl flex flex-col gap-3"
          >
            <img src="/img/mail.png" className="w-10 m-auto" alt="" />
            <h1 className="font-bold text-2xl">Email Me</h1>
            <p className="text-[#959797]">omkarnerurkar7@gmail.com</p>
            <button
              className="font-bold w-50 m-auto cursor-pointer px-5 py-4 bg-gradient-to-r from-[#1192c9] to-[#7f35dd] rounded-4xl text-sm  hover:opacity-90 transition transition-all duration-500 transform 
             hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-10px)_scale(1.01)] 
             hover:shadow-2xs shadow-[#029dc1]"
              onClick={handleMail}
            >
              Send Email
            </button>
          </div>
          <div
            className="Linkdin transition-transform duration-300 ease-out 
                       hover:-translate-y-2 hover:shadow-3xl bg-[#161616] w-[25vw] p-5 rounded-2xl flex flex-col gap-3"
          >
            <img src="/img/linkedin.png" className="w-10 m-auto" alt="" />
            <h1 className="font-bold text-2xl">LinkedIn</h1>
            <p className="text-[#959797]">Let's connect professionally</p>
            <button
              className="font-bold w-50 m-auto cursor-pointer px-5 py-4 bg-gradient-to-r from-[#1192c9] to-[#7f35dd] rounded-4xl text-sm  hover:opacity-90 transition transition-all duration-500 transform 
             hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-10px)_scale(1.01)] 
             hover:shadow-2xs shadow-[#029dc1]"
              onClick={handleProfile}
            >
              Visit Profile
            </button>
          </div>
        </div>
        <div className="media">
        <div className="m-auto">
          <p className="mt-4 text-2xl font-bold pt-7 text-center  text-gray-300">
          Find me on social media
          </p>
        </div>
          <div className="medias">
            <ul className="flex gap-5 justify-center decoration-0">
              <li className="pt-2">
                <img src="img/gt.gif" className="rounded-full w-[1.5vw] cursor-pointer" alt="" onClick={handleGit}/>
              </li>
              <li className="pt-2">
                <img src="img/linkedin.png" className="w-[1.5vw] cursor-pointer" alt="" onClick={handleProfile}/>
              </li>
              <li>
                <img src="img/insta.svg" className="w-[2vw] pt-1 cursor-pointer" alt="" onClick={handleInsta} />
              </li>
            </ul>
            <h1 className="mt-4 m-auto text-gray-600 pt-7 text-center">© 2025 Omkar Nerurkar. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
