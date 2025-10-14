import React from 'react';
import SectionTitle from './SectionTitle';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons';
import FadeIn from './FadeIn';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-navy p-6 rounded-lg shadow-lg flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-between items-center mb-4">
            <svg className="w-10 h-10 text-accent" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-accent transition-colors">
                <GithubIcon className="h-6 w-6" />
            </a>
        </div>
        <h3 className="text-xl font-bold text-lightest-slate mb-2">{project.title}</h3>
        <p className="text-light-slate flex-grow mb-4">{project.description}</p>
        <div className="mt-auto pt-4 border-t border-light-navy/20">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate">
                {project.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24">
            <FadeIn>
                <SectionTitle title="My Projects" />
            </FadeIn>
            <FadeIn
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                stagger={100}
            >
                {PROJECTS_DATA.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </FadeIn>
        </section>
    );
};

export default Projects;