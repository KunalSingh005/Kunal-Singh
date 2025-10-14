
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const socialLinks = [
    { href: 'https://github.com/KunalSingh005', icon: GithubIcon, title: 'GitHub' },
    { href: 'https://www.linkedin.com/in/kunalsingh005', icon: LinkedinIcon, title: 'LinkedIn' },
    { href: 'mailto:kunalhlc10@gmail.com', icon: MailIcon, title: 'Email' },
];

const Footer: React.FC = () => {
    return (
        <footer className="py-8 text-center font-mono text-slate">
            <div className="flex justify-center items-center space-x-6 mb-4 md:hidden">
                 {socialLinks.map(({ href, icon: Icon, title }) => (
                    <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title} className="text-light-slate hover:text-accent transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
            <p className="text-sm transition-colors duration-300 hover:text-accent">Designed and built by Kunal Singh.</p>
            
            {/* Social links for desktop view */}
            <div className="hidden md:flex fixed bottom-0 left-6 lg:left-10 flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mt-6 animate-fade-in-up">
                {socialLinks.map(({ href, icon: Icon, title }) => (
                    <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title} className="text-light-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                    </a>
                ))}
            </div>

            <div className="hidden md:flex fixed bottom-0 right-6 lg:right-10 flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mt-6 animate-fade-in-up">
                <a href="mailto:kunalhlc10@gmail.com" className="[writing-mode:vertical-rl] tracking-widest text-sm text-light-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300">
                    kunalhlc10@gmail.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;