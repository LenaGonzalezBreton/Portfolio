import type { Language } from "@/app/types";

// Extended Experience type with additional fields
export type Experience = {
    id: string;
    title: string;          // Poste
    company: string;        // Entreprise / orga
    start: string;          // "2024-09"
    end?: string;           // "2025-06" ou undefined = en cours
    location?: string;      // "Épinal, FR" (optionnel)
    contract?: "Alternance" | "Freelance" | "CDI" | "CDD" | "Stage" | "Bénévolat" | "Apprenticeship" | "Internship" | "Volunteer";
    summary?: string;       // 1 phrase de contexte
    tech?: string[];        // badges techno/outils
    achievements: string[]; // puces d'impact (verbes d'action)
    links?: { label: string; url: string }[]; // "Site", "Repo", "Réf"
};

const experiencesData: Record<Language, Experience[]> = {
    fr: [
        {
            id: "tizzy-alt",
            title: "Alternante développeuse fullstack (UI/UX)",
            company: "Tizzy",
            contract: "Alternance",
            start: "2024-09",
            end: "2025-11",
            location: "Nancy / Hybride",
            summary: "Développement de la startup Tizzy et réalisation de l'application mobile",
            tech: ["Flutter", "Firebase", "Figma"],
            achievements: [
                "Product Design/Thinking",
                "Prise de décision et leadership",
                "Maquettage de l'application",
                "Développement mobile",
            ],
            links: [{ label: "Contexte projet", url: "#projets" }],
        },
        {
            id: "euroserum-alt",
            title: "Alternante Développeuse logiciel et référente OPC",
            company: "Eurosérum (Groupe Sodiaal)",
            contract: "Alternance",
            start: "2023-09",
            end: "2025-09",
            location: "Port-Sur-Saône",
            summary: "Développement d'un logiciel usine de dépilement d'automates et automatisation de tâches chronophages pour l'usine (interfaces, flux, fiabilité).",
            tech: ["VB.NET", "SSMS", "MySQL", "OPCDA", "C#", "Docker", "Gitlab", "Réseau"],
            achievements: [
                "Remplacement de feuilles Excel par des écrans simplifiés et robustes",
                "Compréhension des systèmes OPC DA et d'automates",
                "Réalisation d'un outil dashboard de suivi et dépilement des données automate",
                "Vision orientée client et communication des besoins usine",
                "Installation de nouveaux outils pour simplifier les process",
                "Veille technologique",
            ],
            links: [{ label: "Contexte projet", url: "#projets" }],
        },
        {
            id: "pompier-vol",
            title: "Pompier volontaire/saisonnière",
            company: "SDIS 70",
            contract: "Bénévolat",
            start: "2020-09",
            location: "Gray",
            summary: "Pompier volontaire incendie et secours",
            tech: ["Non technique"],
            achievements: [
                "Déploiement sur diverses interventions",
                "Gestion de l'urgence et du stress",
                "Rigueur",
                "Courage et dévouement",
                "Discipline",
            ],
            links: [{ label: "Voir le site", url: "https://www.sdis70.fr/" }],
        },
    ],
    en: [
        {
            id: "tizzy-alt",
            title: "Fullstack Developer Apprentice (UI/UX)",
            company: "Tizzy",
            contract: "Apprenticeship",
            start: "2024-09",
            end: "2025-11",
            location: "Nancy / Hybrid",
            summary: "Development of Tizzy startup and mobile application implementation",
            tech: ["Flutter", "Firebase", "Figma"],
            achievements: [
                "Product Design/Thinking",
                "Decision-making and leadership",
                "Application mockup design",
                "Mobile development",
            ],
            links: [{ label: "Project context", url: "#projets" }],
        },
        {
            id: "euroserum-alt",
            title: "Software Developer Apprentice & OPC Specialist",
            company: "Eurosérum (Sodiaal Group)",
            contract: "Apprenticeship",
            start: "2023-09",
            end: "2025-09",
            location: "Port-Sur-Saône",
            summary: "Development of factory automation software and automation of time-consuming tasks (interfaces, workflows, reliability).",
            tech: ["VB.NET", "SSMS", "MySQL", "OPCDA", "C#", "Docker", "Gitlab", "Network"],
            achievements: [
                "Replaced Excel sheets with simplified and robust screens",
                "Understanding of OPC DA systems and automation",
                "Created dashboard tool for tracking and processing automation data",
                "Client-oriented vision and factory needs communication",
                "Installation of new tools to simplify processes",
                "Technology watch",
            ],
            links: [{ label: "Project context", url: "#projets" }],
        },
        {
            id: "pompier-vol",
            title: "Volunteer/Seasonal Firefighter",
            company: "SDIS 70",
            contract: "Volunteer",
            start: "2020-09",
            location: "Gray",
            summary: "Volunteer firefighter for fire and rescue operations",
            tech: ["Non-technical"],
            achievements: [
                "Deployment on various interventions",
                "Emergency and stress management",
                "Rigor",
                "Courage and dedication",
                "Discipline",
            ],
            links: [{ label: "View website", url: "https://www.sdis70.fr/" }],
        },
    ],
};

export function getExperiences(language: Language = "en"): Experience[] {
    return experiencesData[language];
}

// For backward compatibility
export const experiences = experiencesData.fr;
