import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='font-[font2]'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
