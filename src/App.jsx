import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='font-[font2]'>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App
