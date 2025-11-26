// Shared types for the portfolio application

export type Language = "fr" | "en";

// Data types
export interface Experience {
    title: string;
    company: string;
    location: string;
    contract: "CDI" | "CDD" | "Stage" | "Alternance" | "Freelance" | "Bénévolat" | "Full-time" | "Internship" | "Apprenticeship" | "Volunteer";
    duration: string;
    achievements: string[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    features: string[];
    repo?: string;
    live?: string;
    status: "private" | "wip" | "opensource";
    badge?: string; // For backward compatibility
}

export interface Skill {
    name: string;
    category: string;
    experience: number;
}

export interface SkillCategory {
    id: string;
    label: string;
}

export interface Interest {
    emoji: string;
    title: string;
    description: string;
    color: string;
}

export interface SoftSkill {
    icon: string;
    title: string;
    description: string;
}

export interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    link?: string;
    copyable?: boolean;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    color: string;
}

export interface LanguageInfo {
    flag: string;
    name: string;
    level: string;
}

// Component prop types
export interface SectionProps {
    id?: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
}
