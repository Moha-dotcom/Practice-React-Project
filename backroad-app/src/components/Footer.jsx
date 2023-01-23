import React from 'react'
// import { AiFillTwitterCircle } from 'react-icons/ai';
import  { socialLinks } from '../data/data'
const Footer = () => {
  return (
    <div>

    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">featured</a>
        </li>
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(social => (
            <li key={social.key}>
            <a href={social.href}  target="_blank"  rel="noreferrer" className="footer-icon"
              >  
              {social.icons}
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
      
    </div>
  )
}

export default Footer
