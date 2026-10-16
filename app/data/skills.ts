import type { Lang } from "@/app/locales";

export interface SkillGroup {
    label: string;
    items: string[];
}

const groups: Record<Lang, SkillGroup[]> = {
    en: [
        { label: "Product & design", items: ["Product discovery", "Backlog & prioritisation", "User stories", "Figma", "Prototyping"] },
        { label: "DevOps", items: ["Docker", "GitLab CI/CD", "GitHub Actions", "Kubernetes (learning)", "Networking basics"] },
        { label: "Development", items: ["TypeScript", "React / Next.js", "Flutter", "React Native", "Node.js / NestJS", "C# / .NET", "PHP / Laravel"] },
        { label: "Data & tools", items: ["PostgreSQL / MySQL", "SQL Server", "MongoDB", "Git, GitHub, GitLab"] },
    ],
    fr: [
        { label: "Produit & design", items: ["Product discovery", "Backlog & priorisation", "User stories", "Figma", "Prototypage"] },
        { label: "DevOps", items: ["Docker", "GitLab CI/CD", "GitHub Actions", "Kubernetes (en cours)", "Bases réseau"] },
        { label: "Développement", items: ["TypeScript", "React / Next.js", "Flutter", "React Native", "Node.js / NestJS", "C# / .NET", "PHP / Laravel"] },
        { label: "Données & outils", items: ["PostgreSQL / MySQL", "SQL Server", "MongoDB", "Git, GitHub, GitLab"] },
    ],
};

export function getSkillGroups(lang: Lang): SkillGroup[] {
    return groups[lang];
}
