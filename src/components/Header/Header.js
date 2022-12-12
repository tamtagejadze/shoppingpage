import React from 'react';
import Logo from '../Images/logo.png';
import {MdOutlineShoppingCart} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';

function Header() {
  return (
    <>
      <nav className='nav'>
          <div className='left'><img className='logo' src={Logo}/></div>
          <div className='right'>
              <li><MdOutlineShoppingCart className='icon'/></li>
              <li><MdFavoriteBorder onClick={()=>alert('გთხოვთ გაიარეთ ავტორიზაცია')} className='icon'/></li>
              <li><FaRegUserCircle className='icon'/></li>
          </div>
      </nav>
      <nav className='nav-bottom'>
        <li>მთავარი</li>
        <li>ქალი</li>
        <li>მამაკაცი</li>
        <li>ბავშვი</li>
        <li>კონტაქტი</li>
      </nav>
    </>
  )
}

export default Header