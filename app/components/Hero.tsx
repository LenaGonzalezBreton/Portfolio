import Image, { getImageProps } from "next/image";
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
    const { props: mobilePortrait } = getImageProps({
        src: "/portrait-mobile.webp",
        alt: dict.photoAlt,
        width: 1800,
        height: 2700,
        sizes: "110vw",
    });

    return (
        <section className="relative pb-8 pt-(--hero-portrait-height) [--hero-portrait-height:clamp(15rem,62vw,22rem)] sm:pb-12 md:py-20" lang={lang}>
            <div className="container-clean grid md:grid-cols-[1.2fr_1fr] md:items-center md:gap-x-12">
                <picture className="block max-md:pointer-events-none max-md:absolute max-md:inset-x-0 max-md:top-0 max-md:h-(--hero-portrait-height) max-md:overflow-hidden md:order-last md:ml-auto md:w-full md:max-w-[22rem]">
                    <source media="(width < 48rem)" srcSet={mobilePortrait.srcSet} sizes={mobilePortrait.sizes} />
                    <Image
                        src="/portrait.webp"
                        alt={dict.photoAlt}
                        width={1000}
                        height={1204}
                        loading="eager"
                        fetchPriority="high"
                        sizes="352px"
                        className="w-full object-cover max-md:relative max-md:left-1/2 max-md:h-full max-md:w-[110%] max-md:max-w-none max-md:-translate-x-1/2 max-md:mask-[linear-gradient(black_48%,transparent)] max-md:object-[center_-72vw] md:h-auto md:rounded-3xl md:bg-surface"
                    />
                </picture>
                <div className="min-w-0">
                    <h1 className="text-balance text-[clamp(2.25rem,1.5rem+4vw,3rem)] font-bold tracking-tight wrap-anywhere max-md:leading-[1.1] md:text-5xl lg:text-6xl">
                        {dict.title}
                    </h1>
                    <div className="mt-3 md:mt-4">
                        <p className="max-w-prose text-base text-muted-foreground max-md:leading-relaxed sm:text-lg md:text-xl">{dict.pitch}</p>
                        <p className="mt-3 text-sm font-medium text-foreground md:mt-4">{dict.availability}</p>
                        <div className="mt-5 flex flex-wrap gap-2 max-[30rem]:flex-col md:mt-6 md:gap-3">
                            <Button href="#contact" className="max-md:min-h-12 max-md:text-center">
                                {dict.contact}
                            </Button>
                            {cvHref && (
                                <Button href={cvHref} variant="secondary" className="max-md:min-h-12 max-md:text-center" download>
                                    {dict.downloadCv}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
