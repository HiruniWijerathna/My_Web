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
    { img: c2, title: "INSL-2024", desc: "My team, DreamWeavers, First Runner-up at the Idea Stage of IEEE Innovation Nation Sri Lanka - Sabaragamuwa Province" },
    { img: c1, title: "CodeSprint 8", desc: "Team DreamWeavers participated in the largest inter-university startup battle organized by the IEEE Student Branch of IIT." },
    { img: c8, title: "INSL-2023", desc: "Team DreamWeavers participated in Business Stage of IEEE Innovation Nation Sri Lanka - Sabaragamuwa Province." },
    { img: c3, title: "Python for Beginners", desc: "course from the University of Moratuwa (CODL)" },
    { img: c4, title: "PYHACK 2.0", desc: "Certificate of Commendation for exemplary performance" },
    { img: c5, title: "Java Programming", desc: "Successfully completed the Java Programming course from Great Learning Academy in August 2023." },
    { img: c6, title: "Programming Basics", desc: "Completed the Programming Basics course from Great Learning Academy in March 2024" },
    { img: c9, title: "Frontend Developer (React)", desc: "Earned Frontend Developer (React) Certification from HackerRank, validating practical React and frontend development skills." },
    { img: c10, title: "JavaScript (Basic)", desc: "It covers topics such as functions, currying, hoisting, scope, inheritance, events, and error handling." },
    { img: c7, title: "CSS (Basic)", desc: "Earned CSS (Basic) Certification from HackerRank on March 20, 2025, showcasing web styling and layout skills." },
    { img: hackventure, title: "HackVenture", desc: "We participated as Team DreamWeavers from Sabaragamuwa University, reaching the semi-finals of HackVenture." },
    { img: idealize, title: "IDEALIZE 2024", desc: "Team DreamWeavers from Sabaragamuwa University won the Prototype Phase" },
  ];

  return (
    <div className="resume-detail certificates active">
      <h2 className="heading">My <span>Certificates & Events</span></h2>
      <div className="resume-list2">
        {certificates.map((cert, index) => (
          <div className="resume-item2" key={index}>
            <img src={cert.img} alt={cert.title} />
            <div className="porfolio-layer">
              <h4>{cert.title}</h4>
              <p>{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatesEvent;
