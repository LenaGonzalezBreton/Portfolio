"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/app/constants";
import Card from "@/app/components/ui/Card";
import { fadeUp } from "@/app/lib/animations";
import { Mail, MapPin, Briefcase, Linkedin, Github, GraduationCap, Copy, Check, ArrowRight } from "lucide-react";

type ContactInfo = {
    icon: React.ReactNode;
    label: string;
    value: string;
    link?: string;
    copyable?: boolean;
};

type Language = {
    flag: string;
    name: string;
    level: string;
};

type SocialLink = {
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
};

export default function Contact() {
    const { t, language } = useLanguage();
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactData: Record<"fr" | "en", {
        title: string;
        subtitle: string;
        cta: string;
        availability: string;
        languages: { title: string; items: Language[] };
        contact: ContactInfo[];
        socials: SocialLink[];
    }> = {
        fr: {
            title: "Travaillons ensemble",
            subtitle: "Disponible pour alternance ou freelance. Discutons de votre projet !",
            cta: "Réserver un appel",
            availability: "Disponible immédiatement",
            languages: {
                title: "Langues",
                items: [
                    { flag: "🇫🇷", name: "Français", level: "Natif" },
                    { flag: "🇬🇧", name: "Anglais", level: "Professionnel" },
                ],
            },
            contact: [
                {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: CONTACT_INFO.email,
                    link: `mailto:${CONTACT_INFO.email}`,
                    copyable: true,
                },
                {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Localisation",
                    value: CONTACT_INFO.location,
                },
                {
                    icon: <Briefcase className="w-5 h-5" />,
                    label: "Statut",
                    value: CONTACT_INFO.status,
                },
            ],
            socials: [
                {
                    name: "LinkedIn",
                    url: SOCIAL_LINKS.linkedin,
                    icon: <Linkedin className="w-5 h-5" />,
                    color: "from-blue-500 to-blue-600",
                },
                {
                    name: "GitHub",
                    url: SOCIAL_LINKS.github,
                    icon: <Github className="w-5 h-5" />,
                    color: "from-gray-700 to-gray-900",
                },
                {
                    name: "Epitech",
                    url: SOCIAL_LINKS.epitech,
                    icon: <GraduationCap className="w-5 h-5" />,
                    color: "from-purple-500 to-purple-600",
                },
            ],
        },
        en: {
            title: "Let's work together",
            subtitle: "Available for apprenticeship, freelance, or full-time. Let's discuss your project!",
            cta: "Book a call",
            availability: "Available immediately",
            languages: {
                title: "Languages",
                items: [
                    { flag: "🇫🇷", name: "French", level: "Native" },
                    { flag: "🇬🇧", name: "English", level: "Professional" },
                ],
            },
            contact: [
                {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: CONTACT_INFO.email,
                    link: `mailto:${CONTACT_INFO.email}`,
                    copyable: true,
                },
                {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Location",
                    value: "Nancy, France",
                },
                {
                    icon: <Briefcase className="w-5 h-5" />,
                    label: "Status",
                    value: "Epitech Student",
                },
            ],
            socials: [
                {
                    name: "LinkedIn",
                    url: SOCIAL_LINKS.linkedin,
                    icon: <Linkedin className="w-5 h-5" />,
                    color: "from-blue-500 to-blue-600",
                },
                {
                    name: "GitHub",
                    url: SOCIAL_LINKS.github,
                    icon: <Github className="w-5 h-5" />,
                    color: "from-gray-700 to-gray-900",
                },
                {
                    name: "Epitech",
                    url: SOCIAL_LINKS.epitech,
                    icon: <GraduationCap className="w-5 h-5" />,
                    color: "from-purple-500 to-purple-600",
                },
            ],
        },
    };

    const data = contactData[language];

    return (
        <section id="contact" className="py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />

            <div className="container-clean">
                {/* Header */}
                <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="heading mb-4">{data.title}</h2>
                    <p className="text-xl text-ink/70 leading-relaxed mb-6">
                        {data.subtitle}
                    </p>

                    {/* Availability badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {data.availability}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <motion.div {...fadeUp(0.1)} className="space-y-6">
                        {/* Contact Details */}
                        <Card className="p-6">
                            <h3 className="heading text-xl mb-6">Contact</h3>
                            <div className="space-y-4">
                                {data.contact.map((item) => (
                                    <div key={item.label} className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-ink/60 mb-1">{item.label}</p>
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    className="text-ink font-medium hover:text-primary transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-ink font-medium">{item.value}</p>
                                            )}
                                        </div>
                                        {item.copyable && (
                                            <button
                                                onClick={() => copyToClipboard(item.value)}
                                                className="p-2 hover:bg-ink/5 rounded-lg transition-colors text-ink/60 hover:text-ink"
                                                title="Copy"
                                            >
                                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    {/* Right Column - Socials & CTA */}
                    <motion.div {...fadeUp(0.2)} className="space-y-6">
                        {/* Social Links */}
                        <Card className="p-6">
                            <h3 className="heading text-xl mb-6">Réseaux</h3>
                            <div className="space-y-3">
                                {data.socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex items-center gap-4 p-4 rounded-xl
                                            bg-ink/5 hover:bg-ink/10
                                            border border-transparent
                                            transition-all duration-300
                                            group
                                        "
                                    >
                                        <div className={`
                                            w-10 h-10 rounded-lg
                                            bg-gradient-to-br ${social.color}
                                            flex items-center justify-center
                                            text-white
                                            group-hover:scale-110 transition-transform
                                        `}>
                                            {social.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-ink">{social.name}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-ink/40 group-hover:text-ink group-hover:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </Card>

                        {/* CTA Card */}
                        <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white border-0">
                            <h3 className="text-2xl font-bold mb-3">
                                {language === "fr" ? "Un projet en tête ?" : "Have a project in mind?"}
                            </h3>
                            <p className="text-white/90 mb-6">
                                {language === "fr"
                                    ? "Discutons de comment je peux vous aider à concrétiser vos idées."
                                    : "Let's discuss how I can help bring your ideas to life."}
                            </p>
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="
                                    inline-flex items-center justify-center gap-2
                                    px-6 py-3 rounded-xl
                                    bg-white text-primary
                                    font-bold
                                    hover:bg-white/90 hover:scale-105
                                    transition-all duration-300
                                    shadow-lg w-full
                                "
                            >
                                {data.cta}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

