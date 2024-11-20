import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/Pastel_Feminine_Flower_Wedding_Organizer_Logo___2_-removebg-preview.png';
import { FaPhoneAlt } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='parent'>
      <div className="HoleSection">
        <div className="logo">
          <img src={Logo} alt="Bilal" />
        </div>

        {/* Toggle Button (Hamburger Icon) */}
        <div className="toggle-button" onClick={toggleMenu}>
          <HiBars3BottomRight size={30} color="#fec544" />
        </div>

        {/* Sidebar Menu */}
        <div className={`links ${isOpen ? 'active' : ''}`}>
          {/* Close Button */}
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>

          <nav>
            <ul>
              <li>
                <Link to="main" smooth={true} duration={1000} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={1000} onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="service" smooth={true} duration={1000} onClick={closeMenu}>
                  Service
                </Link>
              </li>
              <li>
                <Link to="skill" smooth={true} duration={1000} onClick={closeMenu}>
                  Skill
                </Link>
              </li>
              <li>
                <Link to="resume" smooth={true} duration={1000} onClick={closeMenu}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="project" smooth={true} duration={1000} onClick={closeMenu}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={1500} onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="line"></div>

        <div className="phone">
          <div className="icons">
            <FaPhoneAlt color='#fec544' style={{ marginRight: '10px' }} />
          </div>
          +92 300 429 3894
        </div>
      </div>
    </div>
  );
}
