import React from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate flex items-center mb-8 md:mb-12">
        {title}
        <span className="block w-full max-w-[200px] md:max-w-xs h-px bg-light-navy ml-4 md:ml-6"></span>
    </h2>
);

export default SectionTitle;