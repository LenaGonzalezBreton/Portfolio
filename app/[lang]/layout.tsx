import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { satoshi } from "@/app/fonts";
import { getDictionary } from "@/app/i18n/dictionary";
import { isLang, locales } from "@/app/locales";
import { themeInitScript } from "@/app/theme-script";
import { site } from "@/app/data/site";

type Params = Promise<{ lang: string }>;

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { lang } = await params;
    if (!isLang(lang)) return {};
    const { meta } = getDictionary(lang);
    const metadataBase = new URL(process.env.SITE_URL || site.url);
    return {
        title: meta.title,
        description: meta.description,
        metadataBase,
        alternates: { canonical: `/${lang}`, languages: { fr: "/fr", en: "/en", "x-default": "/en" } },
        openGraph: {
            title: meta.title,
            description: meta.description,
            locale: lang === "fr" ? "fr_FR" : "en_GB",
            type: "website",
            url: `/${lang}`,
            images: [{ url: "/portfolio-share.png", width: 1200, height: 630, alt: "Léna Gonzalez Breton · Cloud & DevOps" }],
        },
        twitter: { card: "summary_large_image" },
    };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
    const { lang } = await params;
    if (!isLang(lang)) notFound();
    const { nav } = getDictionary(lang);

    return (
        <html lang={lang} className={satoshi.variable} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-on-accent"
                >
                    {nav.skipToContent}
                </a>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
