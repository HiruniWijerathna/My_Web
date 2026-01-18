import React from 'react';
import "./Development.css";

/* ===== IMAGE IMPORTS ===== */
import img1 from '../../../assets/1.1.jpg';
import img2 from '../../../assets/2.1.jpg';
import img3 from '../../../assets/3.1.jpg';
import img4 from '../../../assets/10.1.png';
import img5 from '../../../assets/13.1.png';
import img6 from '../../../assets/5.1.png';
import img7 from '../../../assets/11.1.png';
import img8 from '../../../assets/4.1.png';
import img9 from '../../../assets/6.1.png';
import img10 from '../../../assets/7.1.png';
import img11 from '../../../assets/8.1.png';
import img12 from '../../../assets/9.1.png';
import img13 from '../../../assets/12.1.png';

function Development() {
  return (
    <div id="web-projects" className="portfolio-container">

      {/* 1 */}
      <div className="portfolio-box">
        <img src={img1} alt="De Silva Wine Store" />
        <div className="portfolio-layer">
          <h4>De Silva Wine Store Website</h4>
                <p>Built with Node.js, React, and MongoDB, this group project offers features 
                    like product browsing, secure payments, shopping cart functionality, and order tracking, providing a seamless and user-friendly shopping experience.



                </p>
                <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1f8hP2vV2OAf5b1B9wixM2vaScoIiSkHT/view?usp=drive_links"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/ZNilakshi/Capstone-Project"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 2 */}
      <div className="portfolio-box">
        <img src={img2} alt="CropCare" />
        <div className="portfolio-layer">
          <h4>CropCare</h4>
                <p>Developed as a group project, CropCare uses Python for backend and CNN models with TensorFlow and Keras for disease detection. 
                    The app is built with Flutter for cross-platform support, MongoDB for data storage, and Java/Kotlin for Android-specific features. Cloud storage manages large datasets for efficient access.

                </p>
                <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1oP_NO2QLBRkWXas-IamDpXGS0HZ-lhhI/view?usp=sharing"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/CropCare-Mini_Project"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 3 */}
      <div className="portfolio-box">
        <img src={img3} alt="BeastBuddy" />
        <div className="portfolio-layer">
         <h4>BeastBuddy</h4>
                <p>In this group project, BeastBuddy uses Apache HTTP Server for web content, MySQL 8.x for database management, React.js for the frontend, and PHP for backend development. Git is employed for version control, Visual Studio Code is used as the IDE, and PHPMailer handles email functionalities.

                </p>
                <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1Ips6ZshqGQms83Yab7CwQiUN19WC0Q7_/view?usp=sharing"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/Web-Mini-Project"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 4 */}
      <div className="portfolio-box">
        <img src={img4} alt="YummyJet" />
        <div className="portfolio-layer">
           <h4>YummyJet</h4>
                <p>A full-stack food ordering website with user authentication, admin panel, shopping cart, and order tracking features. Built using the MERN stack with a focus on responsive design and real-world functionality.</p>
               <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1ZKhx51P6udbiZobr4DPoTtb8zwKSDktQ/view?usp=drive_link"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/Food_Delivery_Website"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 5 */}
      <div className="portfolio-box">
        <img src={img5} alt="ShareFalio" />
        <div className="portfolio-layer">
          <h4>ShareFalio</h4>
                <p>MERN User Content Platform: Users can create profiles, upload images and PDFs, and share content. Built with React, Node.js, Express, and MongoDB.

                </p>
                <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1MKdJ36kw8L1qKicJHIwtLuAhbJNYrE3p/view?usp=sharing"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/Profile-Management"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 6 */}
      <div className="portfolio-box">
        <img src={img6} alt="EpicReads" />
        <div className="portfolio-layer">
         <h4>EpicReads</h4>
                <p>As a group project, EpicReads is developed using HTML, CSS, JavaScript, and PHP. It offers an interactive platform for browsing and managing books, combining responsive design with backend integration for a dynamic reading experience.

                </p>
                <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1K5NaF93KQBeZsQuZH0HHl0DCCpT5O4Nj/view?usp=sharing"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/LMS_Group8"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 7 */}
      <div className="portfolio-box">
        <img src={img7} alt="Car Rental App" />
        <div className="portfolio-layer">
         <h4>Car Rental App</h4>
                <p>Car Rental App built with Flutter and Firebase. Features user authentication, real-time car listings, OpenStreetMap integration, and smooth booking management using Bloc and Clean Architecture for scalability.</p>
               <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1Y8e4aTLc3cn7FFSSphmVOVqxMvs5D-Te/view?usp=drive_link"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/car_app"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 8 */}
      <div className="portfolio-box">
        <img src={img8} alt="My Portfolio" />
        <div className="portfolio-layer">
          <h4>My Portfolio</h4>
                <p>A React-based personal portfolio website showcasing my projects, skills, resume, and contact information with smooth animations and responsive design.</p>
                <div class="social-media-2">
                    <a href="https://hiruniwijerathna.vercel.app/"><i class='bx bx-link'></i></a>
                <a href="https://github.com/HiruniWijerathna/My_Web"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 9 */}
      <div className="portfolio-box">
        <img src={img9} alt="Kuda Kusum Pre School" />
        <div className="portfolio-layer">
          <h4>Kuda Kusum Pre School Website</h4>
                <p>I designed and developed a fully responsive website for Kuda Kusum Pre School using pure HTML, CSS, and JavaScript. </p>
                <div class="social-media-2">
                    <a href="https://kuda-kusum-pre-school.vercel.app/"><i class='bx bx-link'></i></a>
                <a href="https://github.com/HiruniWijerathna/Kuda-Kusum-Pre-School"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 10 */}
      <div className="portfolio-box">
        <img src={img10} alt="Lal Pharmacy" />
        <div className="portfolio-layer">
          <h4>Lal Pharmacy Welimada Website</h4>
                <p>I designed and developed a fully responsive website for LAL Pharmacy - Welimada using React.js and Tailwind CSS. </p>
                <div class="social-media-2">
                    <a href="https://lal-pharmacy-x2oj-git-main-hirunis-projects-d4d75fef.vercel.app/"><i class='bx bx-link'></i></a>
                <a href="https://github.com/HiruniWijerathna/LalPharmacy"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 11 */}
      <div className="portfolio-box">
        <img src={img11} alt="Ravan Car Hub" />
        <div className="portfolio-layer">
          <h4>Ravan Car Hub</h4>
                <p>A sleek car showcase app built with Next.js 13, TypeScript, and Tailwind CSS. Features real-time car data via RapidAPI and dynamic images from Imagin API. </p>
                <div class="social-media-2">
                    <a href="https://drive.google.com/file/d/1STmDGdiLNJc-dEN_ptfsYUBh1oWSI7kK/view?usp=drive_link"><i class='bx bxs-videos' ></i></a>
                <a href="https://github.com/HiruniWijerathna/Ravans_Car_Hub"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 12 */}
      <div className="portfolio-box">
        <img src={img12} alt="Automated Test Case Generation" />
        <div className="portfolio-layer">
          <h4>Automated Test Case Generation</h4>
                <p>An AI-based tool that generates test cases from code or requirements, streamlining testing and improving software quality. Built with React, FastAPI, and Hugging Face models.</p>
                <div class="social-media-2">
                  
                <a href="https://github.com/HiruniWijerathna/Automated_Test_Case_Generation"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

      {/* 13 */}
      <div className="portfolio-box">
        <img src={img13} alt="NoteWave" />
        <div className="portfolio-layer">
          <h4>NoteWave</h4>
                <p>A full-stack note-taking app using React (Vite) frontend, Node.js/Express backend, and MongoDB Atlas. It includes Upstash Redis for rate limiting, follows MVC architecture, and uses environment variables for security and scalability.</p>
                <div class="social-media-2">
                <a href="https://drive.google.com/file/d/1LPSUYhtumay6ebA38socsMzltbetbF98/view?usp=sharing"><i class='bx bxs-videos' ></i></a>  
                <a href="https://github.com/HiruniWijerathna/NoteWave"><i class='bx bxl-github' ></i></a>
                </div>
        </div>
      </div>

    </div>
  );
}

export default Development;
