import type { Lang } from "@/app/locales";

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
    hero: { pitch: string; availability: string; contact: string; downloadCv: string; photoAlt: string };
    projects: { title: string; private: string; repo: string };
    web: { title: string; intro: string; reference: string; visit: string; cta: string; screenshotAlt: string };
    experience: { title: string; present: string };
    skills: { title: string };
    contact: { title: string; intro: string; copy: string; copied: string; location: string; email: string };
    footer: { rights: string };
}

const en: Dictionary = {
    meta: {
        title: "Léna Gonzalez Breton — Portfolio",
        description: "I design and ship products, from the need to production. Open to a permanent role from 2027; freelance websites in the meantime.",
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
        pitch: "I design and ship products, from the need to production.",
        availability: "Available for a permanent role from 2027",
        contact: "Contact me",
        downloadCv: "Download CV",
        photoAlt: "Portrait of Léna Gonzalez Breton",
    },
    projects: { title: "Projects", private: "Private project", repo: "View the repository" },
    web: {
        title: "Websites",
        intro: "Showcase websites, or more — let's discuss your project.",
        reference: "Recent work",
        visit: "Visit the site",
        cta: "Tell me about your project",
        screenshotAlt: "Home page of the Dommartin avec vous campaign website",
    },
    experience: { title: "Experience", present: "Present" },
    skills: { title: "Skills" },
    contact: {
        title: "Contact",
        intro: "A role, a project, a question? Write to me.",
        copy: "Copy email address",
        copied: "Email address copied",
        location: "Location",
        email: "Email",
    },
    footer: { rights: "All rights reserved." },
};

const fr: Dictionary = {
    meta: {
        title: "Léna Gonzalez Breton — Portfolio",
        description: "Je conçois et je livre des produits, du besoin à la mise en production. Disponible en CDI à partir de 2027 ; sites web en freelance d'ici là.",
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
        pitch: "Je conçois et je livre des produits, du besoin à la mise en production.",
        availability: "Disponible en CDI à partir de 2027",
        contact: "Me contacter",
        downloadCv: "Télécharger le CV",
        photoAlt: "Portrait de Léna Gonzalez Breton",
    },
    projects: { title: "Projets", private: "Projet privé", repo: "Voir le dépôt" },
    web: {
        title: "Sites web",
        intro: "Sites vitrines, ou plus — parlons de votre projet.",
        reference: "Réalisation récente",
        visit: "Visiter le site",
        cta: "Parlez-moi de votre projet",
        screenshotAlt: "Page d'accueil du site de campagne Dommartin avec vous",
    },
    experience: { title: "Parcours", present: "Aujourd'hui" },
    skills: { title: "Compétences" },
    contact: {
        title: "Contact",
        intro: "Un poste, un projet, une question ? Écrivez-moi.",
        copy: "Copier l'adresse e-mail",
        copied: "Adresse e-mail copiée",
        location: "Localisation",
        email: "E-mail",
    },
    footer: { rights: "Tous droits réservés." },
};

const dictionaries: Record<Lang, Dictionary> = { fr, en };

export function getDictionary(lang: Lang): Dictionary {
    return dictionaries[lang];
}
