import React, { createContext, useState, useContext } from 'react';

const ContactFormContext = createContext();

export function useContactForm() {
  return useContext(ContactFormContext);
}

export function ContactFormProvider({ children }) {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
    console.log('works or not');
    setShowContactForm(true);

  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <ContactFormContext.Provider value={{ showContactForm, openContactForm, closeContactForm }}>
      {children}
    </ContactFormContext.Provider>
  );
}