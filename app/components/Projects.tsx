import type { Dictionary } from "@/app/i18n/dictionary";
import type { Project } from "@/app/data/projects";
import Section from "@/app/components/ui/Section";

export default function Projects({ dict, projects }: { dict: Dictionary["projects"]; projects: Project[] }) {
    return (
        <Section id="projects" title={dict.title}>
            <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                    <article key={p.id} className="flex flex-col rounded-3xl bg-surface p-6 sm:p-8">
                        <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                        {!p.repo && <p className="mt-1 text-sm text-muted-foreground">{dict.private}</p>}
                        <p className="mt-4 text-muted-foreground">{p.description}</p>
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                                <li key={t} className="rounded-full border border-border/60 px-3 py-1 text-sm">
                                    {t}
                                </li>
                            ))}
                        </ul>
                        {p.repo && (
                            <a
                                href={p.repo}
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex min-h-11 items-center font-medium text-accent underline-offset-4 hover:underline"
                            >
                                {dict.repo}
                                <span className="sr-only"> ({p.name})</span>
                            </a>
                        )}
                    </article>
                ))}
            </div>
            <div className="mt-12 border-t border-border/40 pt-8">
                <h3 className="text-xl font-bold tracking-tight">{dict.experimentsTitle}</h3>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {dict.experiments.map(({ name, description }) => (
                        <div key={name}>
                            <dt className="font-medium">{name}</dt>
                            <dd className="mt-1 text-muted-foreground">{description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    );
}
