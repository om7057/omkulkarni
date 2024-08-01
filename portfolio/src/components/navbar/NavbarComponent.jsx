import React from 'react';
import './NavbarComponent.css';

function NavbarComponent() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <a href="#home" className='navbar-brand'>Portfolio Website</a>
          <div className='nav-links'>
            <a href="#home" className='nav-link' onClick={() => scrollToSection('home')}>About</a>
            <a href="#skills" className='nav-link' onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#achievements" className='nav-link' onClick={() => scrollToSection('achievements')}>Achievements</a>
            <a href="https://drive.google.com/file/d/1CXBPBQYjQawR12Z_JLr_nCacofJK5drR/view?usp=sharing" className='nav-link' target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
