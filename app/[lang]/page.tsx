import { notFound } from "next/navigation";
import { getDictionary } from "@/app/i18n/dictionary";
import { isLang } from "@/app/locales";
import { site } from "@/app/data/site";
import { cvHref } from "@/app/data/cv";
import { getProjects } from "@/app/data/projects";
import { getExperience } from "@/app/data/experience";
import { getSkillGroups } from "@/app/data/skills";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import WebSection from "@/app/components/WebSection";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    if (!isLang(lang)) notFound();
    const dict = getDictionary(lang);

    return (
        <>
            <Navbar lang={lang} dict={dict.nav} name={site.name} />
            <main id="main" tabIndex={-1}>
                <Hero lang={lang} dict={dict.hero} cvHref={cvHref(lang)} />
                <Projects dict={dict.projects} projects={getProjects(lang)} />
                <WebSection dict={dict.web} />
                <Experience dict={dict.experience} items={getExperience(lang)} lang={lang} />
                <Skills dict={dict.skills} groups={getSkillGroups(lang)} />
                <Contact dict={dict.contact} />
            </main>
            <Footer dict={dict.footer} name={site.name} />
        </>
    );
}
