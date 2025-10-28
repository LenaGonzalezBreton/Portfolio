// app/data/experiences.ts
export type Experience = {
    id: string;
    title: string;          // Poste
    company: string;        // Entreprise / orga
    start: string;          // "2024-09"
    end?: string;           // "2025-06" ou undefined = en cours
    location?: string;      // "Épinal, FR" (optionnel)
    contract?: "Alternance" | "Freelance" | "CDI" | "CDD" | "Stage" | "Bénévolat";
    summary?: string;       // 1 phrase de contexte
    tech?: string[];        // badges techno/outils
    achievements: string[]; // puces d'impact (verbes d'action)
    links?: { label: string; url: string }[]; // "Site", "Repo", "Réf"
};

export const experiences: Experience[] = [
    {
        id: "tizzy-alt",
        title: "Alternante développeuse fullstack (UI/UX)",
        company: "Tizzy",
        contract: "Alternance",
        start: "202-09",
        end:"2025-11",
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
        end:"2025-09",
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
            "Déploiememnt sur diverses interventions",
            "Gestion de l'urgence et du stress",
            "Rigeur",
            "Courage et dévouement",
            "Discipline",
        ],
        links: [{ label: "Voir le site", url: "https://www.sdis70.fr/" }],
    },
];
