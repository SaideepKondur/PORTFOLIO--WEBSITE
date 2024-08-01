import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="container nav-container">
        <div className="nav-left">
          <a className="anchor" href='#home'>Saideep Kondur</a>
        </div>
        <div className="nav-right">
          <ul className='link-group'>
            <li className='hover-link'>
              <a className="anchor" href='#home'>Home</a>
            </li>
            <li className='hover-link'>
              <a className="anchor" href='#about'>About</a>
            </li>
            <li className='hover-link'>
              <a className="anchor" href='#projects'>Projects</a>
            </li>
            <li className='hover-link'>
              <a className="anchor" href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
