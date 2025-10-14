import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CERTIFICATE_CATEGORIES } from '../constants';
import type { CertificateItem } from '../types';
import { CertificateIcon, ExternalLinkIcon } from './icons';
import FadeIn from './FadeIn';

// CertificateCard component (Ismein koi change nahi hai)
interface CertificateCardProps {
    certificate: CertificateItem;
    index: number;
    flippedIndex: number | null;
    setFlippedIndex: (index: number | null) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index, flippedIndex, setFlippedIndex }) => {
    const isFlipped = index === flippedIndex;

    const handleCardClick = () => {
        if (certificate.imageUrl) {
            setFlippedIndex(isFlipped ? null : index);
        }
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div 
            className={`flip-card group ${certificate.imageUrl ? 'cursor-pointer' : ''}`}
            onClick={handleCardClick}
        >
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front bg-navy p-6 shadow-lg flex flex-col group-hover:-translate-y-2 transition-transform duration-300 h-full">
                    <div className="flex justify-between items-center mb-4">
                        <CertificateIcon className="w-10 h-10 text-accent" />
                        <a 
                            href={certificate.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="text-light-slate hover:text-accent transition-colors z-10"
                            aria-label={`View certificate for ${certificate.title}`}
                        >
                            <ExternalLinkIcon className="h-6 w-6" />
                        </a>
                    </div>
                    <h3 className="text-lg font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300 mb-2">{certificate.title}</h3>
                    <p className="text-light-slate text-sm flex-grow mb-4">{certificate.description}</p>
                    <div className="mt-auto pt-4 border-t border-light-navy/20">
                        <ul className="flex flex-wrap gap-x-3 gap-y-2">
                            {certificate.tags.map(tag => (
                                <li key={tag} className="bg-light-navy text-xs font-mono text-accent px-3 py-1 rounded-full">{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flip-card-back bg-navy p-2 flex items-center justify-center">
                    {certificate.imageUrl ? (
                         <img src={certificate.imageUrl} alt={`${certificate.title} certificate preview`} className="w-full h-full object-contain rounded-md" loading="lazy" />
                    ) : (
                        <p className="text-light-slate text-center p-4">Certificate preview not available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Certificates component (Yeh poora badal gaya hai)
const Certificates: React.FC = () => {
    const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
    let globalCertIndex = 0;

    return (
        <section id="certificates" className="py-24">
            <FadeIn>
                <SectionTitle title="Professional Certificates" />
            </FadeIn>
            
            <div className="space-y-16">
                {CERTIFICATE_CATEGORIES.map((category) => (
                    <FadeIn key={category.title}>
                        <h3 className="text-xl font-bold text-lightest-slate mb-6 pl-4 border-l-4 border-accent">{category.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.certificates.map((cert, certIndex) => {
                                const currentIndex = globalCertIndex++;
                                return (
                                    <FadeIn key={cert.title + certIndex} delay={certIndex * 75}>
                                        <CertificateCard 
                                            certificate={cert}
                                            index={currentIndex}
                                            flippedIndex={flippedCardIndex}
                                            setFlippedIndex={setFlippedCardIndex}
                                        />
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
