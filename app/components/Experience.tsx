import type { Dictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/app/locales";
import { experienceGroups, type ExperienceItem } from "@/app/data/experience";
import Section from "@/app/components/ui/Section";

function Month({ value, lang }: { value: string; lang: Lang }) {
    const label = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric", timeZone: "UTC" }).format(
        new Date(`${value}-01T00:00:00Z`),
    );
    return <time dateTime={value}>{label}</time>;
}

export default function Experience({
    dict,
    items,
    lang,
}: {
    dict: Dictionary["experience"];
    items: ExperienceItem[];
    lang: Lang;
}) {
    return (
        <Section id="experience" title={dict.title}>
            <div className="space-y-10">
                {experienceGroups.map((group) => (
                    <section key={group} aria-labelledby={`experience-${group}`}>
                        <h3 id={`experience-${group}`} className="mb-3 text-xl font-bold tracking-tight">
                            {dict.groups[group]}
                        </h3>
                        <ul className="divide-y divide-border/40 rounded-2xl bg-surface px-5 sm:px-7">
                            {items.filter((item) => item.group === group).map((item) => (
                                <li key={item.id}>
                                    <article className="py-5">
                                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                            <h4 className="text-lg font-bold">{item.org}</h4>
                                            {item.start && (
                                                <p className="text-sm text-muted-foreground">
                                                    <Month value={item.start} lang={lang} /> {dict.until}{" "}
                                                    {item.end ? <Month value={item.end} lang={lang} /> : <span>{dict.present}</span>}
                                                    {item.expectedEnd && ` (${dict.expectedEnd})`}
                                                </p>
                                            )}
                                        </div>
                                        <p className="font-medium">{item.role}</p>
                                        {item.organizationSize && (
                                            <p className="text-sm text-muted-foreground">{item.organizationSize}</p>
                                        )}
                                        {item.place && <p className="text-sm text-muted-foreground">{item.place}</p>}
                                        {item.bullets.length > 0 && (
                                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground sm:text-base">
                                                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                            </ul>
                                        )}
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </Section>
    );
}
