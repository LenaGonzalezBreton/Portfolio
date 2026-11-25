"use client";

import type { Lang } from "@/app/locales";

export default function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
    const other: Lang = lang === "fr" ? "en" : "fr";

    function remember(e: React.MouseEvent<HTMLAnchorElement>) {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        document.cookie = `lang=${other}; max-age=31536000; path=/; samesite=lax`;
        if (window.location.hash) {
            e.preventDefault();
            window.location.assign(`/${other}${window.location.hash}`);
        }
    }

    return (
        <a
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            onClick={remember}
            className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-foreground hover:bg-surface"
        >
            {label}
        </a>
    );
}
