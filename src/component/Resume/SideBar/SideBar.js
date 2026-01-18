import React, { useState } from 'react';
import "./SideBar.css";   // same folder
import "../Resume.css";    // parent folder
import 'boxicons/css/boxicons.min.css';

// Import images
import resumeImage from '../../../assets/image5.png';

// Corrected imports for content components
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Skills from '../Skills/Skills';
import CertificatesEvent from '../CertificatesEvent/CertificatesEvent';
import About from '../About/About';

function SideBar() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="resume active" id="resume">
      <div className="resume-container">

        {/* Sidebar Info */}
        <div className="resume-box">
          <div className="about-img">
            <img src={resumeImage} alt="resume" />
          </div>

          <h2 className="heading">Why Hire <span>Me</span></h2>

          <div className="resume-buttons">
            <button
              className={`resume-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`resume-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Work Experience
            </button>
            <button
              className={`resume-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`resume-btn ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              Achievements
            </button>
            <button
              className={`resume-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="resume-box">
          {activeTab === 'education' && <Education />}
          {activeTab === 'experience' && <WorkExperience />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'certificates' && <CertificatesEvent />}
          {activeTab === 'about' && <About />} 
        </div>

      </div>
    </section>
  );
}

export default SideBar;
