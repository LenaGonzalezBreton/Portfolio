"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
}

const isDark = () => document.documentElement.dataset.theme === "dark";

export default function ThemeToggle({ label }: { label: string }) {
    const dark = useSyncExternalStore(subscribe, isDark, () => false);

    function toggle() {
        const next = dark ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch {
            /* storage unavailable: the choice just won't persist */
        }
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
