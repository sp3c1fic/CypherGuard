import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Terms.css";

const Terms = () => {
    return (
        <>
            <Header />
            <div className="terms-container">
                <div className="terms-heading-container">
                    <h2 className="terms-heading">Terms and Conditions</h2>
                </div>
                <div className="terms-content">
                    <section className="terms-section">
                        <h2 className="terms-subheading">Acceptance of Terms</h2>
                        <p className="terms-paragraph">
                            By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-subheading">Use of Website</h2>
                        <p className="terms-paragraph">
                            You may use this website for lawful purposes only. You may not use it in any way that could harm the website or interfere with its functionality.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-subheading">Intellectual Property</h2>
                        <p className="terms-paragraph">
                            The content on this website, including text, images, and logos, is protected by intellectual property laws. You may not reproduce, modify, or distribute any content from this website without written permission.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-subheading">Disclaimer</h2>
                        <p className="terms-paragraph">
                            This website is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy or completeness of the information on this website.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-subheading">Changes to Terms</h2>
                        <p className="terms-paragraph">
                            We may update these Terms and Conditions at any time. Please review this page periodically for changes. Your continued use of the website after changes have been made will constitute your acceptance of the revised terms.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Terms;