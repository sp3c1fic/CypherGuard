import React, { useState, useEffect }  from 'react';
import '../styles.css';

import { useNavigate } from "react-router-dom";
import CyberLogo from '../icons/hacker-skull.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { smoothScroll } from '../utils/smoothScroll';


const Header = () => {

    const [showHeader, setShowHeader] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const navigate = useNavigate();


    useEffect(() => {
        setShowHeader(true);
        // smoothScroll('about', 1000);
    }, []);


    const handleNavigation = (sectionId) => {
      navigate('/'); // Navigate to the home page
      smoothScroll(sectionId, 1000);
    };


    return (
        <header  className={`header ${showHeader ? '' : 'hidden'}`}>
        <nav>
          <ul>
            <li>
              <a
                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                href="#about"
                onClick={() => {
                  setActiveLink('Home');
                  handleNavigation('about'); // Call the first function
                      // Call the second function
                }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                About
              </a>
            </li>
            <li className='mobile-classname'>
              <a
                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                href="#call"
                onClick={() => {
                  setActiveLink('Home'); // Call the first function
                  handleNavigation('call');     // Call the second function
                }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
          <h4>Cypher</h4>
          <img className="cyber-logo" src={CyberLogo}/>
          <h4>Guard</h4>
        </div>
        <div className="nav-right">
          <a className="nav-button login-btn"  onClick={() => {
                  setActiveLink('Home'); // Call the first function
                  handleNavigation('call');     // Call the second function
                }}
          >
          Free Consultation <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }}/></a>
        </div>
      </header>
    );
};

export default Header;