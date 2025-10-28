"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [active, setActive] = useState("#accueil");

    const navItems = [
        { href: "#accueil", label: "Accueil" },
        { href: "#projets", label: "Projets" },
        { href: "#apropos", label: "À propos" },
        { href: "#contact", label: "Contact" },
    ];

    // show/hide on scroll
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (Math.abs(y - lastScroll) < 10) return;
            setVisible(!(y > lastScroll && y > 100));
            setLastScroll(y);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setActive(href);
        const el = document.querySelector(href);
        if (!el) return;
        const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    key="navbar"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-3 py-2"
                >
                    <div
                        className="
              relative flex items-center gap-2 md:gap-4
              rounded-2xl border border-[rgb(0_0_0/0.06)] dark:border-[rgb(255_255_255/0.08)]
              bg-[rgb(255_255_255/0.55)] dark:bg-[rgb(17_17_17/0.55)]
              backdrop-blur-xl
              shadow-[0_10px_30px_rgb(0_0_0/0.06)]
              px-4 py-2 md:px-6 md:py-3
            "
                    >
                        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-transparent blur-xl -z-10" />
                        {navItems.map((item) => {
                            const isActive = active === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => onClick(e, item.href)}
                                    className={`
                    relative rounded-xl px-3 md:px-4 py-2 text-sm md:text-base font-medium transition-colors
                    ${isActive ? "text-primary dark:text-accent" : "text-foreground/80 hover:text-foreground/100 dark:text-foreground/80 dark:hover:text-foreground/100"}
                  `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
