import type { Dictionary } from "@/app/i18n/dictionary";
import type { SkillGroup } from "@/app/data/skills";
import Section from "@/app/components/ui/Section";

export default function Skills({ dict, groups }: { dict: Dictionary["skills"]; groups: SkillGroup[] }) {
    return (
        <Section id="skills" title={dict.title}>
            <div className="grid gap-10 sm:grid-cols-2">
                {groups.map((g) => (
                    <div key={g.label}>
                        <h3 className="mb-4 text-lg font-bold">{g.label}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {g.items.map((item) => (
                                <li key={item} className="rounded-full bg-surface px-3 py-1 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
