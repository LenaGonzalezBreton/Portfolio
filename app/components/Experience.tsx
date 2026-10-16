import type { Dictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/app/locales";
import type { ExperienceItem } from "@/app/data/experience";
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
            <ol className="divide-y divide-border/40">
                {items.map((item) => (
                    <li key={item.id}>
                        <article className="grid gap-2 py-8 md:grid-cols-[14rem_1fr] md:gap-8">
                            <p className="text-sm text-muted-foreground">
                                {item.start && (
                                    <>
                                        <Month value={item.start} lang={lang} /> –{" "}
                                        {item.end ? <Month value={item.end} lang={lang} /> : <span>{dict.present}</span>}
                                    </>
                                )}
                                {item.place && <span className="block">{item.place}</span>}
                            </p>
                            <div>
                                <h3 className="text-xl font-bold tracking-tight">{item.org}</h3>
                                <p className="text-muted-foreground">{item.role}</p>
                                {item.bullets.length > 0 && (
                                    <ul className="mt-4 list-disc space-y-2 pl-5">
                                        {item.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
