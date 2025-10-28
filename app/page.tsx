"use client";

import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-sand text-ink">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl font-bold"
            >
                Hello Framer Motion ✨
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-lg"
            >
                Bienvenue dans ton premier projet Next + Tailwind + Motion 💫
            </motion.p>
        </main>
    );
}
