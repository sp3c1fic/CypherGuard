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
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hst.world%2Fwp-content%2Fuploads%2F2021%2F01%2FECP_VV_Safety_12fps_2_3.gif&f=1&nofb=1&ipt=8a5004a6ec8ed3fd912b9ce82ace05136a1be608e08fbbad118733b0e424d7f4&ipo=images" alt="phishing" />
          </div>
      </section>
  );
};

export default Hero;