// App.tsx

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
import Tour from './components/Tour';
// --- YEH LINE BADLI HAI ---
import MatrixPreloader from './components/MatrixPreloader'; // Purane Preloader ki jagah isey import karein
import Tour from './components/Tour';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Aap iska time badha ya ghata sakte hain
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // 4 seconds

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        // --- AUR YEH LINE BADLI HAI ---
        return <MatrixPreloader />; // Yahaan naya component istemal karein
    }

    return (
        <div className="text-slate font-sans">
            {/* Tour wala code abhi ke liye hata diya hai */}
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