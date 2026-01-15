import React from 'react';
import "./Education.css";   // same folder
import "../Resume.css";    // parent folder

import sabaragamuwaLogo from '../../../assets/sabaragamuwa-logo.png';
import dssenanayakeLogo from '../../../assets/dssenanayake-logo.png';

function Education() {
  return (
    <div className="resume-detail education active">
      <h2 className="heading">My <span>Education</span></h2>
      <div className="resume-list">
        <div className="resume-item">
          <p className="year">2022 - Present</p>
          <div className="resume-content">
            <div className="title-with-logo">
              <div className="logo-circle">
                <img src={sabaragamuwaLogo} alt="Sabaragamuwa University Logo" />
              </div>
              <div>
                <h3>BSc. (Hons) Software Engineering (Reading)</h3>
                <p className="company">Sabaragamuwa University of Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-item">
          <p className="year">2011 - 2019</p>
          <div className="resume-content">
            <div className="title-with-logo">
              <div className="logo-circle">
                <img src={dssenanayakeLogo} alt="D. S. Senanayake National College Logo" />
              </div>
              <div>
                <h3>G.C.E. A/L Examination (Physical Sciences Stream)</h3>
                <p className="company">D. S. Senanayake National College, Ampara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
