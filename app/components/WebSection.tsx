import Image from "next/image";
import type { Dictionary } from "@/app/i18n/dictionary";
import { site } from "@/app/data/site";
import Button from "@/app/components/ui/Button";
import Section from "@/app/components/ui/Section";

export default function WebSection({ dict }: { dict: Dictionary["web"] }) {
    return (
        <Section id="web" title={dict.title}>
            <p className="max-w-2xl text-xl text-muted-foreground">{dict.intro}</p>
            <figure className="mt-10 overflow-hidden rounded-3xl bg-surface">
                <Image
                    src="/web/dommartin.webp"
                    alt={dict.screenshotAlt}
                    width={1280}
                    height={630}
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="h-auto w-full"
                />
                <figcaption className="flex flex-wrap items-center justify-between gap-2 p-6">
                    <span className="text-sm text-muted-foreground">{dict.reference} — dommartinavecvous.fr</span>
                    <a
                        href={site.webReference}
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center font-medium text-accent underline-offset-4 hover:underline"
                    >
                        {dict.visit}
                    </a>
                </figcaption>
            </figure>
            <div className="mt-8">
                <Button href="#contact">{dict.cta}</Button>
            </div>
        </Section>
    );
}
