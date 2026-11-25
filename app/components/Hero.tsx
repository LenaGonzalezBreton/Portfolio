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
        <section className="py-12 md:py-20" lang={lang}>
            <div className="container-clean grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-5 md:grid-cols-[1.2fr_1fr] md:gap-x-12">
                <div className="contents md:block">
                    <h1 className="col-start-1 row-start-1 text-balance text-4xl font-bold tracking-tight [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">
                        {dict.title}
                    </h1>
                    <div className="col-span-2 col-start-1 row-start-2 md:mt-4">
                        <p className="max-w-prose text-lg text-muted-foreground md:text-xl">{dict.pitch}</p>
                        <p className="mt-4 text-sm font-medium text-foreground">{dict.availability}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button href="#contact">{dict.contact}</Button>
                            {cvHref && (
                                <Button href={cvHref} variant="secondary" download>
                                    {dict.downloadCv}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-start-2 row-start-1 w-20 sm:w-28 md:ml-auto md:w-full md:max-w-[22rem]">
                    <Image
                        src="/portrait.webp"
                        alt={dict.photoAlt}
                        width={1000}
                        height={1204}
                        priority
                        sizes="(min-width: 768px) 352px, (min-width: 640px) 112px, 80px"
                        className="aspect-square w-full rounded-2xl bg-surface object-cover object-[center_35%] md:aspect-auto md:h-auto md:rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
