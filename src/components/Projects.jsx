import React from 'react'
import ProjectData from './ProjectData.json'

const Projects = () => {
  return (
    <div className='bg-[#0f0d11] text-white py-16'>
      
      <div className="w-[56vw] text-center">
        <h1 className='text-4xl font-bold p-2'>My Projects</h1>
        <div className="rounded-2xl h-1 m-auto w-28 bg-gradient-to-r from-[#1192c9] via-[#7f35dd] to-[#4961d4]"></div>
        <div className='w-[99vw] m-auto'><p className="mt-4 text-lg text-center  text-gray-300">🚀 A Glimpse Into My Recent Work</p></div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-6 py-10 h-auto w-[64vw] m-auto pt-5">
        {ProjectData.map((info, index) => (
          <div
            key={index}
            className="bg-[#161616] w-[30vw] p-6 rounded-2xl shadow-lg 
                       transition-transform duration-300 ease-out 
                       hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={info.image}
              alt={info.name}
              className="rounded-lg w-full h-[180px] object-cover"
            />
            <h1 className="font-bold text-xl mt-4">{info.name}</h1>
            <p className="text-gray-400 text-sm mt-2">{info.details}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {info.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#133235] text-[#1f829b] px-2 py-1 rounded-md border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <a
                href={info.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 bg-gradient-to-r from-[#1192c9] to-[#7f35dd] rounded-4xl text-sm font-semibold hover:opacity-90 transition transition-all duration-500 transform 
             hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-10px)_scale(1.01)] 
             hover:shadow-2xs shadow-[#029dc1]"
              >
                Live Demo
              </a>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 bg-[#2c2c2c] rounded-4xl text-sm font-semibold hover:bg-[#3a3a3a] transition hover:[transform:rotateY(5deg)_rotateX(10deg)_translateY(-10px)_scale(1.01)] 
             hover:shadow-2xs shadow-[#029dc1]"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
