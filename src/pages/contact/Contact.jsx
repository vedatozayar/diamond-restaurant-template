import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='header-container'>
          <h1>
            <span>Need Help?</span>
            <br></br>contact us
          </h1>
        </div>
      </div>
      <div className='form-container'>
        <div className='form'>
          <div className='form-element'>
            <label>Name</label>
            <input className='input' type='text' />
          </div>
          <div className='form-element'>
            <label>Email</label>
            <input className='input' type='email' />
          </div>
          <div className='form-element'>
            <label>Name</label>
            <textarea className='input' type='text' />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className='connect-info'>
        <div className='container'>
          <h2>Connect</h2>
          <div className='mail'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>support@gmail.com</span>
          </div>
          <div className='phone'>
            <FontAwesomeIcon icon={faPhone} />
            <span>+123 456 78 90</span>
          </div>

          <div className='socials'>
            <h2>follow us</h2>
            <div className='icons'>
              <FontAwesomeIcon className='social' icon={faFacebook} />
              <FontAwesomeIcon className='social' icon={faTwitter} />
              <FontAwesomeIcon className='social' icon={faInstagram} />
              <FontAwesomeIcon className='social' icon={faYoutube} />
              <FontAwesomeIcon className='social' icon={faSnapchat} />
            </div>
          </div>
          <div className='address'>
            <h2>Our Adress</h2>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>916 Morris Street,San Antonio,TX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
