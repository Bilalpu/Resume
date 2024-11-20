// import React, { useState, useEffect } from 'react';
// import netflix from '../assets/dfkefe (1).png';
// import facebo from '../assets/Screenshot 2024-11-12 152310 (1).png';
// import yoputube from '../assets/Screenshot 2024-11-12 15h626 (1).png';
// import cherry from '../assets/facebook login crediational (1).png';
// import prot from '../assets/ffdrr (1).png';
// import fff from '../assets/ffffffff (1).png';

// useEffect(() => {
//     if (currentIndex < text.length) {
//         const timeout = setTimeout(() => {
//             setCurrentText(prevText => prevText + text[currentIndex]);
//             setCurrentIndex(prevIndex => prevIndex + 1);
//         }, delay);

//         return () => clearTimeout(timeout);
//     }
// }, [currentIndex, delay, text]);

// const Url = [
//     { imageUrl: netflix, text: 'Netflix UI Clone' },
//     { imageUrl: facebo, text: 'Youtube UI Clone' },
//     { imageUrl: yoputube, text: 'Portfolio Website', },
//     { imageUrl: cherry, text: 'FaceBook Login UI', },
//     { imageUrl: prot, text: 'Design Your Home', },
//     { imageUrl: fff, text: 'Cherrity CLone Website' },
// ];

// const ProjectSection = ({ text, delay }) => {

//     const [currentText, setCurrentText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     return (
//         <div>
//             <div className="Subtitle">
//                 <h1 style={{ marginTop: '50px', fontSize: '110px' }}>Projects</h1>
//             </div>
//             <div className="Assd">
//                 <h2 style={{ marginTop: '50px' }}>Projects</h2>
//             </div>

//             <div className="allProject">
//                 <div className="six-image">
//                     {Url.map((item, index) => (
//                         <div className="first-imagecontainer" key={index}>
//                             <img src={item.imageUrl} alt="" />
//                             <div className="overlay">
//                                 <div className="items head">
//                                     <p>{item.text || "Project Name"}</p>
//                                     <hr />
//                                 </div>
//                                 <div className="items price">
//                                     <p className="old"></p>
//                                     <p className="new"></p>
//                                     return <span>{currentText.text}</span>
//                                 </div>
//                                 <div className="items cart">
//                                     <i className="fa fa-shopping-cart"></i>
//                                     <span></span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectSection;


import React, { useState, useEffect } from 'react';
import netflix from '../assets/dfkefe (1).png';
import facebo from '../assets/Screenshot 2024-11-12 152310 (1).png';
import yoputube from '../assets/Screenshot 2024-11-12 15h626 (1).png';
import cherry from '../assets/facebook login crediational (1).png';
import prot from '../assets/ffdrr (1).png';
import fff from '../assets/ffffffff (1).png';

// Define projects data
const Url = [
    { imageUrl: netflix, text: 'Netflix UI Clone' },
    { imageUrl: facebo, text: 'YouTube UI Clone' },
    { imageUrl: yoputube, text: 'Portfolio Website' },
    { imageUrl: cherry, text: 'Facebook Login UI' },
    { imageUrl: prot, text: 'Design Your Home' },
    { imageUrl: fff, text: 'Charity Clone Website' },
];

const ProjectSection = ({ delay = 100 }) => {
    return (
        <div>
            <div className="Subtitle">
                <h1 style={{ marginTop: '50px', fontSize: '110px' }}>Projects</h1>
            </div>
            <div className="Assd">
                <h2 style={{ marginTop: '50px' }}>Projects</h2>
            </div>

            <div className="allProject">
                <div className="six-image">
                    {Url.map((item, index) => (
                        <ProjectItem key={index} item={item} delay={delay} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Component for individual project item
const ProjectItem = ({ item, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (hovered && currentIndex < item.text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + item.text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else if (!hovered) {
            // Reset on hover end
            setCurrentText('');
            setCurrentIndex(0);
        }
    }, [hovered, currentIndex, item.text, delay]);

    return (
        <div
            className="first-imagecontainer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={item.imageUrl} alt="" />
            <div className="overlay">
                <div className="items head">
                    <div className="alagp">
                        <p>{currentText || " "}</p>
                    </div>{/* Show animated text */}
                    <hr />
                </div>
                <div className="items price">
                    <p className="old"></p>
                    <p className="new"></p>
                </div>
                <div className="items cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
