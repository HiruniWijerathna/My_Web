import React from 'react';
import "./About.css";
import "../Resume.css";
import 'boxicons/css/boxicons.min.css';

function About() {
  return (
    <div className="resume-detail about active">
      <h2 className="heading">About <span>Me</span></h2>

      <p className="desc">
        Software Engineering undergraduate at the Department of Software Engineering,
        Faculty of Computing, Sabaragamuwa University of Sri Lanka.
        I specialize in web development, frontend development, and UI/UX engineering.
      </p>

      <div className="resume-list2">
        <div className="resume-item2"><p>⬛ Gender <span>⁝ Female</span></p></div>
        <div className="resume-item2"><p>⬛ Age <span>⁝ 26 years Old</span></p></div>
        <div className="resume-item2"><p>⬛ Birth Day <span>⁝ February 6, 2000</span></p></div>
        <div className="resume-item2"><p>⬛ City <span>⁝ Malabe, Sri Lanka</span></p></div>
        <div className="resume-item2"><p>⬛ Full Time <span>⁝ Available</span></p></div>
        <div className="resume-item2"><p>⬛ Freelance <span>⁝ Available</span></p></div>
        <div className="resume-item2"><p>⬛ Phone <span>⁝ +94 70 2555944</span></p></div>
        <div className="resume-item2"><p>⬛ Email <span>⁝ hiruniwijerathna7@gmail.com</span></p></div>
        <div className="resume-item2"><p>⬛ Language <span>⁝ English, Sinhala</span></p></div>
      </div>
    </div>
  );
}

export default About;
