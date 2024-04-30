import './FAQ.css'
import React, { useState } from "react";


const FAQ = () => {

    // Define an array of FAQ items with questions and answers
    const faqItems = [
        {
          question: 'How Does Scam Prevention Work?',
          answer: 'Scam prevention is a multi-layered approach involving real-time detection techniques, the blocking of fraudulent websites, email scam alerts, and identity theft protection. It encompasses secure online transactions, social media scam alerts, educational resources, 24/7 customer support, customizable alerts, and regular scam reports to ensure comprehensive protection against online scams.',
        },
        {
          question: 'What Are the Key Benefits of Cybersecurity Consulting?',
          answer: 'Cybersecurity consulting offers a range of benefits, including a detailed risk assessment to identify vulnerabilities in your digital assets. It helps maintain vigilance by staying ahead of emerging threats and ensuring compliance with industry regulations. Our consulting services provide tailored security measures and incident response plans to safeguard your organization effectively.',
        },
        {
          question: 'How Can Threat Intelligence Analysis Benefit My Business?',
          answer: 'Threat intelligence analysis is a crucial component of cybersecurity strategy. It keeps your business informed about emerging threats, helps it stay compliant with industry regulations, and enhances security measures. By analyzing threat intelligence, your organization can proactively respond to potential cyber threats, ensuring the resilience of your digital assets.',
        },
        {
          question: 'Why Is Incident Response Planning Essential in Cybersecurity?',
          answer: ' Incident response planning is vital in cybersecurity as it prepares your organization to effectively handle and mitigate the impact of cyberattacks. By having a well-defined plan in place, you can minimize the damage caused by a breach, reduce downtime, and protect sensitive data. It also ensures a coordinated and swift recovery process to get your operations back to normal.',
        },
        {
          question: 'What Sets Your Customer Support Apart?',
          answer: ' Our customer support team is dedicated to providing exceptional service. Available round-the-clock, they are well-versed in cybersecurity matters and ready to assist with any inquiries or concerns you may have. Their expertise ensures that you receive timely and effective support, helping you navigate the complexities of cybersecurity with confidence.',
        },
        // Add more FAQ items as needed
      ];

      const [openItems, setOpenItems] = useState([]);

      const toggleItem = (index) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter((item) => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
      };

      return (
        <section className="faq-section">
          <div className="faq-content">
            <h2 className="faq-section-title">FAQs</h2>
            <div className="faq-items">
              {faqItems.map((item, index) => (
                <div key={index} className={`faq-item ${openItems.includes(index) ? 'open' : ''}`}>
                  <div className="faq-question" onClick={() => toggleItem(index)}>
                    <h3 className="question-text">{item.question}</h3>
                    <div className="toggle-icon">{openItems.includes(index) ? '-' : '+'}</div>
                  </div>
                  {openItems.includes(index) && <p className="faq-answer">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    
};

export default FAQ;