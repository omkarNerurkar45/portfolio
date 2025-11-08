import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='font-[font2]'>
      <section id='Navbar'><Navbar /></section>
      <section id='Home'><Home /></section>
      <section id='About'><About /></section>
      <section id='Skills'><Skills /></section>
      <section id='Projects'><Projects /></section>
      <section id='Contacts'><Contact /></section>
    </div>
  )
}

export default App
