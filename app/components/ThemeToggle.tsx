"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ label }: { label: string }) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setDark(document.documentElement.dataset.theme === "dark");
    }, []);

    function toggle() {
        const next = dark ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch {
            /* storage unavailable: the choice just won't persist */
        }
        setDark(next === "dark");
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={label}
            aria-pressed={dark}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface"
        >
            {dark ? <Sun aria-hidden className="size-5" /> : <Moon aria-hidden className="size-5" />}
        </button>
    );
}
