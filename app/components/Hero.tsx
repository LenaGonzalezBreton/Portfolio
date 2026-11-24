import Image from "next/image";
import type { Dictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/app/locales";
import Button from "@/app/components/ui/Button";

export default function Hero({
    lang,
    dict,
    cvHref,
}: {
    lang: Lang;
    dict: Dictionary["hero"];
    cvHref?: string;
}) {
    return (
        <section className="py-16 md:py-28" lang={lang}>
            <div className="container-clean grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
                <div className="order-2 md:order-1">
                    <p className="mb-4 text-sm font-medium text-muted-foreground">{dict.availability}</p>
                    <h1 className="text-4xl font-bold tracking-tight [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">{dict.title}</h1>
                    <p className="mt-6 max-w-xl text-xl text-muted-foreground md:text-2xl">{dict.pitch}</p>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Button href="#contact">{dict.contact}</Button>
                        {cvHref && (
                            <Button href={cvHref} variant="secondary" download>
                                {dict.downloadCv}
                            </Button>
                        )}
                    </div>
                </div>
                <div className="order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-none">
                    <Image
                        src="/portrait.webp"
                        alt={dict.photoAlt}
                        width={1000}
                        height={1204}
                        priority
                        sizes="(min-width: 768px) 40vw, 320px"
                        className="h-auto w-full rounded-3xl bg-surface object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
