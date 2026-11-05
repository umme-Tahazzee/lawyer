import { CalendarCheck, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, profile, stats } from "@/data/content";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col overflow-hidden md:block bg-gradient-to-br from-[#f1e4d8] via-[#eddccd] to-[#e6d3c2]">
      {/* Photo: below the text on phones, right half on md+ */}
      <div className="relative order-2 flex md:order-none h-[22rem] items-end justify-center sm:h-[26rem] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2">
          <ImageSlot
           src={images.hero}
          alt="M B H Mishu"
          icon={User}
          hint="Add your photo in src/assets"
          className="h-full w-full object-top "
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#e9d8c8] to-transparent md:hidden" />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#eddccd] via-transparent to-transparent md:block" />
      </div>

      <div className="container relative z-10 order-1 flex flex-col pb-8 pt-10 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-md text-center md:mx-0 md:text-left">
          <p className="mb-2 text-sm font-medium tracking-[0.2em] text-gold">ADVOCATE</p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight min-[400px]:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-base sm:text-lg">{profile.title}</p>
          <p className="mx-auto mt-4 max-w-sm leading-relaxed text-foreground/80 md:mx-0">{profile.intro}</p>

          <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:justify-center md:justify-start">
            <Button asChild size="lg" className="w-full min-[480px]:w-auto">
              <a href="#contact"><CalendarCheck /> Book a Consultation</a>
            </Button>
            <Button asChild size="lg" variant="soft" className="w-full min-[480px]:w-auto">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone /> Contact Me</a>
            </Button>
          </div>

          <dl className="mt-8 grid grid-cols-3 divide-x divide-foreground/20 md:mt-9 md:flex">
            {stats.map((s) => (
              <div key={s.label} className="px-2 first:pl-0 md:px-5">
                <dd className="font-serif text-xl font-bold sm:text-2xl">{s.value}</dd>
                <dt className="mt-1 text-[11px] leading-tight text-foreground/80 sm:text-xs">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
