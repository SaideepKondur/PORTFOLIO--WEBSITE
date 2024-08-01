import React from 'react';
import linkedin from '../../assets/techlogo/WhiteImages/likedin-white.png';
import github from '../../assets/techlogo/WhiteImages/github-white.png';
import email from '../../assets/techlogo/WhiteImages/email-white.png';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-fill container">
        <div className="footer-content">
          <div className="left-part">
            <h2>Saideep Kondur</h2>
            <p>A Result-Oriented Web Developer building and managing Websites and <br/>Web Applications that leads to the success of the overall product</p>
          </div>
          <div className="right-part">
            <h2>Social</h2>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/saideep-kondur/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="icon" />
              </a>
              <a href="https://github.com/SaideepKondur" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="icon" />
              </a>
              <a href="mailto:ksdr1s1@gmail.com">
                <img src={email} alt="Email" className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <hr />
          <p>&copy; Copyright 2024. Made by <span>Saideep Kondur</span></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
