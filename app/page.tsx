"use client";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import ProjectsGrid from "@/app/components/Projects";
import ExperienceTimeline from "@/app/components/Experience";
import SkillsSection from "@/app/components/Skills";

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
    return (
        <main>
            <Hero />
            <ProjectsGrid />
            <ExperienceTimeline />
            <SkillsSection />

            <Section id="contact" title="Contact">
                <p>Disponible pour alternance / freelance. Écris-moi 👉 <span className="text-accent underline">ton@mail</span></p>
            </Section>
        </main>
    );
}
