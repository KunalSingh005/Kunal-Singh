import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import MatrixPreloader from './components/MatrixPreloader'; // Preloader ko import karein
import Tour from './components/Tour';         // Tour ko import karein

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Yeh 4.5 seconds ke baad preloader ko hata dega
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    // Jab tak loading true hai, Preloader dikhayega
    if (loading) {
        return <Preloader />;
    }

    // Preloader ke baad, Tour aur baaki website dikhegi
    return (
        <div className="text-slate font-sans">
            <Tour /> {/* Tour component yahaan hai */}
            <Navbar />
            <main className="container mx-auto px-6 sm:px-10 md:px-16">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certificates />
            </main>
            <Footer />
        </div>
    );
};

export default App;