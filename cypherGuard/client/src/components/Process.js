import React from 'react';
import OneIcon from '../icons/003-number-one.png';
import TwoIcon from '../icons/002-two.png';
import ThreeIcon from '../icons/001-three.png';
import FourIcon from '../icons/004-number-four.png';

import './Process.css'; 

const Process = () => {


    return (
        <section className="process-section">
            <h2 className="process-section-heading">Our Process</h2>
            <h1 className="process-title">How We Do It</h1>
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-icon">
                        {/* You can use an appropriate icon here */}
                        <img src={OneIcon} alt="Step 1" className="strategy-icon" />
                    </div>
                    <div className="step-content">
                        <h3>Risk Assessment</h3>
                        <p className="process-description">Our strategy commences with a thorough risk assessment pinpointing vulnerabilities in your digital assets.<br /> 
                            We maintain constant vigilance, staying ahead of emerging threats and adhering to industry regulations. <br />
                            Tailored security measures and incident response plans protect your organization, <br/> ensuring resilience against scams and cyber threats.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-icon">
                        {/* You can use an appropriate icon here */}
                        <img src={TwoIcon} alt="Step 2" className="strategy-icon" />
                    </div>
                    <div className="step-content">
                        <h3>Threat Intelligence Gathering</h3>
                        <p className="process-description">Our strategy commences with a thorough risk assessment pinpointing vulnerabilities in your digital assets.<br /> 
                            We maintain constant vigilance, staying ahead of emerging threats and adhering to industry regulations. <br />
                            Tailored security measures and incident response plans protect your organization, <br/> ensuring resilience against scams and cyber threats.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-icon">
                        {/* You can use an appropriate icon here */}
                        <img src={ThreeIcon} alt="Step 2" className="strategy-icon" />
                    </div>
                    <div className="step-content">
                        <h3>Security Measures Implementation</h3>
                        <p className="process-description">Our strategy commences with a thorough risk assessment pinpointing vulnerabilities in your digital assets.<br /> 
                            We maintain constant vigilance, staying ahead of emerging threats and adhering to industry regulations. <br />
                            Tailored security measures and incident response plans protect your organization, <br/> ensuring resilience against scams and cyber threats.</p>
                    </div>
                </div>
                <div className="process-step">
                    <div className="step-icon">
                        {/* You can use an appropriate icon here */}
                        <img src={FourIcon} alt="Step 2" className="strategy-icon" />
                    </div>
                    <div className="step-content">
                        <h3>Incident Response Planning</h3>
                        <p className="process-description">Our strategy commences with a thorough risk assessment pinpointing vulnerabilities in your digital assets.<br /> 
                            We maintain constant vigilance, staying ahead of emerging threats and adhering to industry regulations. <br />
                            Tailored security measures and incident response plans protect your organization, <br/> ensuring resilience against scams and cyber threats.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;