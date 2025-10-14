import React from 'react';
import SectionTitle from './SectionTitle';
import { SKILLS_DATA } from '../constants';
import FadeIn from './FadeIn';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <FadeIn>
                <SectionTitle title="Core Technical Skills" />
            </FadeIn>
            <FadeIn className="max-w-4xl space-y-4" stagger={100}>
                {SKILLS_DATA.map((category, index) => (
                    <div key={index} className="bg-navy p-6 rounded-lg border-l-4 border-accent transition-all duration-300 hover:bg-light-navy/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                        <p className="text-light-slate">
                            <strong className="font-bold text-lightest-slate">{category.title}:</strong> {category.skills}
                        </p>
                    </div>
                ))}
            </FadeIn>
        </section>
    );
};

export default Skills;