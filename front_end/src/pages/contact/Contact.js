import React, { useState } from "react";
import linkedin from '../../assets/gifs/linkedin.gif';
import github from '../../assets/gifs/github.gif';
import emailGif from '../../assets/gifs/email.gif';
import './Contact.scss';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setName('');
      setEmail('');
      setMessage('');
      setSuccessMessage('Message sent!');
    } else {
      console.error("Error", res);
      setSuccessMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="Contact">
      <div className="gif-container">
        <a href="https://www.linkedin.com/in/saideep-kondur/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="gif" />
        </a>
        <a href="https://github.com/SaideepKondur" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="gif" />
        </a>
        <a href="mailto:ksdr1s1@gmail.com">
          <img src={emailGif} alt="Email" className="gif" />
        </a>
      </div>
      <div id="contact" className="about-contact">
        <div className="top-part">
          <h1>Contact</h1>
          <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as <br/>possible</p>
        </div>
        <div className="bottom-part">
          <form onSubmit={onSubmit}>
            <p>Name</p>
            <input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}
              required/>
            <p>Message</p>
            <textarea name="message" placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)}required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
