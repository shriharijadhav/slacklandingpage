import React from 'react'
import "../styles/header.css"

import searchIcon from '../assets/icons/searchIcon.svg';
import connectionIcon from '../assets/icons/connectionIcon.svg';
import wifiIcon from '../assets/icons/wifiIcon.svg';
import batteryIcon from '../assets/icons/batteryIcon.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='header'>
           <Navbar />

    </div>
  )
}

export default Header
