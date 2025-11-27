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
    { name: "Vue.js", level: 60, category: "Frontend", tags: ["Options/Composition API", "Nuxt"], years: 2 },
    { name: "TypeScript", level: 60, category: "Frontend", tags: ["Interfaces", "Generics", "Types"], years: 2 },
    { name: "TailwindCSS", level: 90, category: "Frontend", tags: ["Design tokens", "Dark mode", "Motion"], years: 2 },
    { name: "Framer Motion", level: 80, category: "Frontend", tags: ["Variants", "LayoutId"], years: 2 },
    { name: "Three.js", level: 30, category: "Frontend", tags: ["R3F", "Shaders", "3D"], years: 1 },
    { name: "React Native", level: 50, category: "Frontend", tags: ["Expo", "Mobile"], years: 1 },
    { name: "Flutter", level: 50, category: "Frontend", tags: ["Dart", "Widgets"], years: 1 },

    // BACKEND
    { name: "Node.js / Express", level: 70, category: "Backend", tags: ["REST", "JWT", "Middlewares"], years: 1 },
    { name: "PHP", level: 75, category: "Backend", tags: ["Modern PHP", "Composer"], years: 2 },
    { name: "Laravel", level: 80, category: "Backend", tags: ["Eloquent", "Blade", "MVC"], years: 2 },
    { name: "C#", level: 70, category: "Backend", tags: [".NET", "OOP"], years: 2 },
    { name: "Java", level: 30, category: "Backend", tags: ["OOP", "Game Dev"], years: 1 },
    { name: "VB.Net", level: 70, category: "Backend", tags: ["Legacy", "Desktop"], years: 2 },

    // DEVOPS
    { name: "Docker", level: 60, category: "DevOps", tags: ["Images multi-stage", "Compose"], years: 2 },
    { name: "Kubernetes", level: 30, category: "DevOps", tags: ["Pods", "Services"], years: 1 },
    { name: "CI/CD", level: 35, category: "DevOps", tags: ["GitHub Actions", "GitLab CI"], years: 1 },

    // DATABASE
    { name: "MySQL / Postgres", level: 75, category: "Database", tags: ["Indexation", "ORM/Query"], years: 2 },
    { name: "MongoDB", level: 55, category: "Database", tags: ["Schemas", "Aggregations"], years: 1 },

    // OUTILS
    { name: "Figma", level: 85, category: "Outils", tags: ["Design system", "Prototypage"], years: 3 },
    { name: "Git / GitHub / GitLab", level: 85, category: "Outils", tags: ["PR flow", "Issues", "Projects"], years: 4 },
    { name: "Unity", level: 40, category: "Outils", tags: ["C#", "Game Dev", "2D"], years: 1 },
];
