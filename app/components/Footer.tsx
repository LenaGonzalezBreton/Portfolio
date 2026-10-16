import type { Dictionary } from "@/app/i18n/dictionary";

export default function Footer({ dict, name }: { dict: Dictionary["footer"]; name: string }) {
    return (
        <footer className="border-t border-border/40 py-10">
            <p className="container-clean text-sm text-muted-foreground">
                © {new Date().getFullYear()} {name}. {dict.rights}
            </p>
        </footer>
    );
}
