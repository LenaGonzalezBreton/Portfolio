"use client";

import { motion } from "framer-motion";
import { experiences, type Experience } from "@/app/data/experiences";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: {
        opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay }
    },
    viewport: { once: true, margin: "-10% 0px" },
});

function TechBadge({ label }: { label: string }) {
    return <span className="badge whitespace-nowrap">{label}</span>;
}

function Dot() {
    return (
        <span
            className="relative z-10 mt-1.5 block size-3 rounded-full"
            style={{ background: "color-mix(in oklab, var(--accent) 85%, white)" }}
        />
    );
}

function formatRange(start?: string, end?: string) {
    const fmt = (s?: string) =>
        !s ? "" : new Date(s + "-01").toLocaleDateString("fr-FR", { year: "numeric", month: "short" });
    const a = fmt(start);
    const b = end ? fmt(end) : "Aujourd’hui";
    return [a, b].filter(Boolean).join(" — ");
}

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24">
            <div className="container-clean">
                <h2 className="heading mb-2">Expériences</h2>
                <p className="text-foreground/80 mb-10">
                    Une sélection des missions et postes qui m’ont le plus construite — discipline sans rigidité, always.
                </p>

                <div className="relative">
                    {/* Ligne verticale du timeline */}
                    <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-[color-mix(in_oklab,var(--accent)_35%,transparent)]" />

                    <ul className="space-y-8 pl-10">
                        {experiences.map((exp, i) => (
                            <motion.li key={exp.id} {...fadeUp(i * 0.05)} className="relative">
                                {/* Carte glass */}
                                <article className="glass rounded-2xl px-5 py-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="heading text-2xl leading-tight">
                                            {exp.title}
                                        </h3>
                                        <span className="text-foreground/60">·</span>
                                        <span className="font-medium">{exp.company}</span>
                                    </div>

                                    <div className="mt-1 text-sm text-foreground/70">
                                        <span>{formatRange(exp.start, exp.end)}</span>
                                        {exp.location ? <span> · {exp.location}</span> : null}
                                        {exp.contract ? <span> · {exp.contract}</span> : null}
                                    </div>

                                    {exp.summary && (
                                        <p className="mt-3 text-foreground/80">{exp.summary}</p>
                                    )}

                                    {/* Tech badges */}
                                    {exp.tech?.length ? (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <TechBadge key={t} label={t} />
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Achievements */}
                                    <ul className="mt-4 space-y-2">
                                        {exp.achievements.map((a) => (
                                            <li key={a} className="text-foreground/80 leading-relaxed">
                                                • {a}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Liens */}
                                    {exp.links?.length ? (
                                        <div className="mt-5 flex flex-wrap gap-3">
                                            {exp.links.map((l) => (
                                                <a
                                                    key={l.url}
                                                    href={l.url}
                                                    className="btn-ghost"
                                                >
                                                    {l.label}
                                                </a>
                                            ))}
                                        </div>
                                    ) : null}
                                </article>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
