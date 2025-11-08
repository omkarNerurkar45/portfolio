import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 flex items-center justify-around bg-gradient-to-r from-[#090e12] to-[#190d22] text-white h-[7vh]'>
      <div className="Home font-extrabold bg-gradient-to-r from-pink-300 to-teal-300 via-purple-300 bg-clip-text text-transparent">
        <button>Portfolio</button>
      </div>
      <div className="assets">
        <button className='buttonsNav textBg'><Link to="Home" smooth={true} duration={700} offset={-80}>Home</Link></button>
        <button className='buttonsNav textBg'><Link to="About" smooth={true} duration={700} offset={-80}>About</Link></button>
        <button className='buttonsNav textBg'><Link to="Skills" smooth={true} duration={700} offset={-80}>Skills</Link></button>
        <button className='buttonsNav textBg'><Link to="Projects" smooth={true} duration={700} offset={-80}>Projects</Link></button>
        <button className='buttonsNav textBg'><Link to="Contacts" smooth={true} duration={700} offset={-80}>Contacts</Link></button>
      </div>
    </div>
  )
}

export default Navbar
