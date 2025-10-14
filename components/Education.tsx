import React from 'react';
import SectionTitle from './SectionTitle';
import { EDUCATION_DATA } from '../constants';
import FadeIn from './FadeIn';

const Education: React.FC = () => {
    return (
        <section id="education" className="py-24">
            <FadeIn>
                <SectionTitle title="Education" />
            </FadeIn>
            <FadeIn className="max-w-2xl">
                {EDUCATION_DATA.map((edu, index) => (
                    <div key={index} className="bg-navy p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                        <h3 className="text-xl font-bold text-lightest-slate">{edu.degree}</h3>
                        <p className="text-accent text-lg mt-1">{edu.institution}</p>
                        <p className="text-light-slate font-mono text-sm mt-2">{edu.year}</p>
                    </div>
                ))}
            </FadeIn>
        </section>
    );
};

export default Education;