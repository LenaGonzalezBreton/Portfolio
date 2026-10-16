import type { Lang } from "@/app/locales";

export interface ExperienceItem {
    id: string;
    role: string;
    org: string;
    /** "YYYY-MM"; absent when unknown (education entry) */
    start?: string;
    /** "YYYY-MM"; absent means ongoing */
    end?: string;
    place?: string;
    bullets: string[];
}

const items: Record<Lang, ExperienceItem[]> = {
    en: [
        {
            id: "tizzy",
            role: "Mobile developer & product apprentice",
            org: "Tizzy",
            start: "2024-09",
            end: "2025-11",
            place: "Nancy / Hybrid",
            bullets: [
                "Product design and discovery for a ticket-resale startup, from user need to mockups.",
                "Built the mobile app in Flutter and Firebase.",
                "Made product decisions and led the work with the founders.",
            ],
        },
        {
            id: "euroserum",
            role: "Software developer apprentice, OPC referent",
            org: "Eurosérum (Sodiaal Group)",
            start: "2023-09",
            end: "2025-09",
            place: "Port-sur-Saône",
            bullets: [
                "Replaced Excel sheets with simple, reliable screens, after collecting the factory's needs.",
                "Built a dashboard to track and read PLC data over OPC DA.",
                "Set up tooling (Docker, GitLab) to simplify team processes.",
            ],
        },
        {
            id: "sdis70",
            role: "Volunteer firefighter",
            org: "SDIS 70",
            start: "2020-09",
            place: "Gray",
            bullets: ["Emergency response: calm under pressure, rigour and teamwork."],
        },
        {
            id: "epitech",
            role: "Computer science student",
            org: "Epitech",
            bullets: [],
        },
    ],
    fr: [
        {
            id: "tizzy",
            role: "Alternante développeuse mobile & produit",
            org: "Tizzy",
            start: "2024-09",
            end: "2025-11",
            place: "Nancy / Hybride",
            bullets: [
                "Product design et discovery pour une startup de revente de billets, du besoin utilisateur aux maquettes.",
                "Développement de l'application mobile en Flutter et Firebase.",
                "Prise de décisions produit et pilotage du travail avec les fondateurs.",
            ],
        },
        {
            id: "euroserum",
            role: "Alternante développeuse logiciel, référente OPC",
            org: "Eurosérum (Groupe Sodiaal)",
            start: "2023-09",
            end: "2025-09",
            place: "Port-sur-Saône",
            bullets: [
                "Remplacement de feuilles Excel par des écrans simples et fiables, après recueil des besoins de l'usine.",
                "Création d'un tableau de bord de suivi et de lecture des données d'automates via OPC DA.",
                "Mise en place d'outils (Docker, GitLab) pour simplifier les processus de l'équipe.",
            ],
        },
        {
            id: "sdis70",
            role: "Sapeur-pompier volontaire",
            org: "SDIS 70",
            start: "2020-09",
            place: "Gray",
            bullets: ["Interventions d'urgence : sang-froid, rigueur et esprit d'équipe."],
        },
        {
            id: "epitech",
            role: "Étudiante en informatique",
            org: "Epitech",
            bullets: [],
        },
    ],
};

export function getExperience(lang: Lang): ExperienceItem[] {
    return items[lang];
}
