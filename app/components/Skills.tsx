"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, skills, type SkillCategory, type Skill } from "@/app/data/skills";

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay: i * 0.02 } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
});

export default function SkillsSection() {
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
                <h2 className="heading mb-2">Hard Skills</h2>
                <p className="text-foreground/80 mb-6">
                    Filtre par domaine. Douceur visuelle, efficacité mentale. Tu connais. ✨
                </p>

                {/* Filtres */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8">
                    <button
                        onClick={reset}
                        className={`btn-ghost ${active.size === 0 ? "ring-1 ring-[color-mix(in_oklab,var(--accent)_60%,transparent)]" : ""}`}
                        title="Tout afficher"
                    >
                        Tout
                        <span className="ml-2 opacity-70">({skills.length})</span>
                    </button>

                    {categories.map((c) => {
                        const selected = active.has(c);
                        return (
                            <button
                                key={c}
                                onClick={() => toggle(c)}
                                className={`badge transition ${selected ? "ring-1 ring-[color-mix(in_oklab,var(--accent)_60%,transparent)]" : ""}`}
                            >
                                {c}
                                <span className="ml-2 opacity-70">({counts[c]})</span>
                            </button>
                        );
                    })}
                </div>

                {/* Grille des skills */}
                <motion.div layout className="grid gap-4 md:gap-6 md:grid-cols-2">
                    <AnimatePresence initial={false}>
                        {filtered.map((s, i) => (
                            <motion.div
                                key={`${s.category}-${s.name}`}
                                layout
                                {...fadeUp(i)}
                                className="glass rounded-2xl p-4 md:p-5"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-medium text-base md:text-lg text-foreground">
                                            {s.name}
                                        </h3>
                                        <p className="text-sm text-foreground/70">{s.category}{s.years ? ` · ${s.years} an${s.years > 1 ? "s" : ""}` : ""}</p>
                                    </div>
                                </div>

                                {/* Barre de niveau */}
                                <div className="mt-3">
                                    <div className="h-2 rounded-full bg-[color-mix(in_oklab,var(--muted)_60%,transparent)] overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${s.level}%`,
                                                background:
                                                    "linear-gradient(90deg, color-mix(in oklab, var(--accent) 75%, transparent), color-mix(in oklab, var(--primary) 60%, transparent))",
                                            }}
                                        />
                                    </div>
                                    <div className="mt-1.5 text-xs text-foreground/60">{s.level}%</div>
                                </div>

                                {/* Tags / sous-techs */}
                                {s.tags?.length ? (
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {s.tags.map(t => (
                                            <span key={t} className="badge text-xs py-0.5">{t}</span>
                                        ))}
                                    </div>
                                ) : null}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
