import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaBarcode } from 'react-icons/fa'
import { AiFillSignal } from 'react-icons/ai'
import { links, social } from './data'
import logo from './logo.svg'


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return(
    <nav>
    <div className='nav-center'>
      <div className='nav-header'>
      <img src= {logo} alt="logo"/>
      <button className='nav-toggle' onClick={() => {setShowLinks(!showLinks)}}>
          <FaBars />
     
      </button>
      </div>
   

        <div className={`${showLinks ? "links-container show-container" :"links-container"}`}>
        <ul className='links'>
            {links.map((item) => {
              const {id, url, text} = item;
              return (
                <li key={id}>
                  <a  href={url}>{text}</a>
                </li>
              )
            })}
        </ul>
      </div>

    <ul className='social-icons'>
          {social.map((item) => {
            const {id, url, icon} = item;
            return (
              <li key={id}>
                <a  href={url}>{icon}</a>
              </li>
            )
          })}
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
