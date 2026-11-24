import type { Lang } from "@/app/locales";

export const experienceGroups = ["work", "education", "community"] as const;

export interface ExperienceItem {
    id: string;
    group: (typeof experienceGroups)[number];
    role: string;
    org: string;
    organizationSize?: string;
    /** "YYYY-MM"; omit when a complete date range is unavailable for a former role */
    start?: string;
    /** "YYYY-MM"; absent means ongoing */
    end?: string;
    place?: string;
    bullets: string[];
}

const items: Record<Lang, ExperienceItem[]> = {
    en: [
        {
            id: "vosgelis",
            group: "work",
            role: "Software development & IT architecture",
            org: "Vosgelis",
            organizationSize: "Public housing provider · around 220 employees",
            start: "2026-09",
            bullets: ["Internal tools, troubleshooting and technical decisions."],
        },
        {
            id: "epitech",
            group: "education",
            role: "MSc in Cloud & Cybersecurity",
            org: "Epitech",
            start: "2024-09",
            end: "2027-09",
            bullets: [
                "Project-based learning through individual and team projects in cloud and DevOps.",
                "ARTEM design thinking workshop on women in tech.",
                "Cohort co-representative, student union vice-president (2026) and VivaTech volunteer team lead (2025).",
            ],
        },
        {
            id: "bts-sio",
            group: "education",
            role: "BTS in IT Services for Organisations",
            org: "Groupe Mont Roland",
            start: "2022-09",
            end: "2024-07",
            bullets: [
                "Built a school sports app for sign-ups and activity suggestions.",
                "Created a website and guestbook for an app supporting children with leukaemia and their families.",
            ],
        },
        {
            id: "aria",
            group: "work",
            role: "Cloud & DevSecOps Engineering Apprentice",
            org: "ARIA.bz",
            organizationSize: "Small conversational AI company",
            start: "2026-01",
            end: "2026-08",
            place: "Nancy",
            bullets: [
                "Helped migrate n8n to dedicated instances using Docker Compose and isolated networks.",
                "Set up automated PostgreSQL backups, TLS with Traefik and service monitoring.",
            ],
        },
        {
            id: "tizzy",
            group: "work",
            role: "Mobile developer & product apprentice",
            org: "Tizzy",
            organizationSize: "Ticketing startup · three directors",
            start: "2025-08",
            end: "2025-11",
            place: "Nancy / Hybrid",
            bullets: [
                "Defined features and designed mockups with the founders.",
                "Built the mobile prototype with Flutter and Firebase.",
            ],
        },
        {
            id: "euroserum",
            group: "work",
            role: "Software developer apprentice, OPC referent",
            org: "Eurosérum (Sodiaal Group)",
            organizationSize: "Dairy ingredients company · around 800 employees worldwide",
            start: "2023-09",
            end: "2025-09",
            place: "Port-sur-Saône",
            bullets: [
                "Replaced factory spreadsheets with dedicated tools.",
                "Built a dashboard to track and read PLC data over OPC DA.",
                "Set up Docker and GitLab.",
            ],
        },
        {
            id: "sdis70",
            group: "community",
            role: "Former volunteer firefighter",
            org: "SDIS 70",
            place: "Gray",
            bullets: ["Responded to emergencies as part of a team."],
        },
        {
            id: "sororit",
            group: "community",
            role: "Founder and former president",
            org: "Soror’IT",
            start: "2025-05",
            end: "2026-01",
            place: "Nancy",
            bullets: ["Founded a student association at Epitech Nancy to support women in tech through workshops, talks and exchanges across year groups."],
        },
    ],
    fr: [
        {
            id: "vosgelis",
            group: "work",
            role: "Développement logiciel et architecture informatique",
            org: "Vosgelis",
            organizationSize: "Office public de l’habitat · environ 220 salariés",
            start: "2026-09",
            bullets: ["Outils internes, résolution d’incidents et choix techniques."],
        },
        {
            id: "epitech",
            group: "education",
            role: "MSc Cloud & Cybersécurité",
            org: "Epitech",
            start: "2024-09",
            end: "2027-09",
            bullets: [
                "Pédagogie par projet en cloud et DevOps, seule et en équipe.",
                "Atelier ARTEM de design thinking sur la place des femmes dans la tech.",
                "Co-représentante de promotion, vice-présidente du BDE (2026) et capitaine d’une équipe de bénévoles à VivaTech (2025).",
            ],
        },
        {
            id: "bts-sio",
            group: "education",
            role: "BTS Services informatiques aux organisations (SIO)",
            org: "Groupe Mont Roland",
            start: "2022-09",
            end: "2024-07",
            bullets: [
                "Application pour s’inscrire aux séances de sport du lycée et proposer des activités.",
                "Site vitrine et livre d’or pour une application destinée aux enfants atteints de leucémie et à leurs familles.",
            ],
        },
        {
            id: "aria",
            group: "work",
            role: "Apprentie ingénieure Cloud & DevSecOps",
            org: "ARIA.bz",
            organizationSize: "Petite structure spécialisée en IA conversationnelle",
            start: "2026-01",
            end: "2026-08",
            place: "Nancy",
            bullets: [
                "Migration progressive de n8n vers des instances dédiées avec Docker Compose et des réseaux isolés.",
                "Mise en place de sauvegardes PostgreSQL automatisées, de TLS avec Traefik et de la supervision des services.",
            ],
        },
        {
            id: "tizzy",
            group: "work",
            role: "Alternante développeuse mobile & produit",
            org: "Tizzy",
            organizationSize: "Startup de billetterie · trois dirigeants",
            start: "2025-08",
            end: "2025-11",
            place: "Nancy / Hybride",
            bullets: [
                "Choix des fonctionnalités et maquettage avec les fondateurs.",
                "Développement du prototype mobile avec Flutter et Firebase.",
            ],
        },
        {
            id: "euroserum",
            group: "work",
            role: "Alternante développeuse logiciel, référente OPC",
            org: "Eurosérum (Groupe Sodiaal)",
            organizationSize: "Entreprise d’ingrédients laitiers · environ 800 salariés dans le monde",
            start: "2023-09",
            end: "2025-09",
            place: "Port-sur-Saône",
            bullets: [
                "Remplacement de fichiers Excel par des outils dédiés à l’usine.",
                "Création d'un tableau de bord de suivi et de lecture des données d'automates via OPC DA.",
                "Mise en place de Docker et GitLab.",
            ],
        },
        {
            id: "sdis70",
            group: "community",
            role: "Ancienne sapeuse-pompière volontaire",
            org: "SDIS 70",
            place: "Gray",
            bullets: ["Interventions d’urgence en équipe."],
        },
        {
            id: "sororit",
            group: "community",
            role: "Fondatrice et ancienne présidente",
            org: "Soror’IT",
            start: "2025-05",
            end: "2026-01",
            place: "Nancy",
            bullets: ["Création d’une association étudiante à Epitech Nancy pour valoriser les femmes dans la tech par des ateliers, des conférences et des échanges entre promotions."],
        },
    ],
};

export function getExperience(lang: Lang): ExperienceItem[] {
    return items[lang];
}
