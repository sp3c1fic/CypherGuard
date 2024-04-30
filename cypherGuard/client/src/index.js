import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContactFormProvider } from './components/ContactFormContext';
import { BrowserRouter as Router } from 'react-router-dom';

library.add(faSearch, faEnvelope, faUser, faLock);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContactFormProvider>
        <App />
      </ContactFormProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
