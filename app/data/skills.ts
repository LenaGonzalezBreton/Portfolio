import type { Lang } from "@/app/locales";

export interface SkillGroup {
    label: string;
    items: string[];
}

const groups: Record<Lang, SkillGroup[]> = {
    en: [
        { label: "Systems & DevOps", items: ["Linux", "Docker", "Git", "GitHub Actions", "CI/CD", "DevSecOps", "Infrastructure as code"] },
        { label: "Development & UX", items: ["C#", "PHP", "JavaScript", "TypeScript", ".NET", "Laravel", "Vue.js", "React", "Node.js", "Figma"] },
        { label: "Databases", items: ["SQL", "MySQL", "PostgreSQL", "SQL Server"] },
        { label: "Currently learning", items: ["AWS", "Kubernetes", "Terraform", "Ansible"] },
    ],
    fr: [
        { label: "Systèmes et DevOps", items: ["Linux", "Docker", "Git", "GitHub Actions", "CI/CD", "DevSecOps", "Infrastructure as code"] },
        { label: "Développement et UX", items: ["C#", "PHP", "JavaScript", "TypeScript", ".NET", "Laravel", "Vue.js", "React", "Node.js", "Figma"] },
        { label: "Bases de données", items: ["SQL", "MySQL", "PostgreSQL", "SQL Server"] },
        { label: "En cours d’apprentissage", items: ["AWS", "Kubernetes", "Terraform", "Ansible"] },
    ],
};

export function getSkillGroups(lang: Lang): SkillGroup[] {
    return groups[lang];
}
