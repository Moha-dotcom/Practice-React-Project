import React from 'react'
// import { AiFillTwitterCircle } from 'react-icons/ai';
import logo from '../images/logo.svg'
import pageLink, { socialLinks } from '../data/data'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" >

        {pageLink.map(item => (
         
             <li key={item.id}>
            <a href={item.href} className="nav-link"> {item.text} </a>
            </li>
          
        ))}

    </ul>


        <ul className="nav-icons">
          {socialLinks.map(social => (
              <li key={social.id}>
              <a href={social.href} className="nav-icon">
                  {social.icons}
                  </a>
            </li>
          ))}
      
        </ul>
      </div>
    </nav>

      
    </div>
  )
}

export default NavBar
