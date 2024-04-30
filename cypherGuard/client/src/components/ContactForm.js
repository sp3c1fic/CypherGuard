import React from "react";
import "./ContactForm.css";
import { useContactForm } from "./ContactFormContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { validate } from "../utils/validate";
import { faPhone, faEnvelope, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

function ContactForm() {

    const { showContactForm, closeContactForm } = useContactForm();

    return (
        <div className={`contact-form ${showContactForm ? 'active' : ''}`}>
            <form>
                <h2>Contact Us</h2>
                <button className="close-button" onClick={closeContactForm}><FontAwesomeIcon icon={faTimes} className="close-btn-icon"/></button>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    validate();
                }}>Submit</button>
            </form>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-info-container">
                    <p> <span className="phone-span"><FontAwesomeIcon icon={faPhone} /> Phone:</span> +31 6 136 204 19</p>
                    <p><span className="email-span"><FontAwesomeIcon icon={faEnvelope} /> Email:</span> dafgasg94@gmail.com</p>
                    <p><span className="address-span"><FontAwesomeIcon icon={faMapMarkerAlt} /> Address:</span> Bareveld 2, Nieuwediep, 9512SB</p>
                </div>
            </div>
    </div>
    );
}

export default ContactForm;