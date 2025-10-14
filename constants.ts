import type { ExperienceItem, Project, SkillCategory, EducationItem, CertificateCategory } from './types';

export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        date: 'Feb 2024 – Jun 2025',
        title: 'Technical Support Analyst',
        company: 'Kimbal Technology, Greater Noida',
        description: [
            'Improved operational efficiency for the team by 40% through process optimization and rapid technical issue resolution.',
            'Maintained high quality standards by resolving complex internal technical issues related to systems and software.',
            'Managed and coordinated with a team of 10 members, ensuring smooth project workflows and effective collaboration.',
        ],
    },
    {
        date: 'Nov 2022 – Nov 2023',
        title: 'Information Technology Intern',
        company: 'India Habitat Centre, Delhi',
        description: [
            'Offered on-site technical assistance and troubleshooting for Windows and Mac OS.',
            'Managed user accounts and permissions in Windows environments.',
            'Assisted with network connectivity issues and basic hardware maintenance.',
        ],
    },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'Dockerized Application Deployment on AWS',
        description: 'Containerized a static portfolio website using Docker and Nginx, deployed it to an AWS EC2 instance, and pushed the final image to a public Docker Hub registry.',
        tech: ['Docker', 'AWS EC2', 'Nginx'],
        repoUrl: 'https://github.com/KunalSingh005/dockerized-portfolio-website',
    },
    {
        title: 'Portfolio with CI/CD Pipeline',
        description: 'Engineered an automated CI/CD pipeline using GitHub Actions to deploy my personal portfolio website to GitHub Pages on every code push.',
        tech: ['GitHub Actions', 'CI/CD'],
        repoUrl: 'https://github.com/KunalSingh005/portfolio-website-cicd',
    },
    {
        title: 'Automated Folder Backup Script',
        description: 'Developed a Bash script to automate daily backups of specified folders by compressing them, designed to be scheduled via cron jobs for efficiency.',
        tech: ['Bash', 'Automation', 'Cron'],
        repoUrl: 'https://github.com/KunalSingh005/auto-folder-backup',
    },
    {
        title: 'Log Cleaner Script',
        description: 'A simple but practical Bash script to find and delete old `.log` and `.tmp` files to keep a Linux system clean.',
        tech: ['Bash', 'Linux'],
        repoUrl: 'https://github.com/KunalSingh005/log-cleaner-script',
    },
];

export const SKILLS_DATA: SkillCategory[] = [
    { title: 'Cloud & DevOps', skills: 'AWS (EC2, S3, IAM), Docker, GitHub Actions, CI/CD, Git' },
    { title: 'Operating Systems', skills: 'Linux (Ubuntu), Windows' },
    { title: 'Scripting Languages', skills: 'Bash, Python (Basic)' },
    { title: 'Web Technologies & Tools', skills: 'WordPress, AI-Powered Tools (e.g., GitHub Copilot, ChatGPT, Gemini)' },
    { title: 'Core Concepts', skills: 'Automation, System Administration, Containerization' },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Rajdhani College, Delhi (IGNOU)',
        year: 'Pursuing – Expected 2028',
    },
];

// Poora certificate data yahaan hai
export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
    {
        title: 'Foundations (IT + Basic Cybersecurity)',
        certificates: [
            { title: 'Google IT Support Certificate', description: 'Certified in IT support fundamentals, troubleshooting, networking, and operating systems.', tags: ['IT Support', 'Networking'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Introduction to Information Security', description: 'Certified in foundational information security principles and practices.', tags: ['Security', 'InfoSec'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Introduction to Cyber Security', description: 'Certified in core cybersecurity concepts, risks, and defense strategies.', tags: ['Cybersecurity'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
    {
        title: 'Linux & System Administration',
        certificates: [
            { title: 'NDG Linux Unhatched', description: 'Certified in Linux essentials, command line, and system administration.', tags: ['Linux', 'SysAdmin'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Google: Linux and SQL', description: 'Certified in Linux and SQL for system and database management.', tags: ['Linux', 'SQL'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
    {
        title: 'Programming & Scripting',
        certificates: [
            { title: 'Python Basic Certificate', description: 'Certified in Python programming fundamentals.', tags: ['Python', 'Scripting'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Google: Automate Cybersecurity with Python', description: 'Certified in using Python to automate security workflows.', tags: ['Python', 'Automation'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
    {
        title: 'Cloud & Infrastructure',
        certificates: [
            { title: 'AWS For Beginners', description: 'Certified in AWS cloud fundamentals, IAM, EC2, and S3.', tags: ['AWS', 'Cloud'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Coursera: AWS S3 Basics', description: 'Certified in AWS S3 storage, configuration, and management.', tags: ['AWS S3', 'Storage'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
    {
        title: 'DevOps Tools & Practices',
        certificates: [
            { title: 'DevOps Prerequisite Course', description: 'Certified in DevOps foundations, version control, and CI/CD basics.', tags: ['DevOps', 'CI/CD'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Docker Best Practices', description: 'Certified in Docker containerization and deployment best practices.', tags: ['Docker', 'Containers'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
    {
        title: 'Core Cybersecurity (Google Specialization)',
        certificates: [
            { title: 'Google Cybersecurity Certificate', description: 'Certified in cybersecurity fundamentals—Python, Linux, SQL, SIEM, IDS, and threat mitigation.', tags: ['Security', 'Google', 'SIEM'], url: 'https://coursera.org/share/caba244fc64f5b0c36ac54679e22f50c', imageUrl: '/certificates/google-cybersecurity.jpg' },
            { title: 'Google: Assets, Threats, and Vulnerabilities', description: 'Certified in identifying assets, threats, and vulnerabilities in security contexts.', tags: ['Security', 'Risk'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Google: Networks and Network Security', description: 'Certified in networking fundamentals and network security practices.', tags: ['Networking', 'Security'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
    {
        title: 'Advanced Cybersecurity & Specialization',
        certificates: [
            { title: 'Advanced Cyber Security - Threats and Governance', description: 'Certified in advanced cybersecurity governance, compliance, and risk management.', tags: ['Advanced Security'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
            { title: 'Introduction to Ethical Hacking', description: 'Certified in ethical hacking fundamentals and penetration testing basics.', tags: ['Ethical Hacking'], url: '#', imageUrl: '/certificates/placeholder.jpg' },
        ],
    },
];
