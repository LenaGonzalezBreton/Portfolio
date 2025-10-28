import "./globals.css";
import type { Metadata } from "next";
import { clashDisplay, satoshi } from "./fonts";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Élégance tranquille + motion."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${clashDisplay.variable} ${satoshi.variable}`}>
        <body className="font-sans antialiased">
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
