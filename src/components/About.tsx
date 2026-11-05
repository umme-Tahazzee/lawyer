import { ArrowRight, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutFacts, images, profile } from "@/data/content";
import ImageSlot from "./ImageSlot";
import heroImg from "@/assets/mishu.png";

export default function About() {
  return (
    <section id="about" className="container py-10">
      <div className="  soft-card grid gap-8 p-6 md:grid-cols-[210px_1fr_1fr] md:p-8">
        <ImageSlot
          src={images.about}
          alt="Judge's gavel"
          icon={Gavel}
          hint="Optional: public/images/gavel.jpg"
          className="hidden md:block h-56 w-full rounded-xl shadow-soft-sm md:h-full"
        />
        <div className="flex flex-col justify-center md:pr-6 md:[border-right:1px_solid_hsl(var(--border))]">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{profile.about}</p>
          <Button variant="soft" className="mt-5 w-fit" asChild>
            <a href="#experience">Read Full Profile <ArrowRight /></a>
          </Button>
        </div>
        <ul className="flex flex-col justify-center divide-y divide-border">
          {aboutFacts.map((f) => (
            <li key={f.lines[0]} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
              <f.icon className="size-9 shrink-0 text-gold" strokeWidth={1.3} />
              <p className="text-[13px] leading-snug">
                {f.lines.map((l, i) => (
                  <span key={l} className={`block ${i === 0 ? "font-medium" : ""}`}>{l}</span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
