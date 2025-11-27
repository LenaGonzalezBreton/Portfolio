"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { fadeUp } from "@/app/lib/animations";
import type { Interest } from "@/app/types";

const interestsData: Record<"fr" | "en", { title: string; subtitle: string; interests: Interest[] }> = {
    fr: {
        title: "Passions & Centres d'intérêt",
        subtitle: "Au-delà du code, ce qui m'anime au quotidien",
        interests: [
            {
                emoji: "🎨",
                title: "Design & UI/UX",
                description: "Passionnée par la création d'interfaces élégantes et intuitives. J'adore explorer les tendances design et créer des expériences utilisateur mémorables.",
                color: "from-purple-400 to-pink-400",
                hoverColor: "group-hover:from-purple-400 group-hover:to-pink-400",
            },
            {
                emoji: "🚒",
                title: "Pompier volontaire",
                description: "Engagement citoyen et service à la communauté. Une expérience qui m'a appris la rigueur, le travail d'équipe et la gestion du stress.",
                color: "from-red-400 to-orange-400",
                hoverColor: "group-hover:from-red-400 group-hover:to-orange-400",
            },
            {
                emoji: "🎮",
                title: "Gaming & E-sport",
                description: "Joueuse passionnée, j'apprécie la stratégie, la coordination d'équipe et les défis compétitifs des jeux vidéo.",
                color: "from-blue-400 to-cyan-400",
                hoverColor: "group-hover:from-blue-400 group-hover:to-cyan-400",
            },
            {
                emoji: "📚",
                title: "Veille technologique",
                description: "Toujours à l'affût des dernières innovations tech, frameworks et best practices. J'aime apprendre et expérimenter de nouvelles technologies.",
                color: "from-green-400 to-emerald-400",
                hoverColor: "group-hover:from-green-400 group-hover:to-emerald-400",
            },
            {
                emoji: "✈️",
                title: "Voyages & Découvertes",
                description: "Explorer de nouvelles cultures, cuisines et paysages. Chaque voyage est une source d'inspiration et d'ouverture d'esprit.",
                color: "from-amber-400 to-yellow-400",
                hoverColor: "group-hover:from-amber-400 group-hover:to-yellow-400",
            },
            {
                emoji: "🎵",
                title: "Musique",
                description: "De Radiohead à Chopin, en passant par System Of A Down et Twenty One Pilots. Une passion éclectique qui va du metal au classique.",
                color: "from-indigo-400 to-purple-400",
                hoverColor: "group-hover:from-indigo-400 group-hover:to-purple-400",
            },
        ],
    },
    en: {
        title: "Passions & Interests",
        subtitle: "Beyond code, what drives me daily",
        interests: [
            {
                emoji: "🎨",
                title: "Design & UI/UX",
                description: "Passionate about creating elegant and intuitive interfaces. I love exploring design trends and crafting memorable user experiences.",
                color: "from-purple-400 to-pink-400",
                hoverColor: "group-hover:from-purple-400 group-hover:to-pink-400",
            },
            {
                emoji: "🚒",
                title: "Volunteer Firefighter",
                description: "Civic engagement and community service. An experience that taught me rigor, teamwork, and stress management.",
                color: "from-red-400 to-orange-400",
                hoverColor: "group-hover:from-red-400 group-hover:to-orange-400",
            },
            {
                emoji: "🎮",
                title: "Gaming & E-sports",
                description: "Passionate gamer, I enjoy strategy, team coordination, and the competitive challenges of video games.",
                color: "from-blue-400 to-cyan-400",
                hoverColor: "group-hover:from-blue-400 group-hover:to-cyan-400",
            },
            {
                emoji: "📚",
                title: "Tech Watch",
                description: "Always on the lookout for the latest tech innovations, frameworks, and best practices. I love learning and experimenting with new technologies.",
                color: "from-green-400 to-emerald-400",
                hoverColor: "group-hover:from-green-400 group-hover:to-emerald-400",
            },
            {
                emoji: "✈️",
                title: "Travel & Discovery",
                description: "Exploring new cultures, cuisines, and landscapes. Every trip is a source of inspiration and open-mindedness.",
                color: "from-amber-400 to-yellow-400",
                hoverColor: "group-hover:from-amber-400 group-hover:to-yellow-400",
            },
            {
                emoji: "🎵",
                title: "Music",
                description: "From Radiohead to Chopin, through System Of A Down and Twenty One Pilots. An eclectic passion ranging from metal to classical.",
                color: "from-indigo-400 to-purple-400",
                hoverColor: "group-hover:from-indigo-400 group-hover:to-purple-400",
            },
        ],
    },
};

export default function Interests() {
    const { language } = useLanguage();
    const data = interestsData[language];

    return (
        <section id="interests" className="py-24 px-4 md:px-6 bg-muted/30">
            <div className="container-clean">
                {/* Header */}
                <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="heading mb-4">{data.title}</h2>
                    <p className="text-lg text-ink/70 leading-relaxed">
                        {data.subtitle}
                    </p>
                </motion.div>

                {/* Interests Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data.interests.map((interest, i) => (
                        <motion.div
                            key={interest.title}
                            {...fadeUp(i * 0.1)}
                            className="group relative"
                        >
                            {/* Gradient background on hover */}
                            <div className={`
                                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                bg-gradient-to-br ${interest.color}
                                blur-xl transition-opacity duration-500
                            `} />

                            {/* Card */}
                            <div className="
                                relative
                                card
                                h-full
                                group-hover:shadow-2xl
                                group-hover:-translate-y-2
                                transition-all duration-500
                            ">
                                {/* Emoji with gradient background */}
                                <div className="mb-4 relative">
                                    <div className={`
                                        absolute inset-0 -m-2
                                        bg-gradient-to-br ${interest.color}
                                        rounded-2xl opacity-20 blur-md
                                    `} />
                                    <span className="relative text-5xl block">{interest.emoji}</span>
                                </div>

                                {/* Content */}
                                <h3 className={`heading text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${interest.hoverColor} transition-all duration-300`}>
                                    {interest.title}
                                </h3>
                                <p className="text-ink/70 leading-relaxed">
                                    {interest.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
