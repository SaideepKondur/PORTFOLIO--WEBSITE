import React from 'react';
import './About.scss';
import softwareResume from '../../assets/download/softwareResume.pdf'
import react from '../../assets/techlogo/react.png';
import reactBW from '../../assets/techlogo/Black&WhiteImages/reactjs-Black&white.png';
import bootstrap from '../../assets/techlogo/bootstrap.png';
import bootstrapB from '../../assets/techlogo/BlackImages/bootstrap-black.png';
import html from '../../assets/techlogo/html.png';
import htmlBW from '../../assets/techlogo/Black&WhiteImages/html-Black&white.png';
import htmlB from '../../assets/techlogo/BlackImages/html-black.png';
import css from '../../assets/techlogo/css.png';
import cssBW from '../../assets/techlogo/Black&WhiteImages/css-Black&white.png';
import cssB from '../../assets/techlogo/BlackImages/css-black.png';
import express from '../../assets/techlogo/express.png';
import figma from '../../assets/techlogo/figma.png';
import figmaB from '../../assets/techlogo/BlackImages/figma-black.png';
import github from '../../assets/techlogo/github.png';
import javascript from '../../assets/techlogo/javascript.png';
import javascriptBW from '../../assets/techlogo/Black&WhiteImages/javascript-Black&white.png';
import javascriptB from '../../assets/techlogo/BlackImages/javascript-black.png';
import mongodb from '../../assets/techlogo/mongodb.png';
import mongodbBW from '../../assets/techlogo/Black&WhiteImages/mongodb-Black&white.png';
import mongodbB from '../../assets/techlogo/BlackImages/mongodb-black.png';
import nodejs from '../../assets/techlogo/nodejs.png';
import nodejsBW from '../../assets/techlogo/Black&WhiteImages/nodejs-Black&white.png';
import redux from '../../assets/techlogo/redux.png';
import reduxB from '../../assets/techlogo/BlackImages/redux-black.png';
import wordpress from '../../assets/techlogo/wordpress.png';
import wordpressBW from '../../assets/techlogo/Black&WhiteImages/icons8-wordpress-192.png';

function About() {
  return (
    <div className="About">
      <div id="about" className="about-content">
        <div className="top-part">
          <h1>About Me</h1>
          <p>Every great design begins with an even <span>better story</span>. Here you will find more information about me,
          <br/>what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className="center-part">
          <div className="left-part">
            <h3>Get to know me!</h3>
            <p>
              I’m a Result-Oriented <span>Web Developer</span> building and managing
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the <span>Projects</span> section.
            </p>
            <br/>
            <p>
              I am seeking <span>job</span> opportunities that allow me to contribute, learn,
              and grow. I am enthusiastic about applying my skills and
              collaborating on exciting projects. I believe in the power of code to 
              solve real-world problems and create meaningful impacts. Let's
              <span> connect</span> and work together to create exceptional web experiences!
            </p>
          </div>  
          <div className="right-part">
            <h3>My Skills</h3>
            <div className="logos">
              <div className="logo-container" data-text="React">
                <img src={react} alt="React" className="logo" />
              </div>
              <div className="logo-container" data-text="Bootstrap">
                <img src={bootstrap} alt="Bootstrap" className="logo" />
              </div>
              <div className="logo-container" data-text="CSS">
                <img src={css} alt="CSS" className="logo" />
              </div>
              <div className="logo-container" data-text="Express">
                <img src={express} alt="Express" className="logo" />
              </div>
              <div className="logo-container" data-text="Figma">
                <img src={figma} alt="Figma" className="logo" />
              </div>
              <div className="logo-container" data-text="GitHub">
                <img src={github} alt="GitHub" className="logo" />
              </div>
              <div className="logo-container" data-text="HTML">
                <img src={html} alt="HTML" className="logo" />
              </div>
              <div className="logo-container" data-text="JavaScript">
                <img src={javascript} alt="JavaScript" className="logo" />
              </div>
              <div className="logo-container" data-text="MongoDB">
                <img src={mongodb} alt="MongoDB" className="logo" />
              </div>
              <div className="logo-container" data-text="Node.js">
                <img src={nodejs} alt="Node.js" className="logo" />
              </div>
              <div className="logo-container" data-text="Redux">
                <img src={redux} alt="Redux" className="logo" />
              </div>
              <div className="logo-container" data-text="WordPress">
                <img src={wordpress} alt="WordPress" className="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-part">
          <a href={softwareResume} className="download-cv-button" download>Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default About;
