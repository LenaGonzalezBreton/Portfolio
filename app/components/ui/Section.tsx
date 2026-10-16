import type { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
    const headingId = `${id}-title`;
    return (
        <section id={id} aria-labelledby={headingId} className="scroll-mt-20 py-20 md:py-28">
            <div className="container-clean reveal">
                <h2 id={headingId} className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
}
