import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 Hiruni Wijerathna | All Rights Reserved.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/hiruni-wijerathna-ab23a728a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/HiruniWijerathna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://medium.com/@hiruniwijerathna7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-medium"></i>
        </a>
        <a
          href="http://www.youtube.com/@Hiruni_Wijerathna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/hiruni_t_wijerathna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://x.com/HiruniTW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          href="https://www.tiktok.com/@hiruniwijerathna3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-tiktok"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100057057754937"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
