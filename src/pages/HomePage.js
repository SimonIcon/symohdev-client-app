import React from 'react'
import Dashboard from "../component/Dashboard"
import AboutMe from "../component/AboutMe"
import Skills from "../component/Skills"
import Footer from "../component/Footer"

const HomePage = () => {
  return (
    <div className='w-full flex flex-col bg-[#0a192f] text-gray-300'>
      <Dashboard />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  )
}

export default HomePage