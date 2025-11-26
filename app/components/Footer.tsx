"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { SOCIAL_LINKS } from "@/app/constants";
import { Linkedin, Github, GraduationCap, ArrowRight } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socials = [
        { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: <Linkedin className="w-4 h-4" /> },
        { label: "GitHub", href: SOCIAL_LINKS.github, icon: <Github className="w-4 h-4" /> },
        { label: "Epitech", href: SOCIAL_LINKS.epitech, icon: <GraduationCap className="w-4 h-4" /> },
    ];

    return (
        <footer className="relative bg-muted/30 pt-20 pb-10 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

            <div className="container-clean">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                                L
                            </div>
                            <span className="font-bold text-xl text-ink tracking-tight">Léna GB</span>
                        </Link>
                        <p className="text-ink/60 max-w-sm leading-relaxed">
                            {t.footer.role}
                            <br />
                            {t.footer.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {t.footer.available}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="heading text-sm mb-4">{t.footer.navigation}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.home}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.about}
                                </a>
                            </li>
                            <li>
                                <a href="#projets" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.projects}
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.experience}
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.skills}
                                </a>
                            </li>
                            <li>
                                <a href="#interests" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.interests}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                                    {t.footer.links.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="heading text-sm mb-4">{t.footer.socials}</h3>
                        <ul className="space-y-2">
                            {socials.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-2 group"
                                    >
                                        {social.label}
                                        <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                            {social.icon}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-ink/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/40">
                    <p>© {currentYear} Léna Gonzalez Breton. {t.footer.rights}</p>
                    <p className="flex items-center gap-1">
                        {t.footer.madeWith} <span className="text-red-400">❤</span> {t.footer.cookies}
                    </p>
                </div>
            </div>
        </footer>
    );
}

