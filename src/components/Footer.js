import React from 'react'


function Footer() {
  return (
      <footer className="footer">
    <div className="row">
        <div className="tag">About Us</div>
        <div className="tag">Terms & Conditions</div>
        <div className="tag">Privacy Policy</div>
    </div>
    <div className="socials">
        <a href="https://www.facebook.com/" >FaceBook</a>
        <a href="https://twitter.com/" >Twitter</a>
        <a href="https://www.instagram.com/" >Instagram</a>
        <a href="https://www.linkedin.com/" >LinkedIn</a>
    </div>
    <div className="contact">
        <div className="title">Contact Us</div>
        <div className="info">
            <span>MindBenders@company.com</span>
            <p>+254720895727</p>
            <p>0721268493</p>
        </div>
    </div>
    <div className="description">
        <p id='line'>Let us Give you what you deserve</p>
        <p>Copyright © 2023</p>
    </div>
</footer>
  )
}

export default Footer