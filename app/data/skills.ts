// app/data/skills.ts
export type SkillCategory = "Frontend" | "Backend" | "DevOps" | "Database" | "Outils";

export type Skill = {
    name: string;
    level: number;          // 0..100 (pour la barre)
    category: SkillCategory;
    tags?: string[];        // précisions (ex: "React 18", "Hooks", etc.)
    years?: number;         // ancienneté approx pour l’ego 😇
};

export const categories: SkillCategory[] = [
    "Frontend",
    "Backend",
    "DevOps",
    "Database",
    "Outils",
];

export const skills: Skill[] = [
    // FRONTEND
    { name: "React / Next.js", level: 85, category: "Frontend", tags: ["Next 15/16", "App Router", "Server Actions"], years: 2 },
    { name: "TailwindCSS", level: 90, category: "Frontend", tags: ["Design tokens", "Dark mode", "Motion"], years: 2 },
    { name: "Framer Motion", level: 80, category: "Frontend", tags: ["Variants", "LayoutId"], years: 2 },

    // BACKEND
    { name: "Node.js / Express", level: 70, category: "Backend", tags: ["REST", "JWT", "Middlewares"], years: 2 },
    { name: "NestJS", level: 60, category: "Backend", tags: ["Modules", "Guards"], years: 1 },

    // DEVOPS
    { name: "Docker", level: 70, category: "DevOps", tags: ["Images multi-stage", "Compose"], years: 2 },
    { name: "CI/CD", level: 55, category: "DevOps", tags: ["GitHub Actions"], years: 1 },

    // DATABASE
    { name: "MySQL / MariaDB", level: 70, category: "Database", tags: ["Indexation", "ORM/Query"], years: 2 },
    { name: "MongoDB", level: 55, category: "Database", tags: ["Schemas", "Aggregations"], years: 1 },

    // OUTILS
    { name: "Figma", level: 80, category: "Outils", tags: ["Design system", "Prototypage"], years: 3 },
    { name: "Git / GitHub", level: 85, category: "Outils", tags: ["PR flow", "Issues", "Projects"], years: 4 },
];
