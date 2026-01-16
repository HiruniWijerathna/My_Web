import React from 'react';
import "./Design.css";

/* IMAGE IMPORTS */
import d1 from '../../../assets/d1.png';
import d2 from '../../../assets/d2.png';
import d3 from '../../../assets/d3.png';
import d4 from '../../../assets/d4.png';
import d5 from '../../../assets/d5.png';
import d7 from '../../../assets/d7.png';

function Design() {
  return (
    <div className="portfolio-container">

      <div className="portfolio-box2">
        <img src={d1} alt="Home Management UI UX" />
        <div className="portfolio-layer">
          <h4>Home Management System </h4>
                <p>
                    Home Management System UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow.
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/a0Ngc73dGgWel66IgwOBTc/DreamWeavers--Home_management?node-id=0-1&t=kHLkNlpnxKTBoqEZ-1K" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>

      <div className="portfolio-box2">
        <img src={d2} alt="Driver Sleep Detection UI UX" />
        <div className="portfolio-layer">
          <h4>Driver Sleep Detection System </h4>
                <p>
                    Driver Sleep Detection System  UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow.
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/eWAgWc1BNv5a5AXjTRid3r/DreamWeavers--VigilantDrive?node-id=0-1&t=XtfcT7P8Rsz3DRFN-1" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>

      <div className="portfolio-box2">
        <img src={d3} alt="Crop Disease Detection UI UX" />
        <div className="portfolio-layer">
          <h4>Crop Disease Detection App </h4>
                <p>
                    Crop Disease Detection App UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow. (Group Project)
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/342nSSd6MhasYtdEwU9Qzr/CropCare?node-id=99-2&t=DZJJjEF4Kd0Lier0-1" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>

      <div className="portfolio-box2">
        <img src={d4} alt="E-Commerce UI UX" />
        <div className="portfolio-layer">
          <h4>E-Commerce Website </h4>
                <p>
                    E-Commerce Website UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow.
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/dOjpRMf3rc2P8YZA9FntWS/Untitled?node-id=0-1&t=TcTm8TPfvJC1FmVQ-1" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>

      <div className="portfolio-box2">
        <img src={d5} alt="Wine Store UI UX" />
        <div className="portfolio-layer">
          <h4>Wine Store Website</h4>
                <p>
                    Wine Store Website UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow. (Group Project)
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/UmgWT4ZOsTZML78KMiNwUu/De-Silva-Wine-Store---Welimada?node-id=0-1&t=0Y6AGTsaFzBFy5GY-1" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>

        {/* <div className="portfolio-box2">
        <img src={d7} alt="Animal Rescue UI UX" />
        <div className="portfolio-layer">
         <h4>Animal Rescue Web Platform</h4>
               <h4>E-Library Management System </h4>
                <p>
                    E-Library Management System UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow.
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/XS8bQ5xIM5qiadmGSzHDWo/Epic-Read?node-id=0-1&t=vu08HR1tUeLtArMz-1" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>
      */}

      <div className="portfolio-box2">
        <img src={d7} alt="Animal Rescue UI UX" />
        <div className="portfolio-layer">
         <h4>Animal Rescue Web Platform</h4>
                <p>
                    Animal Rescue Web Platform UI/UX design created in Figma.
                    Focused on usability, clean layout, and smooth user flow.
                </p>
                <div class="social-media-2">
                    <a href="https://www.figma.com/design/boTSCBqljXYTxcYcVSW1da/BeastBuddy-Animal-Rescue-Web-Platform?node-id=0-1&t=Aix1fqfRfXmw7CHX-1" target="_blank" rel="noreferrer">
                        <i class='bx bx-link'></i>
                    </a>
                </div>
        </div>
      </div>

    </div>
  );
}

export default Design;
