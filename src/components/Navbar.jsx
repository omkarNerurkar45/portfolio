import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around bg-gradient-to-r from-[#090e12]  to-[#190d22] text-white h-[7vh]'>
      <div className="Home font-extrabold bg-gradient-to-r from-pink-300 to-teal-300 via-purple-300 bg-clip-text text-transparent">
        <button>Portfolio</button>
      </div>
      <div className="assets">
        <button className='buttonsNav textBg'>Home</button>
        <button className='buttonsNav textBg'>About</button>
        <button className='buttonsNav textBg'>Skills</button>
        <button className='buttonsNav textBg'>Projects</button>
        <button className='buttonsNav textBg'>Contact</button>
      </div>
    </div>
  )
}

export default Navbar
