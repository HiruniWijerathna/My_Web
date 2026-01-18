import React, {  useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import "./Home.css";
import 'boxicons/css/boxicons.min.css';

// Import images

import homeImg from '../../assets/image1.1.png';

function Home() {

  const typedRef = useRef(null); // ref for Typed.js

  useEffect(() => {
    // Initialize Typed.js only once
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'Frontend Developer', 'UI/UX Engineer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 500,
      loop: true
    });

    // Destroy Typed instance on unmount to avoid memory leaks
    return () => typed.destroy();
  }, []);

  return (
    <div>
    <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Hiruni Wijerathna</h1>
          <h3>And I'm <span ref={typedRef}></span></h3>
          <p>Software Engineering Undergraduate at Sabaragamuwa University of Sri Lanka.</p>

          <div className="social-media">
            <a href="https://www.linkedin.com/in/hiruni-wijerathna-ab23a728a/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/HiruniWijerathna" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
            <a href="https://medium.com/@hiruniwijerathna7" target="_blank" rel="noopener noreferrer"><i className='bx bxl-medium'></i></a>
            <a href="https://www.instagram.com/hiruni_t_wijerathna?igsh=bjZtajRybzhxY3dh" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
            <a href="https://x.com/HiruniTW" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
            <a href="https://www.tiktok.com/@hiruniwijerathna7" target="_blank" rel="noopener noreferrer"><i className='bx bxl-tiktok'></i></a>
            <a href="http://www.youtube.com/@Hiruni_Wijerathna" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
            <a href="https://www.facebook.com/profile.php?id=100057057754937" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
          </div>

          <a href="/CV_Hiruni_Wijerathna.pdf" download="CV_Hiruni_Wijerathna" className="btn">
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src={homeImg} alt="Hiruni Wijerathna" />
        </div>
      </section>
    </div>
  );
}

export default Home;
