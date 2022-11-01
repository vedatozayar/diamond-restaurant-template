import React, { Fragment, useState } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <Fragment>
      <div className='navbar'>
        <div className='container'>
          <FontAwesomeIcon className='logo' icon={faGem} />
          <FontAwesomeIcon
            className='menu-icon'
            icon={faBars}
            onClick={toggleNavbar}
          />
        </div>
      </div>
      {showNav && (
        <div className='scr-menu'>
          <div className='container'>
            <FontAwesomeIcon
              className='icon'
              icon={faX}
              onClick={toggleNavbar}
            />
          </div>
          <ul className='links'>
            <Link onClick={toggleNavbar} to='/'>
              <li>home</li>
            </Link>
            <Link onClick={toggleNavbar} to='/menu'>
              <li>Menu</li>
            </Link>
            <Link onClick={toggleNavbar} to='/about'>
              <li>about</li>
            </Link>
            <Link onClick={toggleNavbar} to='/contact'>
              <li>contact</li>
            </Link>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
