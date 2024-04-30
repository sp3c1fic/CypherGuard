import React from "react";

import AydenLogo from "../icons/adyen-logo.png";
import MollieLogo from "../icons/mollie-logo.png";
import NrcLogo from "../icons/de-handelsblad.png";
import "./HappyClients.css";

const HappyClients = () => {
    return (
        <section className="happy-clients">
            <h2 className="clients-title">Clients</h2>
            <div className="client">
                <img className="client-logo" src={AydenLogo} alt="Client 1" />
                <a href="https://www.adyen.com/">Adyen.nl</a>
            </div>
            <div className="client">
                <img className="client-logo" src={MollieLogo} alt="Client 2" />
                <a href="https://www.mollie.com/">Mollie.nl</a>
            </div>
            <div className="client">
                <img className="client-logo" src={NrcLogo} alt="Client 2" />
                <a href="https://www.nrc.nl/">NRC.nl</a>
            </div>
        </section>
    )
}

export default HappyClients