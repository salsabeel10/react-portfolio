import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState()
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Salsabeel Ibrahim</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Salsabeel Ibrahim</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar