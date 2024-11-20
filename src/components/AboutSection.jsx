import React from 'react';
import Face from '../assets/fc5d38c1-432b-491d-9b2c-fa1fcb1a17e8.jpg';

const Data = [
  { id: 1, name: 'Birthday :  13 October   ' },
  { id: 2, name: 'Phone :  +92 300 429 3894  ' },
  { id: 3, name: 'Email : bilalqureshi752b@gmail.com    ' },
  { id: 4, name: 'Language :  English , Germani, Urdu, etc  ' },
  { id: 5, name: 'From :  Lahore, Pakistan ' },
  { id: 6, name: 'Available : 24/7 Week   ' },
];

function AboutSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Face; // Path to your CV file
    link.download = Face; // The file name to download
    link.click();
  };

  return (
    <div id="parent">
      <div className="aboutMe">
        <div className="Subtitle">
          <h1>About ME</h1>
        </div>
        <div className="Assd">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="imageandContent">
        <div className="face">
          <div className="circle">
            <img src={Face} alt="Muhammad Bilal Ahmed" />
          </div>
        </div>
        <div className="MainContent">
          <header>
            <div className="name">
              <h1>Hi There! I&apos;m Muhammad Bilal Ahmed</h1>
              <h2>MERN Stack Developer</h2>
              <p>
                As a MERN Stack Developer, I build scalable web applications using MongoDB, Express,
                React, and Node.js, focusing on enhancing user experience and engagement. My goal is
                to help brands establish a strong online presence.
              </p>
            </div>

            {Data.map((item) => (
              <div className="info" key={item?.id}>
                <p>{item.name}</p>
              </div>
            ))}
            <div className="btn">
              <button type="button" onClick={handleDownload}>
                Download CV
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
