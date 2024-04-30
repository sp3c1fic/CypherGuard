import React, { useEffect, useState } from 'react';
import '../components/Expertise.css'

const Expertise = () => {
    const expertiseData = [
        { label: "Performance", percentage: 100 },
        { label: "Security", percentage: 100 },
        { label: "Reliability", percentage: 100 },
        { label: "Reputation", percentage: 100 }
    ];
    const [isInView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.expertise-section');
            const rect = element.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

            if (rect.top <= viewHeight * 0.7) {
                setInView(true)
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <section className={`expertise-section ${isInView ? 'animate' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            Bulletproof Cybersecurity <span>&</span> <em>Scam Prevention</em>
                        </h2>
                        <div className="description-container">
                            <p>
                                Cybersecurity and online scam protection are vital in today's digital world to safeguard sensitive data, prevent financial loss, preserve reputation, comply with regulations, ensure business continuity, counter evolving threats, and offer peace of mind in a globally connected environment.
                            </p>
                        </div>
                        {/* Add more expertise details here */}
                    </div>
                    <div className="col-md-6">
                        {/* You can add an image or visual elements here */}
                    </div>
                </div>
            </div>
            <div className="paragraph-container">
                {expertiseData.map((data, index) => (
                    <div className="paragraph" key={index}>
                        <div className={`circle-progress ${isInView ? 'animate' : ''}`} data-theme="dark">
                            <svg width="0" height="0">
                                <radialGradient id={`gradient-${index}`} cx="0" cy="0" r="2.067366" gradientUnits="objectBoundingBox" spreadMethod="pad" gradientTransform="matrix(0.896472 -0.443101 0.193797 0.392085 -0.014873 0.5)">
                                    <stop stopColor="#762C00" stopOpacity="1"></stop>
                                    <stop offset="1" stopColor="#FF711E" stopOpacity="1"></stop>
                                </radialGradient>
                            </svg>
                            <p className="progress-label" data-theme="dark">{data.label}</p>
                            <div className="circle-progress-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={data.percentage}>
                                <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" className="circle-progress">
                                    <circle className="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" strokeWidth="8"></circle>
                                    <path d="M 50 4 A 46 46 0 1 1 49.99919714854413 4.0000000070062" className="circle-progress-value" fill="none" stroke={`url(#gradient-${index})`} strokeWidth="8"></path>
                                    <text className="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" textAnchor="middle" fill="#999" dy="0.4em">{data.percentage}</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;