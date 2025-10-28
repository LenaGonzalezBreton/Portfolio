    // components/ThemeToggle.tsx
    "use client";
    import { useEffect, useState } from "react";

    export function ThemeToggle() {
        const [theme, setTheme] = useState<"light" | "dark">("light");

        useEffect(() => {
            const current = localStorage.getItem("theme") as "light" | "dark" | null;
            if (current) {
                setTheme(current);
                document.documentElement.dataset.theme = current;
            }
        }, []);

        const toggle = () => {
            const next = theme === "light" ? "dark" : "light";
            setTheme(next);
            document.documentElement.dataset.theme = next;
            localStorage.setItem("theme", next);
        };

        return (
            <button
                onClick={toggle}
                className="fixed top-5 right-5 bg-muted px-4 py-2 rounded-xl shadow-soft text-ink hover:shadow-hover transition"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        );
    }
