import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Skill from './Component/Skills/Skill'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    
    <Home/>
    <About/>
    <Skill/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App