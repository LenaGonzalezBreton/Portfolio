"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/app/locales";
import LangSwitch from "@/app/components/LangSwitch";
import ThemeToggle from "@/app/components/ThemeToggle";

const links = ["projects", "web", "experience", "skills", "contact"] as const;

export default function Navbar({ lang, dict, name }: { lang: Lang; dict: Dictionary["nav"]; name: string }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    const linkClass =
        "flex min-h-11 items-center rounded-full px-3 text-base font-medium text-foreground hover:bg-surface md:text-sm";

    return (
        <header className="sticky top-0 z-40 border-b border-border/30 bg-background/80 backdrop-blur-xl">
            <div className="container-clean flex min-h-14 items-center justify-between gap-2">
                <a href={`/${lang}`} className="flex min-h-11 items-center text-sm font-bold sm:text-base">
                    <span aria-hidden className="sm:hidden">Léna G. B.</span>
                    <span className="sr-only sm:not-sr-only">{name}</span>
                </a>

                <div className="flex items-center gap-1">
                    <nav aria-label={dict.mainNavigation}>
                        <ul
                            id="site-menu"
                            className={`${
                                open
                                    ? "absolute inset-x-0 top-full flex flex-col border-b border-border/30 bg-background px-4 py-2"
                                    : "hidden"
                            } md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}
                        >
                            {links.map((id) => (
                                <li key={id}>
                                    <a href={`#${id}`} className={linkClass} onClick={() => setOpen(false)}>
                                        {dict[id]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <LangSwitch lang={lang} label={lang === "fr" ? "English" : "Français"} />
                    <ThemeToggle label={dict.toggleTheme} />
                    <button
                        type="button"
                        aria-label={dict.menu}
                        aria-expanded={open}
                        aria-controls="site-menu"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-surface md:hidden"
                    >
                        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
