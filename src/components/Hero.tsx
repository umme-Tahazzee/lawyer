import { CalendarCheck, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, profile, stats } from "@/data/content";
import ImageSlot from "@/components/ImageSlot";
import heroImg from "../../public/images/mishu.png";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f1e4d8] via-[#eddccd] to-[#e6d3c2]">
      <div className="relative h-80 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2">
        <ImageSlot
          src={heroImg}
          alt="M B H Mishu"
          icon={User}
          hint="Add your photo in src/assets"
          className="h-full w-full object-top "
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#eddccd] via-transparent to-transparent md:block" />
      </div>

      <div className="container relative z-10 py-12 md:py-16">
        <div className="max-w-md">
          <p className="mb-2 text-sm font-medium tracking-wide text-gold">ADVOCATE</p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg">{profile.title}</p>
          <p className="mt-4 max-w-sm leading-relaxed text-foreground/80">{profile.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#contact"><CalendarCheck /> Book a Consultation</a></Button>
            <Button asChild size="lg" variant="soft"><a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone /> Contact Me</a></Button>
          </div>
          <dl className="mt-9 flex divide-x divide-foreground/20">
            {stats.map((s) => (
              <div key={s.label} className="px-5 first:pl-0">
                <dd className="font-serif text-2xl font-bold">{s.value}</dd>
                <dt className="mt-1 text-xs text-foreground/80">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
