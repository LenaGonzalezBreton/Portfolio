import type { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
    const headingId = `${id}-title`;
    return (
        <section id={id} aria-labelledby={headingId} tabIndex={-1} className="border-t border-border/25 py-12 md:py-16">
            <div className="container-clean">
                <h2 id={headingId} className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-4xl">
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
}
