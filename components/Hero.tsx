import React from 'react';
import { MailIcon, PhoneIcon } from './icons';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <div className="w-full">
                <FadeIn delay={100}>
                    <p className="text-accent font-mono mb-4">Hello, my name is</p>
                </FadeIn>
                <FadeIn delay={200}>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-lightest-slate tracking-tight">Kunal Singh.</h1>
                </FadeIn>
                <FadeIn delay={300}>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate tracking-tight mt-2">Aspiring DevOps & Cloud Engineer.</h2>
                </FadeIn>
                <FadeIn delay={400}>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 items-center font-mono text-sm text-light-slate">
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="w-4 h-4 text-accent" />
                            {/* --- YEH LINE BADLI HAI --- */}
                            <a href="tel:9971356768" className="hover:text-accent transition-colors">9971356768</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MailIcon className="w-4 h-4 text-accent" />
                            <a href="mailto:Kunalhlc10@gmail.com" className="hover:text-accent transition-colors">Kunalhlc10@gmail.com</a>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={500}>
                     <p className="mt-6 max-w-xl text-light-slate">
                        I'm a proactive Technical Analyst and an aspiring DevOps Engineer with hands-on skills in Linux, scripting, and containerization. I'm eager to apply automation and cloud skills to build scalable, reliable systems.
                    </p>
                </FadeIn>
                <FadeIn delay={600}>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="/Kunal Singh Resume.pdf" target="_blank" rel="noopener noreferrer" 
                           className="inline-block text-accent border border-accent rounded px-8 py-4 font-mono hover:bg-accent/10 transition-colors duration-300">
                            Download Resume
                        </a>
                        <a href="https://github.com/KunalSingh005" target="_blank" rel="noopener noreferrer" 
                           className="inline-block text-accent border border-accent rounded px-8 py-4 font-mono hover:bg-accent/10 transition-colors duration-300">
                            Check out my GitHub
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
