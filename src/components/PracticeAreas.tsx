import { practiceAreas } from "@/data/content";

export default function PracticeAreas() {
  return (
    <section id="practice" className="container py-10">
      <div className="mb-8 flex items-center gap-6">
        <span className="h-px flex-1 bg-gold/40" />
        <h2 className="text-3xl font-bold">Practice Areas</h2>
        <span className="h-px flex-1 bg-gold/40" />
      </div>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {practiceAreas.map((a) => (
          <li key={a.label} className="soft-tile flex min-h-[112px] flex-col items-center justify-center gap-3 p-3 text-center">
            <a.icon className="size-8 text-gold" strokeWidth={1.3} />
            <span className="text-[13px] font-medium leading-tight">{a.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
