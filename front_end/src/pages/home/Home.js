import React from 'react';
import Profilepic from '../../assets/my-profile-pic.png';
import Techcomponent from '../../assets/tech-component-image.png';
import linkedin from '../../assets/gifs/linkedin.gif';
import github from '../../assets/gifs/github.gif';
import email from '../../assets/gifs/email.gif';
import './Home.scss';

function Home() {
  return (
    <div className='Home'>
      <div id="home" className="home-content">
        <div className="gif-container">
          <a href="https://www.linkedin.com/in/saideep-kondur/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="gif" />
          </a>
          <a href="https://github.com/SaideepKondur" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="gif" />
          </a>
          <a href="mailto:ksdr1s1@gmail.com">
            <img src={email} alt="Email" className="gif" />
          </a>
        </div>
        <img src={Profilepic} alt="Profile" className="profile-pic" />
        <h1>HEY, I’ M SAIDEEP KONDUR</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <img src={Techcomponent} alt="Tech Component" className="tech-component" />
      </div>
    </div>
  );
}

export default Home;
