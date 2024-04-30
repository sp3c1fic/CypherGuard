import React from 'react';
import '../components/Service.css'; // Import your CSS file for styling
import PhishIcon from '../icons/phishing.png'; 
import CyberIcon from '../icons/cyber-security.png';
import BugIcon from '../icons/bug-catcher.png';
import CheckmarkIcon from '../icons/check.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// function AnimatedServiceIcon({ icon }) {
//     return (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
//         {icon === 'shield' && (
//           <circle cx="50" cy="50" r="40" fill="#007BFF">
//             <animate attributeName="r" from="40" to="45" dur="0.5s" begin="0s" repeatCount="indefinite" />
//           </circle>
//         )}
//         {icon === 'lock' && (
//           <rect x="30" y="30" width="40" height="40" rx="10" ry="10" fill="#FFC107">
//             <animate attributeName="x" from="30" to="35" dur="0.5s" begin="0s" repeatCount="indefinite" />
//             <animate attributeName="width" from="40" to="45" dur="0.5s" begin="0s" repeatCount="indefinite" />
//           </rect>
//         )}
//         {icon === 'users' && (
//           <circle cx="50" cy="50" r="40" fill="#28A745">
//             <animate attributeName="cy" from="50" to="45" dur="0.5s" begin="0s" repeatCount="indefinite" />
//           </circle>
//         )}
//       </svg>
//     );
// }

   
const Service = () => {

    const scamPreventionItems = [
      'Real-Time Scam Detection',
      'Fraudulent Website Blocking',
      'Email Scam Alerts',
      'Identity Theft Protection',
      'Secure Online Transactions',
      'Social Media Scam Alerts',
      'Educational Resources',
      '24/7 Customer Support',
      'Customizable Alerts',
      'Regular Scam Reports'
    ];
    const cybersecurityConsultingServices = [
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Policy Development',
      'Incident Response Planning',
      'Security Awareness Training',
      'Risk Assessment',
      'Security Auditing',
      'Network Security',
      'Data Encryption Services',
      'Security Compliance Consulting'
  ];

  const threatIntelligenceServices = [
    'Threat Detection and Analysis',
    'Malware Analysis',
    'Security Information and Event Management (SIEM)',
    'Incident Response and Forensics',
    'Phishing Attack Analysis',
    'Anomaly Detection',
    'Security Data Visualization',
    'Cyber Threat Hunting',
    'Security Incident Classification',
    'Threat Intelligence Reporting'
];

    return (
        <section id="services" className="service-section">
            <div className="services-content-container">
                <h2 className="section-title" >services</h2>
                <p className="sub-description">We don't just protect your digital kingdom with our robust cybersecurity solutions. We fortify your defenses and shield your assets from online threats.</p>
                <h1 className="section-sub-title">What We Do</h1>
                <div className="service-cards">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={PhishIcon} alt="Lock Icon" className="lock-icon"/>
                        </div>
                        
                        <h3 className="service-title">Scam Prevention</h3>
                        <ul>
                          {scamPreventionItems.map((item, index) => (
                              <li key={index}>
                                  <img src={CheckmarkIcon} className="checkmark-icon" alt="Checkmark Icon" />
                                  {item}
                              </li>
                          ))}
                        </ul>
                        <hr />
                        <p className="service-description">Stay one step ahead of scammers with our real-time scam detection and protection services</p>   
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={CyberIcon} alt="Cyber Icon" className="cyber-icon"/>
                        </div>
                        <h3 className="service-title">Cybersecurity Consulting</h3>
                        <ul>
                            {cybersecurityConsultingServices.map((item, index) => (
                              <li key={index}>
                                <img src={CheckmarkIcon} className="checkmark-icon" alt="Checkmark Icon" />
                                {item}
                              </li>
                            ))}
                        </ul>
                        <hr />
                        <p className="service-description">Elevate your digital defenses with our expert cyber security consulting services.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <img className="bug-icon" src={BugIcon} alt='Bug Icon'/>
                        </div>
                        <h3 className="service-title">Threat Intelligence Analysis</h3>
                        <ul>
                          {threatIntelligenceServices.map((item, index) => (
                            <li key={index}>
                              <img src={CheckmarkIcon} className="checkmark-icon" alt="Checkmark Icon"/>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <hr />
                        <p className="service-description">Gain an upper hand against evolving cyber threats through our advanced threat intelligence analysis</p>    
                    </div>
                </div>
                <div className="button-container">
                          <button className="tell-me-more-button">Tell Me More <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} /></button>
                    </div>
            </div>
        </section>
    );
};

export default Service;