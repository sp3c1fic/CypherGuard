
import React from 'react';
import Header from './Header';
import Expertise from './Expertise';
import Service from './Service';
import Footer from './Footer';
import Hero from './Hero';
import Process from './Process';
import FAQ from './FAQ';
import About from './About';
import Call from './Call';
import HappyClients from './HappyClients';
import { useContactForm } from './/ContactFormContext';


const Home = () => {

    const { showContactForm }  = useContactForm();
    return (
        <div className={`App ${showContactForm ? 'overlay' : ''}`}>
            <Header />
            <main>
                <Hero />
                <Expertise />
                <Service />
                <Process />
                <About />
                <FAQ />
                <HappyClients />
                <Call />
            </main>
            <Footer />
    </div>
    )
}

export default Home;