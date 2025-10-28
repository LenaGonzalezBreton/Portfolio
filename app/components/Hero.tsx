"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export default function Hero() {
    return (
        <section id="accueil" className="relative overflow-hidden pt-36 pb-24 md:pt-40 md:pb-32">
            {/* Décor doux en arrière-plan */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
            >
                {/* halo lavande */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] rounded-full blur-[100px]"
                     style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 28%, transparent), transparent 70%)" }} />
                {/* bandeau léger */}
                <div className="absolute bottom-0 left-0 right-0 h-40"
                     style={{ background: "linear-gradient(to top, color-mix(in oklab, var(--sand) 85%, transparent), transparent)" }} />
            </div>

            <div className="container-clean text-center">
                {/* Badge top */}
                <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2 badge mb-6">
                    <span>✨ Portfolio</span>
                    <span className="hidden sm:inline text-ink/70">| Développeuse extravertie</span>
                </motion.div>

                {/* Titre */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="heading text-4xl md:text-6xl leading-tight"
                >
                    Construisons des interfaces
                    <span className="block text-accent">stratégiques et accessible.</span>
                </motion.h1>

                {/* Pitch */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="mt-4 md:mt-6 text-base md:text-lg text-ink/80"
                >
                    KISS | Keep it simple, stupid.
                </motion.p>

                {/* CTA animé */}
                <motion.div
                    {...fadeUp(0.3)}
                    className="mt-8 flex items-center justify-center gap-3 md:gap-4"
                >
                    <motion.a
                        href="#projets"
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="btn"
                    >
                        Voir mes projets
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="btn-ghost"
                    >
                        Me contacter
                    </motion.a>
                </motion.div>


                {/* Mini “carte” highlight */}
                <motion.div
                    {...fadeUp(0.4)}
                    className="mx-auto mt-10 max-w-2xl rounded-2xl p-[1px]"
                    style={{
                        background:
                            "linear-gradient(135deg, color-mix(in oklab, var(--accent) 45%, transparent), color-mix(in oklab, var(--primary) 35%, transparent))",
                    }}
                >
                    <div className="rounded-2xl glass px-5 py-4 text-left">
                        <p className="text-sm md:text-base text-ink/80">
                            <span className="font-medium text-ink">Signature :</span> La meilleure façon de me connaître c'est de me rencontrer, j'ai pleins d'histoires à raconter.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
