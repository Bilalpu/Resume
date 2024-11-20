import React from 'react';
import Face from '../assets/fc5d38c1-432b-491d-9b2c-fa1fcb1a17e8.jpg';

const Data = [
    { name: 'Birthday :  13 October   ' },
    { name: 'Phone :  +92 300 429 3894  ' },
    { name: 'Email : bilalqureshi752b@gmail.com    ' },
    { name: 'Language :  English , Germani, Urdu, etc  ' },
    { name: 'From :  Lahore, Pakistan ' },
    { name: 'Available : 24/7 Week   ' },
];

const AboutSection = () => {
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
                            <h1>Hi There! I'm Muhammad Bilal Ahmed</h1>
                            <h2>MERN Stack Developer</h2>
                            <p>
                                As a MERN Stack Developer, I build scalable web applications using
                                MongoDB, Express, React, and Node.js, focusing on enhancing user
                                experience and engagement. My goal is to help brands establish a
                                strong online presence.
                            </p>
                        </div>

                        {Data.map((item, index) => (
                            <div className="info" key={index}>
                                <p>{item.name}</p>
                            </div>
                        ))}
                        <div className="btn">
                            <button onClick={handleDownload}>Download CV</button>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
