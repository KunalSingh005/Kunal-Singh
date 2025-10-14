import React from 'react';
import SectionTitle from './SectionTitle';
import FadeIn from './FadeIn';

const About: React.FC = () => {
    const skills = ['AWS', 'Docker', 'CI/CD', 'Git', 'Linux', 'Python'];

    return (
        <section id="about" className="py-24">
            <FadeIn>
                <SectionTitle title="About Me" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
                <FadeIn delay={100} className="md:col-span-3 text-light-slate space-y-4">
                    <div>
                        <p>As a proactive Technical Analyst and an aspiring DevOps Engineer, I have hands-on skills in Linux administration, Bash/Python scripting, and containerization using Docker. With a proven ability to improve operational efficiency, I am eager to apply my automation and cloud skills to build scalable, reliable systems.</p>
                        <p>I am actively self-learning advanced DevOps concepts through online platforms like KodeKloud and YouTube tutorials, and I consistently practice cloud and containerization skills on personal projects. My goal is to leverage technology to create efficient and robust IT solutions.</p>
                        <p>Here are a few of the technologies I've been working with recently:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm mt-4">
                            {skills.map(skill => (
                                <li key={skill} className="flex items-center">
                                    <span className="text-accent mr-2">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
                <FadeIn delay={200} className="md:col-span-2 relative group w-full max-w-sm mx-auto">
                    <div>
                        <div className="absolute inset-0 bg-accent rounded-lg transform transition duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                        <div className="relative bg-navy rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/seed/devops/500/500" alt="Tech" className="w-full h-full object-cover transition duration-300 group-hover:grayscale-0 grayscale" />
                            <div className="absolute inset-0 bg-dark-navy/50 group-hover:bg-dark-navy/20 transition duration-300"></div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default About;