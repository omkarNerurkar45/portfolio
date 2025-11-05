import React from 'react'

const About = () => {
  return (
    <div className=' flex flex-col bg-[#0f0d11] text-white pt-5 h-[65vh]'>
      <div className="main h-[60vh] w-[55vw]  m-auto bg-[#0f0d11]">
        <div className=" upper text-4xl font-bold p-2 w-50">About Me</div>
        <div className="ml-7 rounded-2xl h-1 w-28 bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
        <div className="bg-[#131313] shadow-[-5px_0px_0px_#009ec0] p-6  bg-[#009ec0] rounded-3xl m-5 p-5 font-bold h-[52vh] lower leading-10">
          <p className='leading-8 text-lg mt-5 justify-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a passionate and highly motivated frontend developer with a strong foundation in building modern, responsive web applications. My journey into web development began with a fascination for how websites work, and I've dedicated myself to learning the skills needed to create seamless user experiences.</p>
          <p className='leading-8 text-lg mt-5 justify-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I specialize in <span className='bg-gradient-to-r from-[#1192c9] to-[#4961d4] via-[#7f35dd] bg-clip-text text-transparent'>HTML, CSS, JavaScript and React</span> with hands-on experience building dynamic user interfaces. I'm proficient with version control using Git and Github and skilled in using frameworks like Bootstrap to create clean, mobile-first designs.</p>
          <p className='leading-8 text-lg mt-5 justify-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When I'm not coding, you can find me exploring new technologies, contributing to open-source projects or expanding my knwoledge in software development best practices. </p>

          <div className="list flex justify-around pt-5 items-center mx-auto">
            <div className="left">
              <ul>
                <li>Responsive Web Design</li>
                <li>Modern Javascript (ES6+)</li>
                <li>React & Components Architecture</li>
              </ul>
            </div>
            <div className="right"> 
              <ul>
                <li>Git Version Control</li>
                <li>REST API Integration</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
