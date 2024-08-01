import React from 'react'
import NavbarComponent from './components/navbar/NavbarComponent'
import Information from './components/information/Information'
import './Layout.css'
import Achievements from './components/rewards/Rewards'
import Extracurricular from './components/extracurricular/Extracurricular'
import Courses from './components/courses/Courses'
import Skills from './components/skills/Skills'
const Layout = () => {
  return (
    <div className='home-background'>
      <NavbarComponent />
      <Information/>
      <Achievements/>
      <Extracurricular/>
      <Courses/>
      <Skills/>
    </div>
  )
}

export default Layout
