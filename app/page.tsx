"use client";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import ProjectsGrid from "@/app/components/Projects";
import ExperienceTimeline from "@/app/components/Experience";
import SkillsSection from "@/app/components/Skills";
import Interests from "@/app/components/Interests";
import Contact from "@/app/components/Contact";
import { useLanguage } from "@/app/context/LanguageContext";

const Section = ({
    id, title, children,
}: { id: string; title: string; children: React.ReactNode }) => (
    <section id={id} className="scroll-mt-28 py-24 md:py-32">
        <div className="container-clean">
            <h2 className="heading text-3xl md:text-4xl mb-6">{title}</h2>
            <div className="text-ink/80">{children}</div>
        </div>
    </section>
);

export default function Home() {
    const { t } = useLanguage();
    return (
        <main>
            <Hero />
            <AboutMe />
            <ProjectsGrid />
            <ExperienceTimeline />
            <SkillsSection />
            <Interests />
            <Contact />
        </main>
    );
}
