import React from 'react';
import './About.css'
import CEOImage from '../icons/ceo_modified.png'

const About = () => {
    return (
        <section id="about" className="about-ceo-section">
        <div className="ceo-section-container">
        
        <div className="ceo-content">
            <h2 className="ceo-section-title">About</h2>
            <div className="ceo-image">
                <img src={CEOImage} alt="CEO's Portrait" />
            </div>
            <div className="ceo-description">
                <h3 className="ceo-title">About the Ceo</h3>
                <p>Meet Mr. Dimitrov, the driving force behind <span>CypherGuard</span>. With a passion for cybersecurity and a vision for a safer digital world, Mr.Dimitrov has been leading our organization with unwavering dedication.</p>
                <h3>A Cybersecurity Visionary</h3>
                <p>Mr.Dimitrov is a renowned figure in the cybersecurity industry, with a career spanning <span>10+</span> years. Their journey began with a deep-seated fascination for technology and a determination to protect it from emerging threats.</p>
                <h3>Years of Expertise</h3>
                <p>Over the years, Mr.Dimitrov has accumulated a wealth of knowledge and experience in the field of cybersecurity. They have played a pivotal role in developing cutting-edge security solutions that have safeguarded countless individuals and organizations.</p>
                <h3>A Commitment to Excellence</h3>
                <p>Mr.Dimitrov's commitment to excellence is the driving force behind <span>CypherGuard's</span> success. They believe that everyone deserves a secure digital environment, and their leadership has made this vision a reality.</p>
                <h3>Leading the Charge</h3>
                <p>As CEO, Mr.Dimitrov continues to lead the charge in the fight against online scams, cyber threats, and data breaches. Their strategic insights and dedication inspire our team to push boundaries and set new industry standards.</p>
                <h3>Join Mr.Dimitrov on the Journey</h3>
                <p><span>CypherGuard</span> invites you to join Mr. Dimitrov on this journey to a safer digital future. Together, we can navigate the complex landscape of cybersecurity and emerge stronger, more secure, and better protected.</p>
                <h3>The Idea Behind the <span>CypherGuard</span></h3>
                <p>In an era marked by the relentless march of digitization, our journey began with a profound realization – the world was becoming increasingly interconnected, but so were the threats. As the digital realm expanded, so too did the perils of cyber threats and online scams. 
                    It was this recognition that drove our founder to take action. Driven by a passion for safeguarding individuals and organizations in this digital age, [Your Company Name] was born. Our mission from day one has been clear: to protect and empower people in an era where cybersecurity is paramount. 
                    We are dedicated to standing as a stalwart defense against the rising tide of cyber threats, providing cutting-edge solutions that grant you peace of mind in an increasingly digital world."</p>
            </div>
        </div>
    </div>
</section>

    );
}

export default About;