import React from 'react';
import '../styles/Navbar.css'; // Create corresponding CSS file


import slackIcon from "../assets/icons/slackIcon.svg"
import { GrSearch } from 'react-icons/gr';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navLinks'>
      <div className='leftNavLinks'>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <img width={30} src={slackIcon} alt="slackIcon" />
          <p>Slack</p>
        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <p>Product</p>
        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <p>Enterprise</p>
        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <p>Resources</p>
        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <p>Pricing</p>
        </div>
      </div>
      </div>
      <div className='rightNavLinks'>
      <div className='nav-item'>
        <div className='singleNavDiv'>
        <GrSearch />

        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <p>Sign in </p>
        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv '>
          <button className='btnVariantTwo'>Talk to sales</button>
        </div>
      </div>
      <div className='nav-item'>
        <div className='singleNavDiv'>
          <button className='btnVariantOne'>TRY FOR Free</button>
        </div>
      </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
