"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { fadeUp } from "@/app/lib/animations";
import { SOCIAL_LINKS } from "@/app/constants";
import { Linkedin, Github, GraduationCap } from "lucide-react";

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-4 md:px-6 overflow-hidden">
            {/* Background Decor */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-sand to-muted blur-3xl opacity-60" />
                <div className="absolute top-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-muted to-sand blur-3xl opacity-50" />
            </div>

            <div className="container-clean">
                <div className="
                    relative grid md:grid-cols-[minmax(0,1fr)_420px] gap-0
                    rounded-[2.5rem]
                    bg-[rgb(var(--sand-rgb)/0.4)] backdrop-blur-2xl
                    border border-[rgb(var(--ink-rgb)/0.03)]
                    shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)]
                    overflow-hidden
                ">
                    {/* Left Column: Text */}
                    <div className="p-8 md:p-12 flex flex-col justify-center items-start z-10">
                        {/* Badge */}
                        <motion.div
                            {...fadeUp(0.1)}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color-mix(in_oklab,var(--accent)_15%,transparent)] border border-[color-mix(in_oklab,var(--accent)_20%,transparent)] mb-6"
                        >
                            <img src="/emojis/sparkles.png" alt="Sparkles" className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-wide text-accent uppercase">{t.hero.badge}</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            {...fadeUp(0.2)}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-chrome tracking-tight leading-[0.95] mb-2"
                        >
                            {t.hero.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.span
                            {...fadeUp(0.25)}
                            className="block text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6"
                        >
                            {t.hero.subtitle}
                        </motion.span>

                        {/* Paragraph */}
                        <motion.p
                            {...fadeUp(0.3)}
                            className="text-base md:text-lg text-ink/70 leading-relaxed max-w-lg mb-8"
                        >
                            {t.hero.paragraph}
                        </motion.p>

                        {/* CTA */}
                        <motion.div {...fadeUp(0.4)}>
                            <a
                                href="#projets"
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full px-8 py-4
                                    bg-ink text-sand font-medium text-base
                                    shadow-lg shadow-ink/10
                                    transition-all hover:scale-[1.02] hover:shadow-xl
                                "
                            >
                                {t.hero.cta}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative h-[500px] md:h-auto bg-gradient-to-br from-white/40 to-transparent md:border-l border-[rgb(var(--ink-rgb)/0.03)] overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

                        {/* Content Container - Centered for composition */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">

                            {/* Portrait Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
                                className="
                                    relative w-64 h-64 md:w-72 md:h-72
                                    rounded-3xl overflow-hidden
                                    shadow-2xl shadow-ink/5
                                    z-10 bg-muted
                                "
                            >
                                {/* Image with fallback */}
                                <img
                                    src="/portrait.jpg"
                                    alt="Portrait"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                        const span = document.createElement('span');
                                        span.textContent = 'Portrait';
                                        span.className = 'text-ink/20 font-bold text-xl';
                                        e.currentTarget.parentElement?.appendChild(span);
                                    }}
                                />
                            </motion.div>

                            {/* Floating Status Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="
                                    absolute top-1/4 right-8 md:right-12
                                    bg-white/90 backdrop-blur-md
                                    p-4 rounded-2xl
                                    shadow-lg shadow-black/5
                                    border border-white/50
                                    z-20
                                    max-w-[160px]
                                "
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center">
                                        <img src="/emojis/rocket.png" alt="Rocket" className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{t.hero.role}</span>
                                        <span className="text-xs font-bold text-neutral-900">{t.hero.title}</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center px-2 py-1 rounded-lg bg-green-50 text-green-700 text-[10px] font-bold">
                                    {t.hero.available}
                                </div>
                            </motion.div>

                        </div>

                        {/* Brand Strip (Bottom) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-primary to-accent flex items-center justify-between px-6 md:px-8 text-white"
                        >
                            <div className="flex flex-col justify-center">
                                <span className="text-[10px] uppercase tracking-widest opacity-80 mb-0.5">{t.hero.latestCompanies}</span>
                                <span className="text-sm font-medium">Tizzy • Eurosérum</span>
                            </div>
                            {/* Social Icons (Desktop) */}
                            <div className="hidden md:flex items-center gap-3">
                                {/* LinkedIn */}
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-sm"
                                    title="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                {/* GitHub */}
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-sm"
                                    title="GitHub"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                {/* Epitech */}
                                <a
                                    href={SOCIAL_LINKS.epitech}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-sm"
                                    title="Epitech"
                                >
                                    <GraduationCap className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

