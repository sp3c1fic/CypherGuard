import React from 'react'
import './Footer.css'
import { smoothScroll } from '../utils/smoothScroll';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();


  const handleNavigation = (sectionId) => {
    navigate('/'); // Navigate to the home page
    smoothScroll(sectionId, 1000);
  };


    return (
        <footer className='footer-element'>
          <div className="footer-content">
            <div className="brief-about">
              <h6 className="company-name">Cypher Guard</h6>
              <p className="footer-about-text">
                Empowering businesses with top-tier cybersecurity solutions, threat detection, and rapid incident response.
              </p>
            </div>
            <div className="nav-footer-content">
              <div className="endpoints">
                <h5 className="links-title">Links</h5>
                <div className="endpoints-container">
                  <a href="#about" onClick={() => smoothScroll('about', 1000)}>About</a>
                  <a href="#hero" onClick={() => smoothScroll('hero', 1000)}>Contact</a>
                </div>
              </div>
              <div className="footer-service-links">
                <h5>Services</h5>
                <div className="services-container">
                  <a href="#services" onClick={() => {
                      handleNavigation('services');
                }}>Scam Prevention</a>
                  <a href="#services"  onClick={() => {
                      handleNavigation('services');
                  }}>Cybersecuirty Consulting</a>
                  <a href="#services" onClick={() => {
                    handleNavigation('services');
                  }}>Threat Analysis</a>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom-content'>
            <div className="copy-right-container">
              <p>&copy; {currentYear} Cypher Guard. All rights reserved.</p>
            </div>
            <div className="terms-privacy">
              <Link className="terms-link" to="/terms">Terms and Conditions</Link>
              <Link className="privacy-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>
      </footer>
    );
};

export default Footer;