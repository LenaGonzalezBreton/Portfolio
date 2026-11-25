import type { Lang } from "@/app/locales";
import type { ExperienceItem } from "@/app/data/experience";

export interface Dictionary {
    meta: { title: string; description: string };
    nav: {
        projects: string;
        web: string;
        experience: string;
        skills: string;
        contact: string;
        skipToContent: string;
        toggleTheme: string;
        menu: string;
        mainNavigation: string;
    };
    hero: { title: string; pitch: string; availability: string; contact: string; downloadCv: string; photoAlt: string };
    projects: { title: string; private: string; repo: string; experimentsTitle: string; experiments: { name: string; description: string }[] };
    web: { title: string; intro: string; reference: string; contribution: string; visit: string; cta: string; screenshotAlt: string };
    experience: { title: string; present: string; until: string; expectedEnd: string; groups: Record<ExperienceItem["group"], string> };
    skills: { title: string };
    contact: { title: string; intro: string; copy: string; copied: string; copyFailed: string; location: string; email: string };
    footer: { rights: string };
}

const en: Dictionary = {
    meta: {
        title: "Cloud & DevOps | Léna Gonzalez Breton",
        description: "Léna Gonzalez Breton is pursuing cloud and DevOps engineering, with an interest in systems architecture.",
    },
    nav: {
        projects: "Projects",
        web: "Websites",
        experience: "Experience",
        skills: "Skills",
        contact: "Contact",
        skipToContent: "Skip to content",
        toggleTheme: "Toggle dark mode",
        menu: "Menu",
        mainNavigation: "Main navigation",
    },
    hero: {
        title: "Cloud & DevOps",
        pitch: "Developer at Vosgelis, pursuing cloud and DevOps engineering.",
        availability: "Available for a permanent role from 2027",
        contact: "Contact me",
        downloadCv: "Download CV",
        photoAlt: "Portrait of Léna Gonzalez Breton",
    },
    projects: {
        title: "Projects",
        private: "Private project",
        repo: "View the repository",
        experimentsTitle: "Cloud & infrastructure experiments",
        experiments: [
            { name: "AI-assisted content automation", description: "In design: an event-driven AWS workflow for creating and publishing content." },
            { name: "Homelab & self-hosting", description: "Ongoing experiments with networking and self-hosted services on Raspberry Pi." },
        ],
    },
    web: {
        title: "Websites",
        intro: "Freelance websites, from simple showcases to larger projects.",
        reference: "Dommartin avec vous",
        contribution: "I designed and built the entire site for Dommartin and updated it daily.",
        visit: "Visit the site",
        cta: "Tell me about your project",
        screenshotAlt: "Home page of the Dommartin avec vous campaign website",
    },
    experience: {
        title: "Background", present: "Present", until: "to", expectedEnd: "expected",
        groups: { work: "Work experience", education: "Education", community: "Community involvement" },
    },
    skills: { title: "Skills" },
    contact: {
        title: "Contact",
        intro: "A role, a project, a question? Write to me.",
        copy: "Copy email address",
        copied: "Email address copied",
        copyFailed: "Copy failed. Select the email address and copy it manually.",
        location: "Location",
        email: "Email",
    },
    footer: { rights: "All rights reserved." },
};

const fr: Dictionary = {
    meta: {
        title: "Cloud & DevOps | Léna Gonzalez Breton",
        description: "Léna Gonzalez Breton s’oriente vers l’ingénierie cloud et DevOps, avec un intérêt pour l’architecture des systèmes.",
    },
    nav: {
        projects: "Projets",
        web: "Sites web",
        experience: "Parcours",
        skills: "Compétences",
        contact: "Contact",
        skipToContent: "Aller au contenu",
        toggleTheme: "Basculer le mode sombre",
        menu: "Menu",
        mainNavigation: "Navigation principale",
    },
    hero: {
        title: "Cloud & DevOps",
        pitch: "Développeuse chez Vosgelis, je m’oriente vers l’ingénierie cloud et DevOps.",
        availability: "Disponible en CDI à partir de 2027",
        contact: "Me contacter",
        downloadCv: "Télécharger le CV",
        photoAlt: "Portrait de Léna Gonzalez Breton",
    },
    projects: {
        title: "Projets",
        private: "Projet privé",
        repo: "Voir le dépôt",
        experimentsTitle: "Expérimentations cloud et infrastructure",
        experiments: [
            { name: "Automatisation de contenu assistée par IA", description: "En conception : un workflow événementiel sur AWS pour créer et publier du contenu." },
            { name: "Homelab et auto-hébergement", description: "Expérimentations en cours sur le réseau et l’auto-hébergement avec Raspberry Pi." },
        ],
    },
    web: {
        title: "Sites web",
        intro: "Sites vitrines en freelance. Projets plus complets sur demande.",
        reference: "Dommartin avec vous",
        contribution: "J’ai conçu et développé l’intégralité du site pour Dommartin, puis je l’ai mis à jour au quotidien.",
        visit: "Visiter le site",
        cta: "Parlez-moi de votre projet",
        screenshotAlt: "Page d'accueil du site de campagne Dommartin avec vous",
    },
    experience: {
        title: "Parcours", present: "Aujourd'hui", until: "à", expectedEnd: "fin prévue",
        groups: { work: "Expériences professionnelles", education: "Formation", community: "Engagements" },
    },
    skills: { title: "Compétences" },
    contact: {
        title: "Contact",
        intro: "Un poste, un projet, une question ? Écrivez-moi.",
        copy: "Copier l'adresse e-mail",
        copied: "Adresse e-mail copiée",
        copyFailed: "La copie a échoué. Sélectionnez l’adresse e-mail pour la copier manuellement.",
        location: "Localisation",
        email: "E-mail",
    },
    footer: { rights: "Tous droits réservés." },
};

const dictionaries: Record<Lang, Dictionary> = { fr, en };

export function getDictionary(lang: Lang): Dictionary {
    return dictionaries[lang];
}
