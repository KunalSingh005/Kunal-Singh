import React from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';
import FadeIn from './FadeIn';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="relative pl-8 sm:pl-12 pb-12">
        <div className="absolute left-0 top-1 w-4 h-4 bg-dark-navy border-2 border-accent rounded-full z-10"></div>
        <div className="absolute left-[7px] top-1 h-full w-px bg-light-navy"></div>
        
        <p className="font-mono text-sm text-light-slate mb-1">{item.date}</p>
        <h3 className="text-xl font-bold text-lightest-slate">{item.title}</h3>
        <p className="text-accent mb-4">{item.company}</p>
        <ul className="space-y-2 text-light-slate">
            {item.description.map((desc, index) => (
                <li key={index} className="flex">
                    <span className="text-accent mr-3 mt-1">▹</span>
                    <span>{desc}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24">
            <FadeIn>
                <SectionTitle title="Work Experience" />
            </FadeIn>
            <div className="max-w-3xl">
                {EXPERIENCE_DATA.map((item, index) => (
                    <FadeIn key={index} animation="slide-in-left" delay={index * 150}>
                        <ExperienceCard item={item} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Experience;