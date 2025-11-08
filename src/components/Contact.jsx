import React from "react";

const Contact = () => {
  const handleMail = () => {
    window.location.href =
      "mailto:omkarnerurkar7@gmail.com?subject=Hello&body=Hi%20Omkar,";
  };

  const handleProfile = () => {
    window.open("https://linkedin.com/in/omkarnerurkar45", "_blank", "noopener,noreferrer");
  };

  const handleInsta = () => {
    window.open("https://www.instagram.com/omkarn_45/", "_blank", "noopener,noreferrer");
  };

  const handleGit = () => {
    window.open("https://github.com/omkarNerurkar45", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="Contacts"
      className="bg-[#0f0d11] text-white py-16 px-5 sm:px-10 md:px-20 flex flex-col items-center"
    >
      
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h1>
        <div className="rounded-2xl h-1 mx-auto w-24 bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Contact me to bring your ideas and projects to life
        </p>
      </div>

      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        <div
          className="transition-transform duration-300 ease-out 
                     hover:-translate-y-2 bg-[#161616] p-6 rounded-2xl flex flex-col gap-3 items-center text-center shadow-md"
        >
          <img src="../img/mail.png" className="w-12 sm:w-14" alt="mail" />
          <h1 className="font-bold text-xl sm:text-2xl">Email Me</h1>
          <p className="text-[#959797] text-sm sm:text-base">
            omkarnerurkar7@gmail.com
          </p>
          <button
            className="font-bold mt-3 cursor-pointer px-5 py-3 bg-gradient-to-r from-[#1192c9] to-[#7f35dd] rounded-3xl text-sm sm:text-base hover:opacity-90 transition-all duration-500 transform 
                       hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-8px)_scale(1.02)] 
                       hover:shadow-md shadow-[#029dc1]"
            onClick={handleMail}
          >
            Send Email
          </button>
        </div>

        
        <div
          className="transition-transform duration-300 ease-out 
                     hover:-translate-y-2 bg-[#161616] p-6 rounded-2xl flex flex-col gap-3 items-center text-center shadow-md"
        >
          <img src="../src/Assets/img/linkedin.png" className="w-12 sm:w-14" alt="linkedin" />
          <h1 className="font-bold text-xl sm:text-2xl">LinkedIn</h1>
          <p className="text-[#959797] text-sm sm:text-base">
            Let's connect professionally
          </p>
          <button
            className="font-bold mt-3 cursor-pointer px-5 py-3 bg-gradient-to-r from-[#1192c9] to-[#7f35dd] rounded-3xl text-sm sm:text-base hover:opacity-90 transition-all duration-500 transform 
                       hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-8px)_scale(1.02)] 
                       hover:shadow-md shadow-[#029dc1]"
            onClick={handleProfile}
          >
            Visit Profile
          </button>
        </div>
      </div>

      
      <div className="mt-14 text-center w-full">
        <p className="text-xl sm:text-2xl font-bold text-gray-300 mb-6">
          Find me on social media
        </p>

        <ul className="flex gap-8 justify-center items-center">
          <li>
            <img
              src="/img/gt.gif"
              className="rounded-full w-8 sm:w-10 cursor-pointer hover:scale-110 transition-transform"
              alt="GitHub"
              onClick={handleGit}
            />
          </li>
          <li>
            <img
              src="/img/linkedin.png"
              className="w-8 sm:w-10 cursor-pointer hover:scale-110 transition-transform"
              alt="LinkedIn"
              onClick={handleProfile}
            />
          </li>
          <li>
            <img
              src="/img/insta.svg"
              className="w-8 sm:w-10 cursor-pointer hover:scale-110 transition-transform"
              alt="Instagram"
              onClick={handleInsta}
            />
          </li>
        </ul>

        <h1 className="mt-10 text-gray-600 text-sm sm:text-base">
          © 2025 Omkar Nerurkar. All rights reserved.
        </h1>
      </div>
    </section>
  );
};

export default Contact;
