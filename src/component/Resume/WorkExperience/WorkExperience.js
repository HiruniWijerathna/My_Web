import React from 'react';
import "./WorkExperience.css";   // same folder
import "../Resume.css";    // parent folder

import accunetLogo from '../../../assets/accunet-logo.png';
import lalGroupLogo from '../../../assets/lal-group-logo.png';

function WorkExperience() {
  return (
    <div className="resume-detail experience active">
      <h2 className="heading">My <span>Work Experience</span></h2>
      <div className="resume-list">
        <div className="resume-item">
          <p className="year">2025 - Present</p>
          <div className="resume-content">
            <div className="title-with-logo">
              <div className="logo-circle">
                <img src={accunetLogo} alt="Accunet IT Services Logo" />
              </div>
              <div>
                <h3>Software Engineering Intern</h3>
                <p className="company">Accunet IT Services Pty Ltd – Melbourne, Australia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-item">
          <p className="year">2020 - 2022</p>
          <div className="resume-content">
            <div className="title-with-logo">
              <div className="logo-circle">
                <img src={lalGroupLogo} alt="LAL Group Logo" />
              </div>
              <div>
                <h3>General Manager cum Accountant</h3>
                <p className="company">LAL Group of Companies – Welimada, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
