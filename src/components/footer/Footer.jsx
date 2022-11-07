import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='upper'>
        <div className='upper-content'>
          <div className='logo-container'>
            <FontAwesomeIcon className='logo' icon={faGem} />
          </div>
          <span className='footer-message'>Stay updated with deals</span>
          <form className='footer-form'>
            <input
              type='email'
              className='footer-email'
              placeholder='Email Address'
            />
            <button className='footer-button'>SUBMIT</button>
          </form>
        </div>
      </div>
      <div className='lower'>
        <div className='container'>
          <div className='links'>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='link' to='/menu'>
                  Menu
                </Link>
              </li>
              <li>
                <Link className='link' to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className='link' to='/contact'>
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='socials'>
            <FontAwesomeIcon className='social' icon={faFacebook} />
            <FontAwesomeIcon className='social' icon={faTwitter} />
            <FontAwesomeIcon className='social' icon={faInstagram} />
            <FontAwesomeIcon className='social' icon={faYoutube} />
            <FontAwesomeIcon className='social' icon={faSnapchat} />
          </div>
          <div className='site-info'>
            <span>© 2022 Diamond Restaurant Template</span>
            <br></br>
            <span>Developed by vedat edip özayar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
