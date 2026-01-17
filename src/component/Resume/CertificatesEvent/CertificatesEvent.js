import React from 'react';
import c1 from '../../../assets/c1.jpg';
import c2 from '../../../assets/c2.jpg';
import c3 from '../../../assets/c3.png';
import c4 from '../../../assets/c4.png';
import c5 from '../../../assets/c5.png';
import c6 from '../../../assets/c6.png';
import c7 from '../../../assets/c7.jpg';
import c8 from '../../../assets/c8.jpg';
import c9 from '../../../assets/c9.jpg';
import c10 from '../../../assets/c10.jpg';
import hackventure from '../../../assets/e.hv.jpg';
import idealize from '../../../assets/e2.png';

import "./CertificatesEvent.css"

function CertificatesEvent() {
  const certificates = [
    { img: c2, title: "INSL-2024", desc: "My team, DreamWeavers, First Runner-up at the Idea Stage of IEEE Innovation Nation Sri Lanka - Sabaragamuwa Province", link: c2 },
    { img: c1, title: "CodeSprint 8", desc: "Team DreamWeavers participated in the largest inter-university startup battle organized by the IEEE Student Branch of IIT.", link: c1 },
    { img: c8, title: "INSL-2023", desc: "Team DreamWeavers participated in Business Stage of IEEE Innovation Nation Sri Lanka - Sabaragamuwa Province.", link: c8 },
    { img: c3, title: "Python for Beginners", desc: "course from the University of Moratuwa (CODL)", link: c3 },
    { img: c4, title: "PYHACK 2.0", desc: "Certificate of Commendation for exemplary performance", link: c4 },
    { img: c5, title: "Java Programming", desc: "Successfully completed the Java Programming course from Great Learning Academy in August 2023.", link: c5 },
    { img: c6, title: "Programming Basics", desc: "Completed the Programming Basics course from Great Learning Academy in March 2024", link: c6 },
    { img: c9, title: "Frontend Developer (React)", desc: "Earned Frontend Developer (React) Certification from HackerRank, validating practical React and frontend development skills.", link: "https://www.hackerrank.com/certificates/2815900c09e1" },
    { img: c10, title: "JavaScript (Basic)", desc: "It covers topics such as functions, currying, hoisting, scope, inheritance, events, and error handling.", link: "https://www.hackerrank.com/certificates/35cb6f28086c" },
    { img: c7, title: "CSS (Basic)", desc: "Earned CSS (Basic) Certification from HackerRank on March 20, 2025, showcasing web styling and layout skills.", link: "https://www.hackerrank.com/certificates/e2789ee898fb" },
    { img: hackventure, title: "HackVenture", desc: "We participated as Team DreamWeavers from Sabaragamuwa University, reaching the semi-finals of HackVenture.", link: hackventure },
    { img: idealize, title: "IDEALIZE 2024", desc: "Team DreamWeavers from Sabaragamuwa University won the Prototype Phase", link: "https://docs.google.com/spreadsheets/d/1dA1XWekFfX3mX3xfHX390RF07c9mgWWrxXfJZYlH6a8/edit?gid=0" },
  ];

  return (
    <div className="resume-detail certificates active">
      <h2 className="heading">My <span>Certificates & Events</span></h2>
      <div className="resume-list2">
        {certificates.map((cert, index) => (
          <div className="resume-item2" key={index}>
  <img src={cert.img} alt={cert.title} />
  <div className="portfolio-layer">
    <h4>{cert.title}</h4>
    <p>{cert.desc}</p>
    <a href={cert.link} target="_blank" rel="noreferrer">
      <i className="bx bx-link-external"></i>
    </a>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

export default CertificatesEvent;
