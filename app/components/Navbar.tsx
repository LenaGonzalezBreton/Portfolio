"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setVisible(false);
                setMobileMenuOpen(false); // Close menu on scroll down
            } else {
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleLanguage = () => {
        setLanguage(language === "fr" ? "en" : "fr");
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    key="navbar"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" as const }}
                    className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none"
                >
                    <div className="container-clean pointer-events-auto">
                        <div
                            className="
                                relative flex items-center justify-between gap-4
                                rounded-full border border-muted
                                bg-[rgb(var(--sand-rgb)/0.65)] backdrop-blur-xl
                                shadow-soft
                                px-4 py-3 md:px-6
                            "
                        >
                            {/* Left: Logo + Name */}
                            <Link href="/" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
                                    L
                                </div>
                                <span className="font-medium text-ink tracking-tight hidden sm:block">Léna GB</span>
                            </Link>

                            {/* Center: Navigation Links (Desktop) */}
                            <nav className="hidden md:flex items-center gap-1">
                                <a href="#about" className="px-3 py-1.5 text-sm text-ink/70 hover:text-ink hover:bg-ink/5 rounded-full transition-all">
                                    {t.footer.links.about}
                                </a>
                                <a href="#projets" className="px-3 py-1.5 text-sm text-ink/70 hover:text-ink hover:bg-ink/5 rounded-full transition-all">
                                    {t.footer.links.projects}
                                </a>
                                <a href="#experience" className="px-3 py-1.5 text-sm text-ink/70 hover:text-ink hover:bg-ink/5 rounded-full transition-all">
                                    {t.footer.links.experience}
                                </a>
                                <a href="#skills" className="px-3 py-1.5 text-sm text-ink/70 hover:text-ink hover:bg-ink/5 rounded-full transition-all">
                                    {t.footer.links.skills}
                                </a>
                                <a href="#interests" className="px-3 py-1.5 text-sm text-ink/70 hover:text-ink hover:bg-ink/5 rounded-full transition-all">
                                    {t.footer.links.interests}
                                </a>
                            </nav>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-2 md:gap-3">
                                {/* Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    className="
                                        w-9 h-9 rounded-full
                                        bg-ink/10 hover:bg-ink/15
                                        transition-colors
                                        flex items-center justify-center
                                    "
                                    aria-label="Toggle theme"
                                >
                                    {theme === "light" ? (
                                        <Moon className="w-4 h-4 text-ink" />
                                    ) : (
                                        <Sun className="w-4 h-4 text-ink" />
                                    )}
                                </button>

                                {/* Language Switcher */}
                                <button
                                    onClick={toggleLanguage}
                                    className="
                                        relative w-14 h-7 rounded-full
                                        bg-ink/10 hover:bg-ink/15
                                        transition-colors
                                        flex items-center
                                        px-1
                                    "
                                    aria-label="Toggle language"
                                >
                                    <motion.div
                                        className="
                                            w-5 h-5 rounded-full
                                            bg-gradient-to-br from-primary to-accent
                                            shadow-sm
                                            flex items-center justify-center
                                            text-white text-[10px] font-bold
                                        "
                                        animate={{ x: language === "fr" ? 0 : 24 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    >
                                        {language.toUpperCase()}
                                    </motion.div>
                                </button>

                                {/* Mobile Menu Toggle */}
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="md:hidden w-9 h-9 rounded-full bg-ink/10 hover:bg-ink/15 flex items-center justify-center transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {mobileMenuOpen ? <X className="w-4 h-4 text-ink" /> : <Menu className="w-4 h-4 text-ink" />}
                                </button>

                                {/* CTA (Desktop only) */}
                                <Link
                                    href="#contact"
                                    className="
                                        hidden md:inline-flex items-center justify-center
                                        rounded-full px-5 py-2
                                        bg-ink text-sand font-medium text-sm
                                        shadow-soft hover:shadow-hover
                                        transition-all hover:-translate-y-0.5
                                    "
                                >
                                    {t.navbar.bookCall}
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Dropdown */}
                        <AnimatePresence>
                            {mobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="
                                        absolute top-full left-0 right-0 mt-2 mx-4
                                        rounded-3xl border border-muted
                                        bg-[rgb(var(--sand-rgb)/0.9)] backdrop-blur-xl
                                        shadow-xl p-4
                                        flex flex-col gap-2
                                        md:hidden
                                    "
                                >
                                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl hover:bg-ink/5 text-ink font-medium transition-colors">
                                        {t.footer.links.about}
                                    </a>
                                    <a href="#projets" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl hover:bg-ink/5 text-ink font-medium transition-colors">
                                        {t.footer.links.projects}
                                    </a>
                                    <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl hover:bg-ink/5 text-ink font-medium transition-colors">
                                        {t.footer.links.experience}
                                    </a>
                                    <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl hover:bg-ink/5 text-ink font-medium transition-colors">
                                        {t.footer.links.skills}
                                    </a>
                                    <a href="#interests" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl hover:bg-ink/5 text-ink font-medium transition-colors">
                                        {t.footer.links.interests}
                                    </a>
                                    <div className="h-px bg-ink/10 my-1" />
                                    <Link
                                        href="#contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="
                                            flex items-center justify-center
                                            rounded-xl px-5 py-3
                                            bg-ink text-sand font-medium text-sm
                                            shadow-soft
                                        "
                                    >
                                        {t.navbar.bookCall}
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

