"use client";

import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/app/locales";
import LangSwitch from "@/app/components/LangSwitch";
import ThemeToggle from "@/app/components/ThemeToggle";

const links = ["projects", "web", "experience", "skills", "contact"] as const;

export default function Navbar({ lang, dict, name }: { lang: Lang; dict: Dictionary["nav"]; name: string }) {
    const [open, setOpen] = useState(false);

    const menuButton = useRef<HTMLButtonElement>(null);

    const linkClass =
        "flex min-h-11 items-center rounded-full px-3 text-base font-medium text-foreground hover:bg-surface md:text-sm";

    return (
        <header
            className="sticky top-0 z-40 border-b border-border/30 bg-background"
            onKeyDown={(event) => {
                if (open && event.key === "Escape") {
                    setOpen(false);
                    menuButton.current?.focus();
                }
            }}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
            }}
        >
            <div className="container-clean flex min-h-14 items-center justify-between gap-2">
                <a href={`/${lang}`} aria-label={name} className="flex min-h-11 items-center text-sm font-bold sm:text-base">
                    <span className="hidden min-[380px]:inline">{name}</span>
                    <span className="min-[380px]:hidden">{name.split(" ")[0]}</span>
                </a>

                <div className="flex items-center gap-1">
                    <LangSwitch lang={lang} label={lang === "fr" ? "English" : "Français"} />
                    <ThemeToggle label={dict.toggleTheme} />
                    <button
                        ref={menuButton}
                        type="button"
                        aria-label={dict.menu}
                        aria-expanded={open}
                        aria-controls="site-menu"
                        onClick={() => setOpen((value) => !value)}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-surface lg:hidden"
                    >
                        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
                    </button>
                    <nav aria-label={dict.mainNavigation}>
                        <ul
                            id="site-menu"
                            className={`${
                                open
                                    ? "absolute inset-x-0 top-full flex max-h-[calc(100dvh-5rem)] flex-col overflow-y-auto border-b border-border/30 bg-background px-4 py-2"
                                    : "hidden"
                            } lg:static lg:flex lg:max-h-none lg:flex-row lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
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
                </div>
            </div>
        </header>
    );
}
