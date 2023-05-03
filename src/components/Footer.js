import React from 'react'
//import {fontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import { faHippo} from "@fortawesome/fontawesome-svg-core"
import '../css/Footer.css'
function Footer() {
  return (
    <footer>
        <div className='row'>
            <div className='column'>
               <img src='' alt='' />
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
                <i className='fab fa-twitter'></i>
                <i className='fab fa-whatsapp'></i>
                <i className='fab fa-pinterest'></i>
              </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer