import type { Project, Language } from "@/app/types";

const projectsData: Record<Language, Project[]> = {
    fr: [
        {
            title: "OPSY",
            description: "Logiciel industriel de dépilement d'automate pour l'entreprise Eurosérum.",
            tech: ["C#", "MAUI", "OPCDA", "SSMS"],
            features: ["Lecture/Ecriture OPC", "Enregistrement en base de données", "Rapidité 1,2 seconde", "Multi-threading", "Gestion d'erreur et auto-diag"],
            badge: "Privé",
            status: "private",
        },
        {
            title: "FluCast - Hackaton (48h)",
            description: "Idéation de projet lors d'un Hackaton pour la présidence de la république. Création d'un outil pour optimiser la gestion de la crise de la grippe.",
            tech: ["Python/Streamlit", "Prophet"],
            features: ["Cartes régionales et nationales", "Prévisions tension grippale s+1", "Data analyse", "Prophet entrainé sur plusieurs dataset", "Précision des résultats"],
            repo: "https://github.com/LenaGonzalezBreton/FluCast",
            live: "https://flucast.streamlit.app/",
            badge: "Open-source",
            status: "opensource",
        },
        {
            title: "FitMe",
            description: "Application sportive pour personne menstruée ou ménopausée.",
            tech: ["React Native", "Expo", "TailwindCSS", "NestJS", "Firebase", "Docker"],
            features: ["Suivi du cycle", "Proposition d'exercice en adéquation avec la phase du cycle", "UI motivante", "Système de streaks"],
            repo: "https://github.com/LenaGonzalezBreton/FitMe",
            badge: "WIP",
            status: "wip",
        },
        {
            title: "Tizzy",
            description: "Product design, maquettage et début de réalisation d'une app mobile dédié à la revente de tickets dernière minute.",
            tech: ["Figma", "Flutter", "Firebase"],
            features: ["Authentification", "Visualitation des places", "Recherche et filtres", "Système de drop", "Profil"],
            badge: "Privé",
            status: "private",
        },
        {
            title: "Copilote",
            description: "Développement de l'ERP d'Eurosérum, notamment la partie maintenance.",
            tech: ["Vb.net", "SSMS"],
            features: ["Gestion des stocks", "Entrée manuelle d'article", "Filtres", "Lecture d'excel pour rentrée auto", "CRUD"],
            badge: "Privé",
            status: "private",
        },
        {
            title: "Portfolio",
            description: "Développement de mon portfolio",
            tech: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion", "Hébergement maison sur serveur"],
            features: ["Listing de projets", "About me section", "Hero 3D", "Contact", "Experiences et formations"],
            repo: "https://github.com/LenaGonzalezBreton/Portfolio",
            badge: "Open-source",
            status: "opensource",
        },
    ],
    en: [
        {
            title: "OPSY",
            description: "Industrial automation software for Eurosérum company.",
            tech: ["C#", "MAUI", "OPCDA", "SSMS"],
            features: ["OPC Read/Write", "Database recording", "1.2 second speed", "Multi-threading", "Error handling and auto-diagnosis"],
            badge: "Private",
            status: "private",
        },
        {
            title: "FluCast - Hackathon (48h)",
            description: "Project ideation during a Hackathon for the French presidency. Creation of a tool to optimize flu crisis management.",
            tech: ["Python/Streamlit", "Prophet"],
            features: ["Regional and national maps", "Flu tension forecasts s+1", "Data analysis", "Prophet trained on multiple datasets", "Result accuracy"],
            repo: "https://github.com/LenaGonzalezBreton/FluCast",
            live: "https://flucast.streamlit.app/",
            badge: "Open-source",
            status: "opensource",
        },
        {
            title: "FitMe",
            description: "Sports application for menstruating or menopausal people.",
            tech: ["React Native", "Expo", "TailwindCSS", "NestJS", "Firebase", "Docker"],
            features: ["Cycle tracking", "Exercise suggestions aligned with cycle phase", "Motivating UI", "Streak system"],
            repo: "https://github.com/LenaGonzalezBreton/FitMe",
            badge: "WIP",
            status: "wip",
        },
        {
            title: "Tizzy",
            description: "Product design, mockup and initial development of a mobile app dedicated to last-minute ticket resale.",
            tech: ["Figma", "Flutter", "Firebase"],
            features: ["Authentication", "Seat visualization", "Search and filters", "Drop system", "Profile"],
            badge: "Private",
            status: "private",
        },
        {
            title: "Copilote",
            description: "Development of Eurosérum's ERP, particularly the maintenance section.",
            tech: ["Vb.net", "SSMS"],
            features: ["Stock management", "Manual item entry", "Filters", "Excel reading for auto-entry", "CRUD"],
            badge: "Private",
            status: "private",
        },
        {
            title: "Portfolio",
            description: "Development of my portfolio",
            tech: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion", "Self-hosted on server"],
            features: ["Project listing", "About me section", "3D Hero", "Contact", "Experiences and education"],
            repo: "https://github.com/LenaGonzalezBreton/Portfolio",
            badge: "Open-source",
            status: "opensource",
        },
    ],
};

export function getProjects(language: Language = "en"): Project[] {
    return projectsData[language];
}

// For backward compatibility
export const projects = projectsData.fr;
