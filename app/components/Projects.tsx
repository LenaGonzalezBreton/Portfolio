"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { getProjects } from "@/app/data/projects";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import { fadeUp } from "@/app/lib/animations";
import { Github, ExternalLink, Check } from "lucide-react";

export default function ProjectsGrid() {
    const { t, language } = useLanguage();
    const projects = getProjects(language);

    const getBadgeVariant = (status: string) => {
        switch (status) {
            case "private": return "secondary";
            case "wip": return "warning";
            case "opensource": return "primary";
            default: return "primary";
        }
    };

    return (
        <section id="projets" className="py-24">
            <div className="container-clean">
                <motion.div {...fadeUp(0)} className="mb-12">
                    <h2 className="heading mb-2">{t.projects.title}</h2>
                    <p className="text-ink/80">{t.projects.subtitle}</p>
                </motion.div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <motion.div key={p.title} {...fadeUp(i * 0.1)}>
                            <Card className="h-full p-4 md:p-6 flex flex-col">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="heading text-2xl">{p.title}</h3>
                                    {p.badge && (
                                        <Badge variant={getBadgeVariant(p.status)}>
                                            {p.badge}
                                        </Badge>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-ink/80 mb-4">{p.description}</p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tech.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="bg-sand/50 text-ink/70 border-sand-dark/20">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {p.features.map((f) => (
                                        <li key={f} className="flex items-start text-ink/80 text-sm">
                                            <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-ink/5">
                                    {p.repo && (
                                        <motion.a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -2, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn inline-flex items-center gap-2 text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            {t.projects.seeRepo}
                                        </motion.a>
                                    )}

                                    {p.live && (
                                        <motion.a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -2, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn-ghost inline-flex items-center gap-2 text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            {t.projects.seeLive}
                                        </motion.a>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

