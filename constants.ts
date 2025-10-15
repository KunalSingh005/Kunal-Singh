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

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
  {
    title: 'Foundations (IT + Basic Cybersecurity)',
    certificates: [
      {
        title: 'Google IT Support',
        description: 'Covers troubleshooting, customer service, networking, operating systems, system administration, and security.',
        tags: ['IT Support', 'Networking', 'Security'],
        url: '#',
        imageUrl: '/certificates/Google IT Support Certificate.jpeg',
      },
      {
        title: 'Introduction to Information Security',
        description: 'Fundamental concepts of information security, risk management, and security principles.',
        tags: ['InfoSec', 'Fundamentals'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/infosec-intro/500/350',
      },
      {
        title: 'Introduction to Cyber Security',
        description: 'An overview of the cybersecurity landscape, common threats, and foundational defense strategies.',
        tags: ['Cybersecurity', 'Beginner'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/cyber-intro/500/350',
      },
      {
        title: 'Types of Cyber Security',
        description: 'Explores various domains within cybersecurity such as network, application, and cloud security.',
        tags: ['Cybersecurity', 'Domains'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/cyber-types/500/350',
      },
      {
        title: 'Cyber Security Threats',
        description: 'Identifies and analyzes common cybersecurity threats, vulnerabilities, and attack vectors.',
        tags: ['Threats', 'Vulnerabilities'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/cyber-threats/500/350',
      },
      {
        title: 'Introduction to Cybersecurity Badge',
        description: 'Badge awarded for completing foundational cybersecurity coursework and demonstrating key concepts.',
        tags: ['Badge', 'Cybersecurity'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/cyber-badge/500/350',
      },
    ],
  },
  {
    title: 'Linux & System Administration',
    certificates: [
      {
        title: 'NDG Linux Unhatched',
        description: 'An introduction to the Linux command line, covering basic commands and concepts.',
        tags: ['Linux', 'CLI', 'Beginner'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/linux-unhatched/500/350',
      },
      {
        title: 'Google - Tools of the Trade: Linux and SQL',
        description: 'Covers essential command-line tools for Linux and fundamental SQL for data management.',
        tags: ['Linux', 'SQL', 'Tools'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/google-tools/500/350',
      },
    ],
  },
  {
    title: 'Programming & Scripting',
    certificates: [
      {
        title: 'Python (Basic)',
        description: 'Certificate for demonstrating foundational knowledge of Python programming.',
        tags: ['Python', 'Scripting'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/python-basic/500/350',
      },
      {
        title: 'Python for Machine Learning',
        description: 'Covers essential Python libraries like NumPy, Pandas, and Scikit-learn for machine learning tasks.',
        tags: ['Python', 'Machine Learning'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/python-ml/500/350',
      },
      {
        title: 'Google - Automate Cybersecurity Tasks with Python',
        description: 'Focuses on using Python to automate security-related tasks, including log analysis and forensics.',
        tags: ['Python', 'Automation', 'Cybersecurity'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/python-auto/500/350',
      },
    ],
  },
  {
    title: 'Web & Frontend Basics',
    certificates: [
      {
        title: 'HackerRank CSS',
        description: 'Certification for proficiency in CSS, covering selectors, layouts, and responsive design.',
        tags: ['CSS', 'Frontend', 'HackerRank'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/css-cert/500/350',
      },
      {
        title: 'Create a Website using WordPress',
        description: 'Project-based course on building and managing a website using the WordPress platform.',
        tags: ['WordPress', 'Web'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/wordpress-cert/500/350',
      },
      {
        title: 'ChatGPT for Beginners',
        description: 'An introductory course on leveraging ChatGPT for various tasks and productivity.',
        tags: ['AI', 'Productivity', 'ChatGPT'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/chatgpt-cert/500/350',
      },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    certificates: [
      {
        title: 'AWS For Beginners',
        description: 'An introduction to Amazon Web Services, covering core services like EC2, S3, and IAM.',
        tags: ['AWS', 'Cloud', 'Beginner'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/aws-beginner/500/350',
      },
      {
        title: 'AWS S3 Basics',
        description: 'A focused course on the features and use cases of Amazon S3 for object storage.',
        tags: ['AWS', 'S3', 'Storage'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/aws-s3/500/350',
      },
    ],
  },
  {
    title: 'DevOps Tools & Practices',
    certificates: [
      {
        title: 'DevOps Prerequisite Course',
        description: 'Covers foundational concepts required for starting a journey into DevOps practices and culture.',
        tags: ['DevOps', 'CI/CD', 'Fundamentals'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/devops-prereq/500/350',
      },
      {
        title: 'Docker Best Practices',
        description: 'Guidance on writing efficient Dockerfiles, managing images, and optimizing containers.',
        tags: ['Docker', 'Best Practices'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/docker-best/500/350',
      },
      {
        title: 'Docker for Intermediate Level',
        description: 'Explores more advanced Docker topics like networking, volumes, and multi-stage builds.',
        tags: ['Docker', 'Intermediate'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/docker-inter/500/350',
      },
    ],
  },
  {
    title: 'Core Cybersecurity (Google Specialization)',
    certificates: [
       {
        title: 'Google Cybersecurity Professional Certificate',
        description: 'Certified in cybersecurity fundamentals—Python, Linux, SQL, SIEM, IDS, and threat mitigation—via Google’s hands-on, 8-course program.',
        tags: ['Google', 'Cybersecurity', 'Professional'],
        url: 'https://coursera.org/share/caba244fc64f5b0c36ac54679e22f50c',
        imageUrl: 'https://picsum.photos/seed/google-cybersecurity/500/350',
      },
      {
        title: 'Google - Assets, Threats, and Vulnerabilities',
        description: 'Focuses on identifying and managing assets, threats, and vulnerabilities in an organization.',
        tags: ['Security', 'Risk Management'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/google-assets/500/350',
      },
      {
        title: 'Google - Networks and Network Security',
        description: 'Covers networking concepts and the tools and techniques used to secure computer networks.',
        tags: ['Networking', 'Security'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/google-networks/500/350',
      },
      {
        title: 'Google - Play it Safe: Manage Security Risks',
        description: 'Teaches how to perform risk assessments and manage security risks effectively.',
        tags: ['Security', 'Risk', 'Google'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/google-play-safe/500/350',
      },
      {
        title: 'Google - Prepare for Cybersecurity Jobs',
        description: 'Provides guidance on preparing for interviews and starting a career in cybersecurity.',
        tags: ['Career', 'Cybersecurity', 'Google'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/google-jobs/500/350',
      },
      {
        title: 'Google - Sound the Alarm: Detection and Response',
        description: 'Covers intrusion detection systems, SIEM tools, and incident response procedures.',
        tags: ['SIEM', 'IDS', 'Response'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/google-alarm/500/350',
      },
    ],
  },
  {
    title: 'Advanced Cybersecurity & Specialization',
    certificates: [
      {
        title: 'Advanced Cyber Security - Threats and Governance',
        description: 'Explores advanced persistent threats, security governance, and compliance frameworks.',
        tags: ['Advanced', 'Governance'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/adv-cyber/500/350',
      },
      {
        title: 'Network Security',
        description: 'In-depth study of network security protocols, devices, and architectures.',
        tags: ['Network Security', 'Advanced'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/adv-netsec/500/350',
      },
      {
        title: 'Introduction to Firewalls',
        description: 'Covers the principles of firewall technology, types of firewalls, and configuration basics.',
        tags: ['Firewall', 'Network Security'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/firewall-intro/500/350',
      },
      {
        title: 'Ethical Hacking - Mobile & Network Architecture',
        description: 'Focuses on ethical hacking techniques for mobile platforms and understanding network architecture vulnerabilities.',
        tags: ['Ethical Hacking', 'Mobile'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/eh-mobile/500/350',
      },
      {
        title: 'Introduction to Ethical Hacking',
        description: 'Provides an overview of ethical hacking methodologies, tools, and legal considerations.',
        tags: ['Ethical Hacking', 'Beginner'],
        url: '#',
        imageUrl: 'https://picsum.photos/seed/eh-intro/500/350',
      },
    ],
  },
];
