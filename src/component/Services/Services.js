import React from 'react';
import "./Services.css"

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        What I'm <span>Doing</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className='bx bx-code-alt'></i>
          <h3>Web Development</h3>
          <p>Designing and developing modern, scalable web applications.</p>
          {/*
          <a href="#" className="btn">Read More</a>
          */}
        </div>

        <div className="services-box">
          <i className='bx bx-laptop'></i>
          <h3>Frontend Development</h3>
          <p>Bringing designs to life with clean, efficient code.</p>
          {/*
          <a href="#" className="btn">Read More</a>
          */}
        </div>

        <div className="services-box">
          <i className='bx bx-palette'></i>
          <h3>UI/UX Engineer</h3>
          <p>Focusing on intuitive, user-friendly, and visually appealing designs.</p>
          {/*
          <a href="#" className="btn">Read More</a>
          */}
        </div>
      </div>
    </section>
  );
}

export default Services;
