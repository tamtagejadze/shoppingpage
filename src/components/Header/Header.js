import React from 'react';
import Logo from '../../Images/logo.png';
import {MdOutlineShoppingCart} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import i18n from '../../i18next/i18n';
import geo from '../../Images/geo.png';
import eng from '../../Images/eng.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
  const {t}=useTranslation() 
  return (
    <>
      <nav className='nav'>
          <div className='left'>
            <Link to="/">
              <img className='logo' src={Logo}/>
            </Link>
          </div>
          <div className='right'>
              <li><Link to="/cart"><MdOutlineShoppingCart className='icon'/></Link></li>
              <li><MdFavoriteBorder onClick={()=>alert('გთხოვთ გაიარეთ ავტორიზაცია')} className='icon'/></li>
              <li><FaRegUserCircle className='icon'/></li>
              <li>
                <div className='flag'>
                  <img className='geo' src={geo} onClick={() => i18n.changeLanguage("geo")} />
                  <img className='eng' src={eng} onClick={() => i18n.changeLanguage("eng")} />              
                </div>
              </li>
          </div>
      </nav>
      <nav className='nav-bottom'>
        <li>{t('HOME')}</li>
        <li>{t('FEMALE')}</li>
        <li>{t('MALE')}</li>
        <li>{t('CHILD')}</li>
        <li>{t('CONTACT')}</li>
      </nav>
    </>
  )
}

export default Header