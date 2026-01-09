import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { clashDisplay, satoshi } from "./fonts";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { ThemeProvider } from "@/app/context/ThemeContext";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio de Léna Gonzalez Breton - Développeuse Fullstack & UI/UX Designer."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${clashDisplay.variable} ${satoshi.variable}`}>
            <body className="font-sans antialiased bg-background text-foreground selection:bg-accent/20 selection:text-ink">
                <ThemeProvider>
                    <LanguageProvider>
                        <Navbar />
                        {children}
                        <Analytics />
                        <Footer />
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
