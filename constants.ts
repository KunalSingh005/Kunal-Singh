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

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
    {
        title: 'Foundations (IT + Basic Cybersecurity)',
        certificates: [
            { title: 'Google IT Support Certificate', description: 'Certified in IT support fundamentals, troubleshooting, networking, and operating systems.', tags: ['IT Support', 'Networking'], url: 'https://coursera.org/verify/professional-cert/B1NU90HHXZB1', imageUrl: '/certificates/Google IT Support Certificate.jpeg' },
            { title: 'Introduction to Information Security', description: 'Certified in foundational information security principles and practices.', tags: ['Security', 'InfoSec'], url: 'https://verify.mygreatlearning.com/UQVXWAZi', imageUrl: '/certificates/Introduction to Information Security Kunal Singh conv 1.jpeg' },
            { title: 'Introduction to Cyber Security', description: 'Certified in core cybersecurity concepts, risks, and defense strategies.', tags: ['Cybersecurity'], url: 'https://verify.mygreatlearning.com/ONDSCFQK', imageUrl: '/certificates/Introduction to Cyber Security Kunal Singh conv 1.jpeg' },
            { title: 'Types of Cyber Security', description: 'Certified in understanding domains of cybersecurity including network, application, and cloud.', tags: ['Cybersecurity'], url: 'https://verify.mygreatlearning.com/GNATKCGI', imageUrl: '/certificates/Types of Cyber Security Kunal Singh conv 1.jpeg' },
            { title: 'Cyber Security Threats', description: 'Certified in identifying and analyzing common cybersecurity threats and vulnerabilities.', tags: ['Threats', 'Security'], url: 'https://verify.mygreatlearning.com/MDXEKYWQ', imageUrl: '/certificates/Cyber Security Threats Kunal Singh conv 1.jpeg' },
        ],
    },
    {
        title: 'Linux & System Administration',
        certificates: [
            { title: 'NDG Linux Unhatched', description: 'Certified in Linux essentials, command line, and system administration.', tags: ['Linux', 'SysAdmin'], url: '#', imageUrl: '/certificates/KunalSingh-NDG Linux Unhatc-certificate conv 1.jpeg' },
            { title: 'Google: Tools of the Trade (Linux and SQL)', description: 'Certified in Linux and SQL for system and database management.', tags: ['Linux', 'SQL'], url: 'https://coursera.org/verify/DVNFMSCXJQBS', imageUrl: '/certificates/Google Tools of the Trade Linux and SQL Certificates conv 1.jpeg' },
        ],
    },
    {
        title: 'Programming & Scripting',
        certificates: [
            { title: 'Python Basic Certificate (HackerRank)', description: 'Certified in Python programming fundamentals and problem-solving skills.', tags: ['Python', 'Scripting'], url: '#', imageUrl: '/certificates/python_basic certificate Kunal conv 1.jpeg' },
            { title: 'Python for Machine Learning', description: 'Certified in applying Python for data analysis and machine learning basics.', tags: ['Python', 'ML'], url: 'https://verify.mygreatlearning.com/LBXBOKNY', imageUrl: '/certificates/Python for Machine Learning Kunal Singh conv 1.jpeg' },
            { title: 'Google: Automate Cybersecurity with Python', description: 'Certified in using Python to automate security workflows.', tags: ['Python', 'Automation'], url: 'https://coursera.org/verify/A5S373EWPJKU', imageUrl: '/certificates/Google Automate Cybersecurity Tasks with Python Certificate (1) conv 1.jpeg' },
        ],
    },
    {
        title: 'Web & Frontend Basics',
        certificates: [
            { title: 'HackerRank CSS Certificate', description: 'Certified in CSS fundamentals for web styling and design.', tags: ['CSS', 'Frontend'], url: '#', imageUrl: '/certificates/Hacker Rank Css Certificate conv 1.jpeg' },
            { title: 'Coursera: Create WordPress Website', description: 'Certified in building and deploying WordPress websites.', tags: ['WordPress', 'Web'], url: 'https://coursera.org/verify/HPPK6H4S9WCA', imageUrl: '/certificates/Coursera Create Wordpress Website Project Certificate conv 1.jpeg' },
            { title: 'ChatGPT for Beginners', description: 'Certified in leveraging AI tools for productivity and automation.', tags: ['AI', 'Tools'], url: 'https://verify.mygreatlearning.com/GDKIWYDX', imageUrl: '/certificates/ChatGPT for Beginners Kunal Singh conv 1.jpeg' },
        ],
    },
    {
        title: 'Cloud & Infrastructure',
        certificates: [
            { title: 'AWS For Beginners', description: 'Certified in AWS cloud fundamentals, IAM, EC2, and S3.', tags: ['AWS', 'Cloud'], url: 'https://verify.mygreatlearning.com/CYOMJHNS', imageUrl: '/certificates/AWS For Beginners Kunal Singh conv 1.jpeg' },
            { title: 'Coursera: AWS S3 Basics', description: 'Certified in AWS S3 storage, configuration, and management.', tags: ['AWS S3', 'Storage'], url: 'https://coursera.org/verify/KFSYVC7SHBTQ', imageUrl: '/certificates/Coursera AWS S3 Basics Certificate conv 1.jpeg' },
        ],
    },
    {
        title: 'DevOps Tools & Practices',
        certificates: [
            { title: 'DevOps Prerequisite Course', description: 'Certified in DevOps foundations, version control, and CI/CD basics.', tags: ['DevOps', 'CI/CD'], url: 'https://coursera.org/verify/X2CG24ZLDD04', imageUrl: '/certificates/DevOps Prerequisite Course conv 1.jpeg' },
            { title: 'Docker Best Practices', description: 'Certified in Docker containerization and deployment best practices.', tags: ['Docker', 'Containers'], url: 'https://verify.mygreatlearning.com/KYGXTJOK', imageUrl: '/certificates/Docker Best Practices Kunal Singh conv 1.jpeg' },
            { title: 'Docker for Intermediate Level', description: 'Certified in advanced Docker usage for scalable applications.', tags: ['Docker', 'Advanced'], url: 'https://verify.mygreatlearning.com/VDERCLSS', imageUrl: '/certificates/Docker for Intermediate Level Kunal Singh conv 1.jpeg' },
        ],
    },
    {
        title: 'Core Cybersecurity (Google Specialization)',
        certificates: [
            { title: 'Google Cybersecurity Professional Certificate', description: 'Completed 8-course program covering Python, Linux, SQL, SIEM tools, and IDS for entry-level cybersecurity roles.', tags: ['Security', 'Google', 'SIEM'], url: 'https://coursera.org/verify/professional-cert/CEJTB9G8FMANN7J2', imageUrl: '/certificates/Google Cybersecruity Certificate conv 1.jpeg' },
            { title: 'Google: Foundations of Cybersecurity', description: 'Acquired a comprehensive understanding of core cybersecurity principles and threat landscapes.', tags: ['Foundation', 'Security'], url: 'https://coursera.org/verify/H3GH5WRW77WW', imageUrl: '/certificates/Google Foundation of Cybersecurity Certificate conv 1.jpeg' },
            { title: 'Google: Assets, Threats, and Vulnerabilities', description: 'Certified in identifying assets, threats, and vulnerabilities in security contexts.', tags: ['Security', 'Risk'], url: 'https://coursera.org/verify/NQ4D53WH9XU', imageUrl: '/certificates/Google Assets, Threats, and Vulnerabilities Certificate conv 1.jpeg' },
            { title: 'Google: Networks and Network Security', description: 'Certified in networking fundamentals and network security practices.', tags: ['Networking', 'Security'], url: 'https://coursera.org/verify/RUGM93WD2SF7', imageUrl: '/certificates/Google Networks and Network Security Certificate conv 1.jpeg' },
            { title: 'Google: Play It Safe', description: 'Certified in security best practices, risk management, and safe computing.', tags: ['Security', 'Best Practices'], url: 'https://coursera.org/verify/XCJ8Y2Y3HNTW', imageUrl: '/certificates/Google Play it Safe Cybersecurity Certificate conv 1.jpeg' },
            { title: 'Google: Prepare for Cybersecurity Jobs', description: 'Certified in job-ready cybersecurity skills and career preparation.', tags: ['Career', 'Security'], url: 'https://coursera.org/verify/6JPEHN8ZRHD6', imageUrl: '/certificates/Google Put it to work Prepare for Cybersecurity job Certificate conv 1.jpeg' },
            { title: 'Google: Sound the Alarm', description: 'Certified in incident detection, response, and SIEM tools.', tags: ['SIEM', 'Response'], url: 'https://coursera.org/verify/3DMTHZXKMGVV', imageUrl: '/certificates/Google Sound the Alarm Detection and Response Certificate conv 1.jpeg' },
        ],
    },
    {
        title: 'Advanced Cybersecurity & Specialization',
        certificates: [
            { title: 'Advanced Cyber Security - Threats and Governance', description: 'Certified in advanced cybersecurity governance, compliance, and risk management.', tags: ['Advanced Security'], url: 'https://verify.mygreatlearning.com/QUKAZPMT', imageUrl: '/certificates/Advanced Cyber Security - Threats and Governance Kunal Singh conv 1.jpeg' },
            { title: 'Network Security', description: 'Certified in network defense, firewalls, and intrusion prevention.', tags: ['Network Security'], url: 'https://verify.mygreatlearning.com/PNCKKJWA', imageUrl: '/certificates/Network Security Kunal Singh conv 1.jpeg' },
            { title: 'Introduction to Firewall', description: 'Certified in firewall fundamentals and configuration basics.', tags: ['Firewall', 'Security'], url: 'https://verify.mygreatlearning.com/BYSORZMC', imageUrl: '/certificates/Introduction to Firewall Kunal Singh conv 1.jpeg' },
            { title: 'Ethical Hacking: Mobile & Network', description: 'Certified in ethical hacking for mobile and network systems.', tags: ['Ethical Hacking'], url: 'https://verify.mygreatlearning.com/BOLKQQBC', imageUrl: '/certificates/Ethical Hacking - Mobile Platforms and Network Architecture Kunal Singh conv 1.jpeg' },
            { title: 'Introduction to Ethical Hacking', description: 'Certified in ethical hacking fundamentals and penetration testing basics.', tags: ['Ethical Hacking'], url: 'https://verify.mygreatlearning.com/IPCNBVSE', imageUrl: '/certificates/Introduction to Ethical Hacking Kunal Singh conv 1.jpeg' },
        ],
    },
];
