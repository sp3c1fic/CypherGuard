import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Privacy.css";

const Privacy = () => {
    return (
        <>
            <Header />
                <div className="privacy-container">
                    <div className="privacy-heading-container">
                        <h2 className="privacy-heading">Privacy Policy</h2>
                    </div>
                    <div className="privacy-content">
                        <section className="privacy-section">
                            <h2 className="privacy-subheading">Introduction:</h2>
                            <p className="privacy-paragraph">Welcome to the Privacy Policy of [Your Company Name]. At [Your Company Name], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="privacy-subheading">Information We Collect:</h2>
                            <p className="privacy-paragraph">When you use our website or services, we may collect various types of information, including:</p>
                            <ul className="privacy-list">
                                <li>Your name and contact details</li>
                                <li>Information you provide when contacting us</li>
                                <li>Information automatically collected, such as your IP address and device information</li>
                                <li>Usage data to help us understand how you interact with our website</li>
                            </ul>
                            <p className="privacy-paragraph">We use this information to improve our services, personalize your experience, and communicate with you effectively.</p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="privacy-subheading">How We Use Your Information:</h2>
                            <p className="privacy-paragraph">We use your information for various purposes, including:</p>
                            <ul className="privacy-list">
                                <li>Providing and maintaining our services</li>
                                <li>Communicating with you</li>
                                <li>Analyzing usage patterns and trends</li>
                                <li>Personalizing your experience</li>
                            </ul>
                            <p className="privacy-paragraph">We do not sell your information to third parties, and we take measures to protect your data.</p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="privacy-subheading">Cookies and Tracking:</h2>
                            <p className="privacy-paragraph">Our website may use cookies and similar technologies to enhance your browsing experience. These technologies help us understand how you interact with our website and tailor content to your preferences. You can manage your cookie preferences through your browser settings.</p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="privacy-subheading">Data Security:</h2>
                            <p className="privacy-paragraph">We take data security seriously. We implement measures to protect your information, including encryption, access controls, and regular security assessments. While we strive to safeguard your data, no method of transmission over the internet is entirely secure.</p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="privacy-subheading">Your Rights:</h2>
                            <p className="privacy-paragraph">You have certain rights regarding your personal information, including:</p>
                            <ul className="privacy-list">
                                <li>The right to access and obtain a copy of your data</li>
                                <li>The right to correct inaccuracies in your data</li>
                                <li>The right to delete your data in certain circumstances</li>
                                <li>The right to object to the processing of your data</li>
                            </ul>
                            <p className="privacy-paragraph">If you have questions or requests related to your rights, please contact us.</p>
                        </section>

                        <section className="privacy-section">
                            <h2 className="privacy-subheading">Changes to Our Privacy Policy:</h2>
                            <p className="privacy-paragraph">We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant updates and provide you with an opportunity to review the changes. Continued use of our services after changes have been made will constitute your acceptance of the revised policy.</p>
                        </section>
                    </div>
                </div>
            <Footer className="privacy-footer" />
        </>
    )
}

export default Privacy;