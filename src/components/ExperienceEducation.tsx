import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/content";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="container grid gap-8 py-10 lg:grid-cols-2">
      <div className="soft-card p-6 md:p-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <Briefcase className="size-7 text-gold" strokeWidth={1.6} /> Professional Experience
        </h2>
        <ol className="relative mt-6 space-y-0 pl-8">
          <span className="absolute left-[5px] top-5 h-[calc(100%-2.5rem)] w-px bg-gold/50" aria-hidden />
          {experience.map((e) => (
            <li key={e.role} className="relative flex items-start justify-between gap-3 border-b border-border py-4 last:border-0">
              <span className="absolute -left-8 top-[22px] size-3 rounded-full bg-gold" aria-hidden />
              <div>
                <p className="font-semibold">{e.role}</p>
                <p className="text-sm text-muted-foreground">{e.place}</p>
              </div>
              <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs shadow-inset">{e.period}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="soft-card p-6 md:p-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <GraduationCap className="size-8 text-gold" strokeWidth={1.6} /> Education &amp; Affiliations
        </h2>
        <ul className="mt-6 divide-y divide-border">
          {education.map((e) => (
            <li key={e.title} className="flex items-center gap-4 py-3.5">
              <e.icon className="size-7 shrink-0 text-gold" strokeWidth={1.3} />
              <div>
                <p className="text-sm font-semibold">{e.title}</p>
                {e.sub && <p className="text-xs text-muted-foreground">{e.sub}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
