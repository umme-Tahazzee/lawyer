import { useState } from "react";
import { CalendarCheck, Menu, Scale, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur">
      <div className="container flex h-[68px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 text-gold">
          <Scale className="size-9" strokeWidth={1.4} />
          <span className="leading-none">
            <span className="block font-serif text-xl font-bold text-foreground">{profile.shortName}</span>
            <span className="text-xs text-muted-foreground">Advocate</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`border-b-2 py-1 text-[13px] font-medium transition-colors hover:text-gold ${
                active === l.href ? "border-gold" : "border-transparent"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button asChild className="hidden lg:inline-flex">
          <a href="#contact"><CalendarCheck /> Book a Consultation</a>
        </Button>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="container flex flex-col gap-1 pb-4 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => { setActive(l.href); setOpen(false); }} className="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted">
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-2"><a href="#contact" onClick={() => setOpen(false)}>Book a Consultation</a></Button>
        </nav>
      )}
    </header>
  );
}
