"use client";

import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    tech: string[];
    features: string[];
    repo?: string;
    live?: string;
    badge?: string;
};

const projects: Project[] = [
    {
        title: "OPSY",
        description: "Logiciel industriel de dépilement d'automate pour l'entreprise Eurosérum.",
        tech: ["C#", "MAUI", "OPCDA", "SSMS"],
        features: ["Lecture/Ecriture OPC", "Enregistrement en base de données", "Rapidité 1,2 seconde", "Multi-threading","Gestion d'erreur et auto-diag"],
        badge: "Privé",
    },
    {
        title: "FluCast - Hackaton (48h)",
        description: "Idéation de projet lors d'un Hackaton pour la présidence de la république. Création d'un outil pour optimiser la gestion de la crise de la grippe.",
        tech: ["Python/Streamlit", "Prophet"],
        features: ["Cartes régionales et nationales", "Prévisions tension grippale s+1", "Data analyse", "Prophet entrainé sur plusieurs dataset", "Précision des résultats"],
        repo: "https://github.com/LenaGonzalezBreton/FluCast",
        live: "https://flucast.streamlit.app/",
        badge: "Open-source",
    },
    {
        title: "FitMe",
        description: "Application sportive pour personne menstruée ou ménopausée.",
        tech: ["React Native", "Expo", "TailwindCSS" ,"NestJS", "Firebase", "Docker"],
        features: ["Suivi du cycle", "Proposition d'exercice en adéquation avec la phase du cycle", "UI motivante", "Système de streaks"],
        repo: "https://github.com/LenaGonzalezBreton/FitMe",
        badge: "WIP",
    },
    {
        title: "Tizzy",
        description: "Product design, maquettage et début de réalisation d'une app mobile dédié à la revente de tickets dernière minute.",
        tech: ["Figma", "Flutter", "Firebase"],
        features: ["Authentification", "Visualitation des places", "Recherche et filtres", "Système de drop","Profil"],
        badge: "Privé",
    },
    {
        title: "Copilote",
        description: "Développement de l'ERP d'Eurosérum, notamment la partie maintenance.",
        tech: ["Vb.net", "SSMS"],
        features: ["Gestion des stocks", "Entrée manuelle d'article", "Filtres", "Lecture d'excel pour rentrée auto","CRUD"],
        badge: "Privé",
    },
    {
        title: "Portfolio",
        description: "Développement de mon portfolio",
        tech: ["Next.js", "Typescript", "TailwindCSS","Framer Motion","Hébergement maison sur serveur"],
        features: ["Listing de projets", "About me section", "Hero 3D", "Contact","Experiences et formations"],
        repo: "https://github.com/LenaGonzalezBreton/Portfolio",
        badge: "Privé",
    },
];

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: i * 0.05 } },
    viewport: { once: true, margin: "-10% 0px" },
});

// variantes visuelles simples pour le badge
function badgeClass(b?: string) {
    const key = (b ?? "").toLowerCase();
    switch (key) {
        case "privé":
            return "bg-[color-mix(in_oklab,var(--primary)_16%,transparent)] border-[color-mix(in_oklab,var(--primary)_40%,transparent)]";
        case "wip":
            return "bg-[rgb(255_200_0/0.18)] border-[rgb(255_200_0/0.40)] text-[rgb(110_90_0)]";
        case "prototype":
            return "bg-[rgb(0_136_255/0.18)] border-[rgb(0_136_255/0.40)] text-[rgb(0_70_140)]";
        // Open-source (ou par défaut) -> style .badge d’origine (accent)
        default:
            return "";
    }
}

function TechBadge({ label }: { label: string }) {
    return <span className="badge whitespace-nowrap">{label}</span>;
}

function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden className="mr-2 inline">
            <path fill="currentColor" d="M7.6 13.6L3.8 9.8l1.4-1.4 2.4 2.4 6.2-6.2 1.4 1.4z" />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="mr-2 -ml-1">
            <path
                fill="currentColor"
                d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6A12 12 0 0012 .5z"
            />
        </svg>
    );
}

function ExternalIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="mr-2 -ml-1">
            <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/>
        </svg>
    );
}

export default function ProjectsGrid() {
    return (
        <section id="projets" className="py-24">
            <div className="container-clean">
                <h2 className="heading mb-2">Projets</h2>
                <p className="text-ink/80 mb-8">Une sélection récente. Le reste dort dans des branches bien rangées 😌</p>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <motion.article key={p.title} {...fadeUp(i)} className="card group">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="heading text-2xl">{p.title}</h3>
                                {p.badge && (
                                    <span className={`badge ${badgeClass(p.badge)}`}>{p.badge}</span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="mt-2 text-ink/80">{p.description}</p>

                            {/* Tech badges */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <TechBadge key={t} label={t} />
                                ))}
                            </div>

                            {/* Features */}
                            <ul className="mt-5 space-y-2">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start text-ink/80">
                                        <CheckIcon />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTAs (conditionnels) */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {p.repo && (
                                    <motion.a
                                        href={p.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 280, damping: 16 }}
                                        className="btn inline-flex"
                                    >
                                        <GithubIcon />
                                        Voir le repo
                                    </motion.a>
                                )}

                                {p.live && (
                                    <motion.a
                                        href={p.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 280, damping: 16 }}
                                        className="btn-ghost inline-flex"
                                    >
                                        <ExternalIcon />
                                        Voir en ligne
                                    </motion.a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
