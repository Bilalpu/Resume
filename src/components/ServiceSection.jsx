import React from 'react';
import { TbWorldShare } from 'react-icons/tb';
import { GiLaptop } from 'react-icons/gi';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import { PiCalendarCheckLight } from 'react-icons/pi';
import { CiEdit } from 'react-icons/ci';

const Serve = [
  {
    it: '1',
    icon: <TbWorldShare />,
    name: 'Web Developement',
    paragraph:
      'Web development is the process of building websites, combining coding, design, frontend, and backend development.',
  },
  {
    it: '2',
    icon: <GiLaptop />,
    name: 'Responsive Design',
    paragraph:
      'Responsive design is an approach that enables websites to adjust and display well on all devices and screen sizes.',
  },
  {
    it: '3',
    icon: <MdOutlineSettingsApplications />,
    name: 'Single Page Application',
    paragraph:
      'A Single Page Application (SPA) is a web app that updates content without reloading the page, providing a fast.',
  },
  {
    it: '4',
    icon: <BsGraphUpArrow />,
    name: 'Marketing Spealizist',
    paragraph:
      'Marketing specialists focus on strategies to promote brands, increase customer engagement, analyze trends, and etc.',
  },
  {
    it: '5',
    icon: <PiCalendarCheckLight />,
    name: 'E-Commerce',
    paragraph:
      'E-commerce websites facilitate online buying and selling by offering product listings, secure payments, .',
  },
  {
    it: '6',
    icon: <CiEdit />,
    name: 'Software Developer',
    paragraph:
      'Software development involves designing, coding, testing, and maintaining applications or systems .',
  },
];

function ServiceSection() {
  return (
    <div id="parent">
      <div className="service">
        <section>
          <div className="Subtitle">
            <h1 style={{ marginTop: '50px', fontSize: '110px' }}>Service</h1>
          </div>
          <div className="Assd">
            <h2 style={{ marginTop: '50px' }}>Service</h2>
          </div>
        </section>
      </div>
      <div className="boxContainer">
        {Serve.map((items) => (
          <div className="boxes" key={items?.it}>
            <div className="icon">{items.icon}</div>
            <h2>{items.name}</h2>
            <p>{items.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
