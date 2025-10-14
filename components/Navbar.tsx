import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'} animate-slide-down`}>
                <nav className="container mx-auto px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center">
                    <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-accent font-mono text-2xl border-2 border-accent p-2 hover:bg-accent/10 transition-colors duration-300">
                        KS
                    </a>
                    
                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="font-mono text-lightest-slate hover:text-accent transition-colors duration-300">
                               {link.name}
                            </a>
                        ))}
                    </div>

                    <button onClick={() => setIsOpen(true)} className="md:hidden text-accent" aria-label="Open menu">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </nav>
            </header>
            
            <div 
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            <aside className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-navy shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 md:hidden`}>
                <div className="p-4 flex justify-end">
                     <button onClick={() => setIsOpen(false)} className="text-accent" aria-label="Close menu">
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full -mt-16">
                     <nav className="flex flex-col items-center space-y-8">
                         {NAV_LINKS.map((link) => (
                             <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="font-mono text-xl text-lightest-slate hover:text-accent transition-colors duration-300">
                                {link.name}
                             </a>
                         ))}
                     </nav>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
