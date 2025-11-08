import React from "react";

const About = () => {
  return (
    <section className="flex flex-col bg-[#0f0d11] text-white py-10 px-5 sm:px-10 md:px-20">
      
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h1>
        <div className="h-1 w-24 sm:w-28 mx-auto mt-2 rounded-2xl bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
      </div>

      
      <div className="bg-[#131313] shadow-md p-5 sm:p-8 md:p-10 rounded-3xl max-w-5xl mx-auto">
        
        <p className="text-lg sm:text-xl leading-8 mb-5">
          I'm a passionate and highly motivated frontend developer with a strong foundation in building modern, responsive web applications. My journey into web development began with a fascination for how websites work, and I've dedicated myself to learning the skills needed to create seamless user experiences.
        </p>
        <p className="text-lg sm:text-xl leading-8 mb-5">
          I specialize in{" "}
          <span className="bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4] bg-clip-text text-transparent">
            HTML, CSS, JavaScript and React
          </span>{" "}
          with hands-on experience building dynamic user interfaces. I'm proficient with version control using Git and Github and skilled in using frameworks like Bootstrap to create clean, mobile-first designs.
        </p>
        <p className="text-lg sm:text-xl leading-8 mb-8">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge in software development best practices.
        </p>

        
        <div className="flex flex-col md:flex-row justify-around gap-8">
          <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl">
            <li>Responsive Web Design</li>
            <li>Modern Javascript (ES6+)</li>
            <li>React & Components Architecture</li>
          </ul>
          <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl">
            <li>Git Version Control</li>
            <li>REST API Integration</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
