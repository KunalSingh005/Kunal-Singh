import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="text-slate font-sans">
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