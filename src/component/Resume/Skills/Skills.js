import React from 'react';
import "./Skills.css";   // same folder
import "../Resume.css";    // parent folder
import 'boxicons/css/boxicons.min.css';


function Skills() {


  return (
   
            <div className="resume-detail skills active">
              <h2 className="heading">My <span>Skills</span></h2>
              <div className="resume-list3">
                <div className="resume-item3"><i className='bx bxl-html5'></i><span>HTML</span></div>
                <div className="resume-item3"><i className='bx bxl-css3'></i><span>CSS</span></div>
                <div className="resume-item3"><i className='bx bxl-javascript'></i><span>JavaScript</span></div>
                <div className="resume-item3"><i className='bx bxl-react'></i><span>React.js</span></div>
                <div className="resume-item3"><i className='bx bxl-tailwind-css'></i><span>Tailwind CSS</span></div>
                <div className="resume-item3"><i className='bx bxl-nodejs'></i><span>Node.js</span></div>
                <div className="resume-item3"><i className='bx bxl-mongodb'></i><span>MongoDB</span></div>
                <div className="resume-item3"><i className='bx bxl-bootstrap'></i><span>Bootstrap</span></div>
                <div className="resume-item3"><i className='bx bxl-github'></i><span>GitHub</span></div>
                <div className="resume-item3"><i className='bx bxl-php'></i><span>PHP</span></div>
                <div className="resume-item3"><i className='bx bxl-figma'></i><span>Figma</span></div>
                <div className="resume-item3"><i className='bx bxl-java'></i><span>Java</span></div>
                <div className="resume-item3"><i className='bx bxs-data'></i><span>MySQL</span></div>
              </div>
            </div>

  );
}

export default Skills;
