export interface ExperienceItem {
    date: string;
    title: string;
    company: string;
    description: string[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    repoUrl: string;
}

export interface SkillCategory {
    title: string;
    skills: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    year: string;
}

export interface CertificateItem {
    title: string;
    description: string;
    tags: string[];
    url: string;
    imageUrl?: string;
}

export interface CertificateCategory {
  title: string;
  certificates: CertificateItem[];
}
