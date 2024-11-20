import React from 'react';
import { FaBehance, FaTwitter } from 'react-icons/fa';
import { IoBasketballOutline, IoLogoLinkedin } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';

import Pic from '../assets/hero-img.jpg';

function MainSection() {
  const closeMenu = () => {
    console.log('Menu closed!');
  };

  return (
    <div>
      <div className="bg-image">
        <div className="content">
          <h3>Hello I&apos;m</h3>
          <h1 className="crack-text">
            <div className="alag">
              <span>M</span>
              <span>u</span>
              <span>h</span>
              <span>a</span>
              <span>m</span>
              <span>m</span>
              <span>a</span>
              <span>d</span>
            </div>
            <br />
            <span>B</span>
            <span>i</span>
            <span>l</span>
            <span>a</span>
            <span>l</span>
            <br />
            <span>A</span>
            <span>h</span>
            <span>m</span>
            <span>e</span>
            <span>d</span>
          </h1>
          <div className="hj">
            <h3
              style={{
                fontSize: '36px',
                marginBottom: '41px',
                fontWeight: '300',
                color: '#a9adb8',
                marginLeft: '-3%',
                width: '100%',
              }}
            >
              Mern Stack Developer
            </h3>
          </div>
          <div className="btnn">
            <button
              onClick={closeMenu}
              type="button"
              style={{ border: '2px solid #a9adb8', padding: '10px', borderRadius: '5px' }}
            >
              <ScrollLink
                to="contact"
                smooth
                duration={1500}
                style={{ borderRadius: '10px', textDecoration: 'none', color: 'inherit' }}
              >
                Hire Me
              </ScrollLink>
            </button>
          </div>
          <div className="alltags">
            <div className="socialtags">
              <div className="social-link">
                <div className="icon-container">
                  <IoBasketballOutline fontSize="30px" />
                </div>
                <span className="text">Facebook</span>
              </div>

              <div className="social-link">
                <div className="icon-container">
                  <FaBehance fontSize="30px" />
                </div>
                <span className="text">Behance</span>
              </div>

              <div className="social-link">
                <div className="icon-container">
                  <FaTwitter fontSize="30px" />
                </div>
                <span className="text">Twitter</span>
              </div>

              <div className="social-link">
                <div className="icon-container">
                  <IoLogoLinkedin fontSize="30px" />
                </div>
                <span className="text">Linkedin</span>
              </div>
            </div>
          </div>
        </div>
        <div className="boyImage">
          <img src={Pic} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
