import React from 'react'
import TempApi from '../components/TempApi.json'

const Skills = () => {
  return (
    <div className='bg-[#0f0d11] text-white'>
        <div className="upper w-[55vw] m-auto pt-20">
            <h1 className='upper text-4xl  m-auto font-bold p-2'>My Skills</h1>
            <div className=" ml-7 rounded-2xl h-1 w-28 m-auto bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
        </div>
      <div className="main h-auto w-[64vw] m-auto pt-5">
        <div className=" lower">
          <div className=" text-center pb-5">
            <h1>Technologies and tools I use to bring ideas to life</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 py-10 ">
            
      {TempApi.map((skill, index) => (
        <div
          key={index}
          className="pt-8 pb-10 h-[10vw] w-[15vw] rounded-[25px]
                     flex flex-col items-center justify-center text-center 
                     border border-transparent hover:border-[#009ec0] cursor-pointer bg-[#161616]
                     transition-all duration-500 transform 
             hover:[transform:rotateY(10deg)_rotateX(10deg)_translateY(-10px)_scale(1.05)] 
             hover:shadow-2xl shadow-[#029dc1]"
        >
          <i className="ri-html5-line skill-icon">
            <img className="h-15" src={`../public/img/${skill.name.toLowerCase()}.png`} alt={skill.name} />
          </i>
          <h1 className="font-bold text-[20px] pt-2">{skill.name}</h1>
          <p className="pt-2 pb-2 text-[16px]">{skill.para}</p>
        </div>
      ))}
    </div>
    </div>
        </div>
      </div>
  )
}

export default Skills
