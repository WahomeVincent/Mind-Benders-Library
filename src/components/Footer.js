import React from 'react'
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import { faFacebookF, faInstagram, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
 import { faBook } from '@fortawesome/free-solid-svg-icons';

import '../css/Footer.css'
function Footer() {
  return (
    <footer>
        <div className='row'>
            <div className='column'>
               <FontAwesomeIcon className='book'icon={faBook}/>
               <p>Let us Give you what you deserve</p>
            </div>
            <div className='column'>
              <h3>Contacts <div className='underline'><span></span></div></h3>
              <p>Nairobi</p>
              <p>Ngong Road</p>
              <p className='email-id'>MindBenders@gmail.com</p>
              <h4>+254720895727</h4>
            </div>
            <div className='column'>
              <h3>Links <div className='underline'><span></span></div></h3>
              <ul>
                <li><a href="home">Home</a></li>
                <li><a href="sevices">Services</a></li>
                <li><a href="about">About</a></li>
              </ul>
            </div>
            <div className='column'>
              <div className='social-icons'>
                <h3>Socials <div className='underline'><span></span></div></h3>
                <FontAwesomeIcon className='icon' icon={faTwitter} />
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
                <FontAwesomeIcon className='icon' icon={faFacebookF}/>
                <FontAwesomeIcon className='icon' icon={faPinterest}/>
                <FontAwesomeIcon className='icon' icon={faWhatsapp}/>
              </div>
            </div>
        </div>
      <hr></hr>
      <p className='copyright'>MindBenders © 2023 - All rights reserved</p>
    </footer>
  )
}

export default Footer