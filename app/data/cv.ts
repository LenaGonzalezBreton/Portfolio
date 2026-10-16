import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import type { Lang } from "@/app/locales";

/** Public URL of the CV for a language, or undefined while the PDF is not in public/cv. */
export function cvHref(lang: Lang): string | undefined {
    const file = `cv-${lang}.pdf`;
    return existsSync(path.join(process.cwd(), "public", "cv", file)) ? `/cv/${file}` : undefined;
}
