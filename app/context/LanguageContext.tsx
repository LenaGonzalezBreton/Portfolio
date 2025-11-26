"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface Translations {
    navbar: {
        bookCall: string;
    };
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        paragraph: string;
        cta: string;
        role: string;
        available: string;
        latestCompanies: string;
    };
    projects: {
        title: string;
        subtitle: string;
        seeRepo: string;
        seeLive: string;
        badges: {
            private: string;
            wip: string;
            opensource: string;
        };
    };
    skills: {
        title: string;
        subtitle: string;
        all: string;
        year: string;
        years: string;
    };
    experience: {
        title: string;
        subtitle: string;
        today: string;
    };
    contact: {
        title: string;
        description: string;
    };
    footer: {
        role: string;
        description: string;
        available: string;
        navigation: string;
        links: {
            home: string;
            about: string;
            projects: string;
            experience: string;
            skills: string;
            interests: string;
            music: string;
            contact: string;
        };
        socials: string;
        rights: string;
        madeWith: string;
        cookies: string;
    };
}

const translations: Record<Language, Translations> = {
    fr: {
        navbar: {
            bookCall: "Réserver un appel",
        },
        hero: {
            badge: "RECHERCHE ALTERNANCE",
            title: "Développeur Fullstack",
            subtitle: "UI/UX Designer",
            paragraph: "Plus qu'une développeuse, je suis votre partenaire produit. Je conçois des solutions numériques concrètes pour répondre à vos problématiques et accélérer votre croissance.",
            cta: "Voir mes projets",
            role: "Role",
            available: "Disponible",
            latestCompanies: "Dernières entreprises",
        },
        projects: {
            title: "Projets",
            subtitle: "Une sélection récente. Le reste dort dans des branches bien rangées 😌",
            seeRepo: "Voir le repo",
            seeLive: "Voir en ligne",
            badges: {
                private: "Privé",
                wip: "WIP",
                opensource: "Open-source",
            },
        },
        skills: {
            title: "Hard Skills",
            subtitle: "Filtre par domaine. Douceur visuelle, efficacité mentale. Tu connais. ✨",
            all: "Tout",
            year: "an",
            years: "ans",
        },
        experience: {
            title: "Expériences",
            subtitle: "Une sélection des missions et postes qui m'ont le plus construite — discipline sans rigidité, always.",
            today: "Aujourd'hui",
        },
        contact: {
            title: "Contact",
            description: "Disponible pour alternance / freelance. Écris-moi 👉",
        },
        footer: {
            role: "Développeuse Fullstack & UI/UX Designer.",
            description: "Je conçois des solutions numériques concrètes pour répondre à vos problématiques.",
            available: "Disponible pour mission",
            navigation: "Navigation",
            links: {
                home: "Accueil",
                about: "À propos",
                projects: "Projets",
                experience: "Expérience",
                skills: "Compétences",
                interests: "Passions",
                music: "Musique",
                contact: "Contact",
            },
            socials: "Réseaux",
            rights: "Tous droits réservés.",
            madeWith: "Fait avec le",
            cookies: "et des bons cookies.",
        },
    },
    en: {
        navbar: {
            bookCall: "Book a call",
        },
        hero: {
            badge: "LOOKING FOR APPRENTICESHIP",
            title: "Fullstack Developer",
            subtitle: "UI/UX Designer",
            paragraph: "More than a developer, I'm your product partner. I design concrete digital solutions to address your challenges and accelerate your growth.",
            cta: "View my projects",
            role: "Role",
            available: "Available",
            latestCompanies: "Latest companies",
        },
        projects: {
            title: "Projects",
            subtitle: "A recent selection. The rest sleeps in well-organized branches 😌",
            seeRepo: "View repo",
            seeLive: "View live",
            badges: {
                private: "Private",
                wip: "WIP",
                opensource: "Open-source",
            },
        },
        skills: {
            title: "Hard Skills",
            subtitle: "Filter by domain. Visual smoothness, mental efficiency. You know. ✨",
            all: "All",
            year: "year",
            years: "years",
        },
        experience: {
            title: "Experience",
            subtitle: "A selection of missions and positions that shaped me the most — discipline without rigidity, always.",
            today: "Today",
        },
        contact: {
            title: "Contact",
            description: "Available for apprenticeship / freelance. Write to me 👉",
        },
        footer: {
            role: "Fullstack Developer & UI/UX Designer.",
            description: "I design concrete digital solutions to address your challenges.",
            available: "Available for projects",
            navigation: "Navigation",
            links: {
                home: "Home",
                about: "About",
                projects: "Projects",
                experience: "Experience",
                skills: "Skills",
                interests: "Interests",
                music: "Music",
                contact: "Contact",
            },
            socials: "Socials",
            rights: "All rights reserved.",
            madeWith: "Made with",
            cookies: "and good cookies.",
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
