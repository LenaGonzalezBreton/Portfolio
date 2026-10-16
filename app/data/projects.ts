import type { Lang } from "@/app/locales";

export interface Project {
    id: "opsy" | "fitme" | "copilote" | "tizzy";
    name: string;
    description: string;
    tech: string[];
    repo?: string;
}

const projects: Record<Lang, Project[]> = {
    en: [
        {
            id: "opsy",
            name: "OPSY",
            description: "Industrial software that reads and writes PLC data over OPC, stores it in a database and self-diagnoses, in about 1.2 seconds.",
            tech: ["C#", "MAUI", "OPC DA", "SQL Server"],
        },
        {
            id: "fitme",
            name: "FitMe",
            description: "Sports app for people who menstruate or are menopausal: cycle tracking and workouts matched to each phase.",
            tech: ["React Native", "Expo", "NestJS", "Firebase", "Docker"],
            repo: "https://github.com/LenaGonzalezBreton/FitMe",
        },
        {
            id: "copilote",
            name: "Copilote",
            description: "Maintenance module of the factory ERP: stock management, filters and automatic entry from Excel files.",
            tech: ["VB.NET", "SQL Server"],
        },
        {
            id: "tizzy",
            name: "Tizzy",
            description: "Product design and first build of a mobile app for last-minute ticket resale, from mockups to a working prototype.",
            tech: ["Figma", "Flutter", "Firebase"],
        },
    ],
    fr: [
        {
            id: "opsy",
            name: "OPSY",
            description: "Logiciel industriel qui lit et écrit les données d'automates via OPC, les enregistre en base et s'auto-diagnostique, en 1,2 seconde environ.",
            tech: ["C#", "MAUI", "OPC DA", "SQL Server"],
        },
        {
            id: "fitme",
            name: "FitMe",
            description: "Application sportive pour les personnes menstruées ou ménopausées : suivi du cycle et exercices adaptés à chaque phase.",
            tech: ["React Native", "Expo", "NestJS", "Firebase", "Docker"],
            repo: "https://github.com/LenaGonzalezBreton/FitMe",
        },
        {
            id: "copilote",
            name: "Copilote",
            description: "Module de maintenance de l'ERP de l'usine : gestion des stocks, filtres et saisie automatique depuis des fichiers Excel.",
            tech: ["VB.NET", "SQL Server"],
        },
        {
            id: "tizzy",
            name: "Tizzy",
            description: "Product design et première réalisation d'une application mobile de revente de billets de dernière minute, des maquettes au prototype.",
            tech: ["Figma", "Flutter", "Firebase"],
        },
    ],
};

export function getProjects(lang: Lang): Project[] {
    return projects[lang];
}
