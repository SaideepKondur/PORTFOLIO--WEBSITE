import React from 'react';
import './Projects.scss';
import Project from '../../components/project/Project'; // Adjust the path as needed
import laptop from '../../assets/laptop.png';
import reactLogo from '../../assets/techlogo/react.png';
import nodejs from '../../assets/techlogo/nodejs.png';
import express from '../../assets/techlogo/express.png';
import mongodb from '../../assets/techlogo/mongodb.png';
import redux from '../../assets/techlogo/redux.png';
import wordpress from '../../assets/techlogo/wordpress.png';
import javascript from '../../assets/techlogo/javascript.png';
import html from '../../assets/techlogo/html.png';
import css from '../../assets/techlogo/css.png';
import mysql from '../../assets/techlogo/mysql.png'
import postgresql from '../../assets/techlogo/postgresql.png'
import strapiCMS from '../../assets/techlogo/strapiCMS.png'
import stripe from '../../assets/techlogo/stripe.png'
import cloudinary from '../../assets/techlogo/cloudinary.png'
import posterz from '../../assets/videos/posterz.mov';
import connectify from '../../assets/videos/connectify.mov'
import clemsonUniversity from '../../assets/videos/clemsonUniversitycah.mov'
import reactLogoBW from '../../assets/techlogo/Black&WhiteImages/reactjs-Black&white.png';
import nodeLogoBW from '../../assets/techlogo/Black&WhiteImages/nodejs-Black&white.png';
import strapiLogoBW from '../../assets/techlogo/Black&WhiteImages/strapi-Black&white.png';
import sqlLogoBW from '../../assets/techlogo/Black&WhiteImages/postgresql-Black&white.png';
import cloudBW from '../../assets/techlogo/Black&WhiteImages/cloud-Black&white.png';
import htmlBW from '../../assets/techlogo/Black&WhiteImages/html-Black&white.png';
import cssBW from '../../assets/techlogo/Black&WhiteImages/css-Black&white.png';
import wordpressBW from '../../assets/techlogo/Black&WhiteImages/icons8-wordpress-192.png';
import javascriptBW from '../../assets/techlogo/Black&WhiteImages/javascript-Black&white.png';
import mysqlBW from '../../assets/techlogo/Black&WhiteImages/mysql-Black&white.png';
import mongodbBW from '../../assets/techlogo/Black&WhiteImages/mongodb-Black&white.png';
import stripeLogoBW from '../../assets/techlogo/Black&WhiteImages/stripe-Black&white.png';

const projectsData = [
  {
    title: 'Posterz',
    // description: 'Posterz is an ecommerce web app built with the MERN stack and Strapi as the CMS. It uses Node.js, PostgreSQL, and Stripe for secure transactions and smooth user experience. The React and Redux frontend allows users to browse, categorize, add to cart, and checkout easily.',
    description: [
      'Connectify is a social media web app built with the MERN stack and Redux for state management.',
      'It includes secure JWT authentication, Cloudinary for picture sharing, and essential social features.',
      'Users can search, follow, like posts, and manage profiles effortlessly.'
    ],
    techLogos: [
      { src: reactLogoBW, alt: 'React' },
      { src: nodeLogoBW, alt: 'Node.js' },
      { src: strapiLogoBW, alt: 'StrapiCMS' },
      { src: sqlLogoBW, alt: 'PostgreSQL' },
      { src: stripeLogoBW, alt: 'Stripe' },
    ],
    videoSrc: posterz,
    imageSrc: laptop,
    link: 'https://posterz-ecommerce-client-g7t6o.ondigitalocean.app/#/'
  },
  {
    title: 'Connectify',
    description: [
      'Connectify is a social media web app built with the MERN stack and Redux for state management.',
      'It includes secure JWT authentication, Cloudinary for picture sharing, and essential social features.',
      'Users can search, follow, like posts, and manage profiles effortlessly.'
    ],
  
    techLogos: [
      { src: reactLogoBW, alt: 'React' },
      { src: nodeLogoBW, alt: 'Node.js' },
      { src: express, alt: 'Express' },
      { src: mongodbBW, alt: 'MongoDB' },
      { src: cloudBW, alt: 'Cloudinary' },
    ],
    videoSrc: connectify, // Use another video if available
    imageSrc: laptop, // Use another image if available
    link: 'https://connectify-social-media-website.vercel.app/#/login'
  },
  {
    title: 'Clemson University - Software Engineer Intern',
    // description: 'As a Software Engineer Intern at Clemson University, worked on websites using Cascade CMS, WordPress, HTML, CSS, JavaScript, MySQL, and PHPMyAdmin. Converted college and departmental websites to a new format based on design requirements. Optimized pages for QA and SEO by analyzing Google Analytics, reducing errors, and fixing broken links.',
    description: [
      'Connectify is a social media web app built with the MERN stack and Redux for state management.',
      'It includes secure JWT authentication, Cloudinary for picture sharing, and essential social features.',
      'Users can search, follow, like posts, and manage profiles effortlessly.'
    ],
    techLogos: [
      { src: wordpressBW, alt: 'Wordpress' },
      { src: javascriptBW, alt: 'Javascript' },
      { src: mysqlBW, alt: 'Mysql' },
      { src: htmlBW, alt: 'Html' },
      { src: cssBW, alt: 'Css' },
    ],
    videoSrc: clemsonUniversity, // Use another video if available
    imageSrc: laptop, // Use another image if available
    link: 'https://www.clemson.edu/cah/index.html'
  }
];

function Projects() {
  return (
    <div className="Projects">
      <div id="projects" className="projects-content">
        <div className="top-part">
          <h1>Projects</h1>
          <p>Here you will find some of the personal and professional projects that I created with each project 
          <br/>containing its own case study</p>
        </div>
        <div className="center-part">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              techLogos={project.techLogos}
              videoSrc={project.videoSrc}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
