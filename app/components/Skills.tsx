"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, skills, type SkillCategory, type Skill } from "@/app/data/skills";
import { useLanguage } from "@/app/context/LanguageContext";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import { fadeUp } from "@/app/lib/animations";

export default function SkillsSection() {
    const { t } = useLanguage();
    const [active, setActive] = useState<Set<SkillCategory>>(new Set()); // vide = tout

    const toggle = (c: SkillCategory) =>
        setActive(prev => {
            const next = new Set(prev);
            next.has(c) ? next.delete(c) : next.add(c);
            return next;
        });

    const reset = () => setActive(new Set());

    const filtered: Skill[] = useMemo(() => {
        if (active.size === 0) return skills;
        return skills.filter(s => active.has(s.category));
    }, [active]);

    const counts = useMemo(() => {
        const map: Record<SkillCategory, number> = { Frontend: 0, Backend: 0, DevOps: 0, Database: 0, Outils: 0 };
        skills.forEach(s => (map[s.category] += 1));
        return map;
    }, []);

    return (
        <section id="skills" className="py-24">
            <div className="container-clean">
                <motion.div {...fadeUp(0)} className="mb-8">
                    <h2 className="heading mb-2">{t.skills.title}</h2>
                    <p className="text-ink/80">
                        {t.skills.subtitle}
                    </p>
                </motion.div>

                {/* Filtres */}
                <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-2 md:gap-3 mb-10">
                    <button
                        onClick={reset}
                        className={`btn-ghost ${active.size === 0 ? "ring-1 ring-primary/20 bg-primary/5" : ""}`}
                        title="Tout afficher"
                    >
                        {t.skills.all}
                        <span className="ml-2 opacity-70">({skills.length})</span>
                    </button>

                    {categories.map((c) => {
                        const selected = active.has(c);
                        return (
                            <button
                                key={c}
                                onClick={() => toggle(c)}
                                className={`
                                    inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300
                                    ${selected
                                        ? "bg-primary/10 text-primary border-primary/20"
                                        : "bg-ink/5 text-ink/70 border-ink/10 hover:bg-ink/10"
                                    }
                                `}
                            >
                                {c}
                                <span className="ml-2 opacity-70">({counts[c]})</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Grille des skills */}
                <motion.div layout className="grid gap-4 md:gap-6 md:grid-cols-2">
                    <AnimatePresence initial={false} mode="popLayout">
                        {filtered.map((s, i) => (
                            <motion.div
                                key={`${s.category}-${s.name}`}
                                layout
                                {...fadeUp(i * 0.05)}
                            >
                                <Card className="p-4 md:p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-medium text-base md:text-lg text-ink">
                                                {s.name}
                                            </h3>
                                            <p className="text-sm text-ink/70">{s.category}{s.years ? ` · ${s.years} ${s.years > 1 ? t.skills.years : t.skills.year}` : ""}</p>
                                        </div>
                                    </div>

                                    {/* Barre de niveau */}
                                    <div className="mt-3">
                                        <div className="h-2 rounded-full bg-ink/5 overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${s.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            />
                                        </div>
                                        <div className="mt-1.5 text-xs text-ink/60 text-right">{s.level}%</div>
                                    </div>

                                    {/* Tags / sous-techs */}
                                    {s.tags?.length ? (
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {s.tags.map(t => (
                                                <Badge key={t} variant="secondary" className="text-xs py-0.5">
                                                    {t}
                                                </Badge>
                                            ))}
                                        </div>
                                    ) : null}
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

