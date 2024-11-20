import React from 'react';
import { BsBagCheckFill } from 'react-icons/bs';

function ResumeSection() {
  return (
    <div>
      <div className="Subtitle">
        <h1 style={{ marginTop: '50px', fontSize: '110px' }}>Resume</h1>
      </div>
      <div className="Assd">
        <h2 style={{ marginTop: '50px' }}>Resume</h2>
      </div>
      <div className="dono">
        <div className="education">
          <BsBagCheckFill fontSize="40px" className="same" />
          <h1>Education</h1>
        </div>
        <div className="expertize">
          <BsBagCheckFill className="same" fontSize="40px" />
          <h1>Experience</h1>
        </div>
      </div>

      <div className="container">
        {/* Vertical Line */}
        <div className="vertical-line" />

        {/* Education Section */}
        <div className="timeline-section">
          <div className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
            <BsBagCheckFill fontSize="40px" className="same" />
            <h2>Education</h2>
          </div>

          {/* Education Timeline Items */}
          <div className="timeline-item mob">
            <div className="timeline-content" id="ifelswe">
              <h3>2022-Present</h3>
              <h4>React.js & Next.js Development</h4>
              <h3>Website Development</h3>
              <p>
                Specializing in dynamic, high-performance web applications with enhanced SEO
                optimization.
              </p>
            </div>
          </div>
          <div className="timeline-item ">
            <div className="timeline-content">
              <h3>2024-2028 (On Going)</h3>
              <h4>Bachelors in Computer Sciences</h4>
              <h3>Virtual University of Pakistan</h3>
              <p>
                Providing foundational knowledge in programming, algorithms, databases, and software
                development principles.
              </p>
            </div>
          </div>
          <div className="timeline-item mob">
            <div className="timeline-content">
              <h3>2022-Present</h3>
              <h4>Front-End Development</h4>
              <h3>Website Development</h3>
              <p>
                Building responsive user interfaces using React.js, Next.js, and modern front-end
                technologies.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2022-2024</h3>
              <h4>Intermediate in Computer Science</h4>
              <h3>Kips College</h3>
              <p>
                Emphasizing IT concepts and programming, preparing students for advanced studies in
                technology.
              </p>
            </div>
          </div>
          <div className="timeline-item mob">
            <div className="timeline-content">
              <h3>2022-Present</h3>
              <h4>API Integration & Optimization</h4>
              <h3>Website Development</h3>
              <p>
                Skilled in integrating APIs and optimizing performance for scalable web
                applications.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2020-2022</h3>
              <h4>Matric</h4>
              <h3>Computer Science</h3>
              <p>
                Basics of IT, MS Office, and foundational programming, providing a bridge to higher
                education.
              </p>
            </div>
          </div>
        </div>

        {/* Expertize Section */}
        <div className="timeline-sections">
          <div className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
            <BsBagCheckFill fontSize="40px" className="same" />
            <h2>Expertize</h2>
          </div>

          <div className="timeline-item">
            <div className="timeline-content" id="ifelswe">
              <h3>2022-Present</h3>
              <h4>React.js & Next.js Development</h4>
              <h3>Website Development</h3>
              <p>
                Specializing in dynamic, high-performance web applications with enhanced SEO
                optimization.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2022-Present</h3>
              <h4>Front-End Development</h4>
              <h3>Website Development</h3>
              <p>
                Building responsive user interfaces using React.js, Next.js, and modern front-end
                technologies.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2022-Present</h3>
              <h4>API Integration & Optimization</h4>
              <h3>Website Development</h3>
              <p>
                Skilled in integrating APIs and optimizing performance for scalable web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
