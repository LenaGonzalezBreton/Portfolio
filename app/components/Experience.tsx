"use client";

import { motion } from "framer-motion";
import { getExperiences } from "@/app/data/experiences";
import { useLanguage } from "@/app/context/LanguageContext";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import { fadeUp } from "@/app/lib/animations";

export default function ExperienceTimeline() {
    const { t, language } = useLanguage();
    const experiences = getExperiences(language);

    function formatRange(start?: string, end?: string) {
        const locale = t.experience.today === "Today" ? "en-US" : "fr-FR";
        const fmt = (s?: string) =>
            !s ? "" : new Date(s + "-01").toLocaleDateString(locale, { year: "numeric", month: "short" });
        const a = fmt(start);
        const b = end ? fmt(end) : t.experience.today;
        return [a, b].filter(Boolean).join(" — ");
    }

    return (
        <section id="experience" className="py-24">
            <div className="container-clean">
                <motion.div {...fadeUp(0)} className="mb-10">
                    <h2 className="heading mb-2">{t.experience.title}</h2>
                    <p className="text-ink/80">
                        {t.experience.subtitle}
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Ligne verticale du timeline */}
                    <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-[color-mix(in_oklab,var(--accent)_35%,transparent)]" />

                    <ul className="space-y-8 pl-10">
                        {experiences.map((exp, i) => (
                            <motion.li key={exp.id} {...fadeUp(i * 0.05)} className="relative">
                                {/* Carte glass */}
                                <Card className="p-4 md:p-6">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="heading text-2xl leading-tight">
                                            {exp.title}
                                        </h3>
                                        <span className="text-ink/60">·</span>
                                        <span className="font-medium">{exp.company}</span>
                                    </div>

                                    <div className="mt-1 text-sm text-ink/70">
                                        <span>{formatRange(exp.start, exp.end)}</span>
                                        {exp.location ? <span> · {exp.location}</span> : null}
                                        {exp.contract ? <span> · {exp.contract}</span> : null}
                                    </div>

                                    {exp.summary && (
                                        <p className="mt-3 text-ink/80">{exp.summary}</p>
                                    )}

                                    {/* Tech badges */}
                                    {exp.tech?.length ? (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <Badge key={t} variant="secondary" className="bg-sand/50 text-ink/70 border-sand-dark/20">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Achievements */}
                                    <ul className="mt-4 space-y-2">
                                        {exp.achievements.map((a) => (
                                            <li key={a} className="text-ink/80 leading-relaxed flex items-start">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                <span>{a}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

