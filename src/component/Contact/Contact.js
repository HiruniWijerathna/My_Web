import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">

        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <div className="contact-container">

          {/* Left Section (Contact Details) */}
          <div className="contact-details">

            <div className="contact-box">
              <i className='bx bx-phone'></i>
              <div>
                <h3>Call Me</h3>
                <p>+94 70 2555944</p>
              </div>
            </div>

            <div className="contact-box">
              <i className='bx bx-envelope'></i>
              <div>
                <h3>Email Me</h3>
                <p>
                  <a href="mailto:hiruniwijerathna7@gmail.com">
                    hiruniwijerathna7@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-box">
              <i className='bx bx-map'></i>
              <div>
                <h3>Address</h3>
                <p>Malabe, Sri Lanka</p>
              </div>
            </div>

          </div>

          {/* Right Section (Google Map) */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=No%2051%20Country%20Homes%20Residences%2C%20Thalahena%2C%20Malabe%2C%20Sri%20Lanka&output=embed"
              loading="lazy"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>

        </div>

        <div className="social-media-3">
          <a href="https://www.linkedin.com/in/hiruni-wijerathna-ab23a728a/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/HiruniWijerathna" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://medium.com/@hiruniwijerathna7" target="_blank" rel="noopener noreferrer"><i className='bx bxl-medium'></i></a>
          <a href="https://www.instagram.com/hiruni_t_wijerathna" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
          <a href="https://x.com/HiruniTW" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.tiktok.com/@hiruniwijerathna3" target="_blank" rel="noopener noreferrer"><i className='bx bxl-tiktok'></i></a>
          <a href="http://www.youtube.com/@Hiruni_Wijerathna" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
          <a href="https://www.facebook.com/profile.php?id=100057057754937" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
        </div>

         <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="7272f78b-b36e-48be-a165-6ea2fd0226ad" />
            <div className="inpit-box">
                <input type="text" name="Name" placeholder="Full Name" />
                <input type="email" name="Email" placeholder="Email Address" />
            </div>
            <div className="inpit-box">
                <input type="number" name="Mobile Numbrt" placeholder="Mobile Number" />
                <input type="text" name="Email Subject" placeholder="Email Subject" />
            </div>
            <textarea name="Massage" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
            <input type="submit" value="Send Massage" className="btn" />
        </form>

      </section>
    </div>
  )
}

export default Contact
