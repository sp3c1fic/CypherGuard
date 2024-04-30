import './Call.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContactForm } from './ContactFormContext';
import ContactForm from './ContactForm';
import LoadingSpinner from './LoadingSpinner';

const Call = () => {

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
        <section id="call" className="call-section">
            <div className="call-content">
                <h4 className="call-over-title">Let's get started</h4>
                <h2 className="call-section-title">Schedule a <span className="call-span">FREE</span> Discovery Call!</h2>
                <p className="call-section-paragraph">Schedule a free 30 minute call so we can go over what your needs are and see if we are the right agency for you.</p>
                <button className="call-button" onClick={handleButtonClick}>SCHEDULE A CALL <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} /> </button>
            </div>
            {showContactForm && <ContactForm />}
            {isLoading && <LoadingSpinner />}
        </section>
    );
}

export default Call;