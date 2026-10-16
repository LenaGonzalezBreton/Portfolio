import type { Dictionary } from "@/app/i18n/dictionary";
import { site } from "@/app/data/site";
import Section from "@/app/components/ui/Section";
import CopyEmailButton from "@/app/components/CopyEmailButton";

const linkClass = "inline-flex min-h-11 items-center font-medium text-accent underline-offset-4 hover:underline";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
    return (
        <Section id="contact" title={dict.title}>
            <p className="max-w-2xl text-xl text-muted-foreground">{dict.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={`mailto:${site.email}`} className={`${linkClass} break-words text-xl [overflow-wrap:anywhere]`}>
                    {site.email}
                </a>
                <CopyEmailButton email={site.email} copyLabel={dict.copy} copiedLabel={dict.copied} />
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6">
                <li>
                    <a href={site.linkedin} rel="noopener noreferrer" className={linkClass}>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href={site.github} rel="noopener noreferrer" className={linkClass}>
                        GitHub
                    </a>
                </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
                <span className="sr-only">{dict.location}: </span>
                {site.location}
            </p>
        </Section>
    );
}
