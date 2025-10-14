import type { ExperienceItem, Project, SkillCategory, EducationItem, CertificateItem } from './types';

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

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    title: 'Google Cybersecurity',
    description: 'Certified in cybersecurity fundamentals—Python, Linux, SQL, SIEM, IDS, and threat mitigation—via Google’s hands-on, 8-course program.',
    tags: ['Linux', 'SQL', 'Security'],
    url: 'https://coursera.org/share/caba244fc64f5b0c36ac54679e22f50c',
    imageUrl: '/certificates/google-cybersecurity-cert.jpg',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Validates foundational, high-level understanding of AWS Cloud, services, and terminology.',
    tags: ['AWS', 'Cloud', 'Foundations'],
    url: '#',
    imageUrl: 'https://picsum.photos/seed/aws-practitioner/500/350',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    description: 'Proves the ability to perform the responsibilities of a Kubernetes administrator.',
    tags: ['Kubernetes', 'Containers', 'Orchestration'],
    url: '#',
    imageUrl: 'https://picsum.photos/seed/cka-cert/500/350',
  },
  {
    title: 'Docker Certified Associate (DCA)',
    description: 'Validates skills with Docker containerization technology, from development to production.',
    tags: ['Docker', 'Containers'],
    url: '#',
    imageUrl: 'https://picsum.photos/seed/dca-cert/500/350',
  },
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    description: 'Demonstrates core system administration skills required in Red Hat Enterprise Linux environments.',
    tags: ['Linux', 'Red Hat', 'SysAdmin'],
    url: '#',
    imageUrl: 'https://picsum.photos/seed/rhcsa-cert/500/350',
  },
  {
    title: 'CompTIA Security+',
    description: 'A global certification that validates the baseline skills necessary to perform core security functions.',
    tags: ['Security', 'Networking'],
    url: '#',
    imageUrl: 'https://picsum.photos/seed/security-plus/500/350',
  },
  // Generating more placeholder certificates to reach 33
  ...Array.from({ length: 27 }, (_, i) => ({
    title: `Placeholder Certificate ${i + 1}`,
    description: `This is a placeholder description for certificate number ${i + 7}, showcasing a diverse skill set.`,
    tags: ['Tech', `Skill ${i + 1}`],
    url: '#',
    imageUrl: `https://picsum.photos/seed/placeholder-${i + 1}/500/350`,
  })),
];
