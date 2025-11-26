"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import Card from "@/app/components/ui/Card";
import { fadeUp } from "@/app/lib/animations";

type SoftSkill = {
    icon: string;
    title: string;
    description: string;
};

const softSkillsData: Record<"fr" | "en", { title: string; intro: string; skills: SoftSkill[] }> = {
    fr: {
        title: "À propos",
        intro: "Développeuse fullstack passionnée par la création de solutions numériques concrètes. Mon approche combine rigueur technique et sensibilité design pour transformer vos problématiques en produits performants.",
        skills: [
            {
                icon: "🎯",
                title: "Orientée résultats",
                description: "Je transforme les objectifs en solutions concrètes avec une approche pragmatique et efficace.",
            },
            {
                icon: "🤝",
                title: "Esprit d'équipe",
                description: "Communication fluide et collaboration active pour atteindre des objectifs communs.",
            },
            {
                icon: "🚀",
                title: "Proactive",
                description: "J'anticipe les besoins et propose des améliorations continues pour optimiser les projets.",
            },
            {
                icon: "🎨",
                title: "Créative",
                description: "Je conçois des interfaces intuitives et esthétiques qui améliorent l'expérience utilisateur.",
            },
            {
                icon: "📚",
                title: "Apprenante continue",
                description: "Veille technologique constante et adaptation rapide aux nouvelles technologies.",
            },
            {
                icon: "⚡",
                title: "Adaptable",
                description: "Capacité à évoluer dans des environnements changeants et à relever de nouveaux défis.",
            },
        ],
    },
    en: {
        title: "About Me",
        intro: "Fullstack developer passionate about creating concrete digital solutions. My approach blends technical rigor with design sensitivity to transform your challenges into high-performing products.",
        skills: [
            {
                icon: "🎯",
                title: "Results-oriented",
                description: "I transform objectives into concrete solutions with a pragmatic and efficient approach.",
            },
            {
                icon: "🤝",
                title: "Team player",
                description: "Fluid communication and active collaboration to achieve common goals.",
            },
            {
                icon: "🚀",
                title: "Proactive",
                description: "I anticipate needs and propose continuous improvements to optimize projects.",
            },
            {
                icon: "🎨",
                title: "Creative",
                description: "I design intuitive and aesthetic interfaces that enhance user experience.",
            },
            {
                icon: "📚",
                title: "Continuous learner",
                description: "Constant technology watch and quick adaptation to new technologies.",
            },
            {
                icon: "⚡",
                title: "Adaptable",
                description: "Ability to evolve in changing environments and take on new challenges.",
            },
        ],
    },
};

export default function AboutMe() {
    const { language } = useLanguage();
    const data = softSkillsData[language];

    return (
        <section id="about" className="py-24 px-4 md:px-6">
            <div className="container-clean">
                {/* Header with Photo */}
                <motion.div
                    {...fadeUp(0)}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16"
                >
                    {/* Text Content */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="heading mb-4">{data.title}</h2>
                        <p className="text-lg text-ink/70 leading-relaxed">
                            {data.intro}
                        </p>
                    </div>

                    {/* Fun Photo */}
                    <motion.div
                        {...fadeUp(0.2)}
                        className="flex-shrink-0"
                    >
                        <div className="relative group">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />

                            {/* Photo container */}
                            <div className="relative">
                                <div className="
                                    w-48 h-48 md:w-56 md:h-56
                                    rounded-full overflow-hidden
                                    border-4 border-white/50
                                    shadow-2xl
                                    transform group-hover:rotate-6 group-hover:scale-105
                                    transition-all duration-500
                                    bg-muted
                                ">
                                    <img
                                        src="/portrait2.jpg"
                                        alt="Léna GB"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            const parent = e.currentTarget.parentElement;
                                            if (parent) {
                                                parent.classList.add('flex', 'items-center', 'justify-center');
                                                const span = document.createElement('span');
                                                span.textContent = '👋';
                                                span.className = 'text-6xl';
                                                parent.appendChild(span);
                                            }
                                        }}
                                    />
                                </div>

                                {/* Fun floating badge */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="
                                        absolute -bottom-4 -right-4
                                        bg-gradient-to-br from-primary to-accent
                                        text-white
                                        px-4 py-2
                                        rounded-full
                                        shadow-lg
                                        text-sm font-bold
                                        whitespace-nowrap
                                    "
                                >
                                    {language === "fr" ? "Coucou ! 👋" : "Hey there! 👋"}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Soft Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data.skills.map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            {...fadeUp(i * 0.1 + 0.3)}
                        >
                            <Card className="p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="text-4xl mb-4">{skill.icon}</div>
                                <h3 className="heading text-xl mb-2">{skill.title}</h3>
                                <p className="text-ink/70 leading-relaxed">
                                    {skill.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

