import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, fieldClass } from "@/components/ui/input";
import { practiceAreas, profile } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const details = [
    { icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, text: profile.address, bold: true },
    { icon: Clock, text: `Visiting Hours: ${profile.hours}`, bold: true },
  ];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your backend / email service.
    console.log("Consultation request:", data);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="mt-10 bg-[linear-gradient(135deg,#3b4b61_0%,#243349_55%,#1b283b_100%)] py-14 text-white">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="lg:pl-10">
          <p className="mb-3 flex items-center gap-3 text-sm text-gold-light">
            <span className="h-px w-9 bg-gold-light" /> Get in Touch
          </p>
          <h2 className="text-4xl font-bold leading-tight">Consultation &amp; Legal Support</h2>
          <p className="mt-4 max-w-sm text-white/85">
            Have a legal issue or need professional advice? Feel free to reach out or book a consultation.
          </p>
          <ul className="mt-8 space-y-4">
            {details.map((d) => (
              <li key={d.text} className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gold shadow-md">
                  <d.icon className="size-5" />
                </span>
                {d.href ? (
                  <a href={d.href} className="hover:underline">{d.text}</a>
                ) : (
                  <span className={cn("max-w-xs text-sm", d.bold && "font-medium")}>{d.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="soft-card p-6 text-foreground md:p-8">
          <h3 className="text-2xl font-bold">Send a Consultation Request</h3>

          {sent && (
            <p role="status" className="mt-4 flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm">
              <CheckCircle2 className="size-4 text-gold" /> Request sent. We will contact you shortly.
            </p>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Input name="name" placeholder="Your Name" aria-label="Your name" required />
            <Input name="phone" type="tel" placeholder="Phone Number" aria-label="Phone number" required />
            <Input name="email" type="email" placeholder="Email Address" aria-label="Email address" />
            <div className="relative">
              <select name="area" aria-label="Service or practice area" defaultValue="" className={cn(fieldClass, "h-11 appearance-none pr-9")}>
                <option value="" disabled>Service / Practice Area</option>
                {practiceAreas.map((a) => <option key={a.label}>{a.label}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2" />
            </div>
            <Textarea name="message" placeholder="Briefly describe your issue" aria-label="Describe your issue" className="sm:col-span-2" required />
          </div>

          <Button type="submit" variant="gold" size="lg" className="mt-4 w-full">
            <Send /> Send Request
          </Button>
        </form>
      </div>
    </section>
  );
}
