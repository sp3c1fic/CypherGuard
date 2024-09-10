import React, { useState } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContactForm } from './ContactFormContext';
import ContactForm from './ContactForm';
import LoadingSpinner from './LoadingSpinner';

const Hero = () => {

    const { showContactForm, openContactForm } = useContactForm();
    const [isLoading, setLoading] = useState(false);

    const handleButtonClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            openContactForm();
        }, 2000);
    }

    return (
      <section id="hero" className="hero">
          <div className="hero-content">
              <h1 className='hero-title'>Digital Safeguarding Solutions: Protecting You from Online Threats</h1>
              <p>Protecting Your Peace of Mind: Unmasking Scams, Shielding Your Future</p>
              <a href="#" className="cta-button" onClick={handleButtonClick}>Schedule a call <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} /></a>
          </div>
          {showContactForm && <ContactForm />}
          {isLoading && <LoadingSpinner />}
          <div className="hero-image">
              <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-391777,resizemode-75,msid-93665813/prime/prime-vantage/i-thought-i-wouldnt-fall-for-phishing-and-then-i-did-.jpg" alt="phishing" />
          </div>
      </section>
  );
};

export default Hero;