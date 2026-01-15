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
    { img: c2, title: "INSL-2024", desc: "My team, DreamWeavers, First Runner-up..." },
    { img: c1, title: "CodeSprint 8", desc: "Team DreamWeavers participated..." },
    { img: c8, title: "INSL-2023", desc: "Team DreamWeavers participated..." },
    { img: c3, title: "Python for Beginners", desc: "Course from University of Moratuwa" },
    { img: c4, title: "PYHACK 2.0", desc: "Certificate of Commendation..." },
    { img: c5, title: "Java Programming", desc: "Successfully completed Java..." },
    { img: c6, title: "Programming Basics", desc: "Completed Programming Basics..." },
    { img: c9, title: "Frontend Developer (React)", desc: "HackerRank Certification" },
    { img: c10, title: "JavaScript (Basic)", desc: "HackerRank Certification" },
    { img: c7, title: "CSS (Basic)", desc: "HackerRank Certification" },
    { img: hackventure, title: "HackVenture", desc: "Semi-finals participation" },
    { img: idealize, title: "IDEALIZE 2024", desc: "Prototype Phase Winner" },
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
