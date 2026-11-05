import {
  Award, Building2, Gavel, GraduationCap, IdCard, Landmark, Layers, FileText, Scale, ShieldCheck, Users, UsersRound,
} from "lucide-react";

export const profile = {
  name: "Md. Arif Hossain",
  shortName: "Arif Hossain",
  title: "Advocate, Supreme Court of Bangladesh",
  intro: "Providing dedicated and effective legal services with integrity, expertise, and a client-focused approach.",
  phone: "+880 1712 345 678",
  email: "arif.hossain@lawmail.com",
  address: "Chamber: Room 304, Supreme Court Bar Association Building, Dhaka-1000",
  hours: "Sun – Thu, 10:00 AM – 5:00 PM",
  about:
    "I am a practicing Advocate at the Supreme Court of Bangladesh with over 10 years of experience in litigation, legal advisory, and dispute resolution. I am committed to protecting my clients' rights and delivering practical and result-oriented legal solutions.",
};

// Put your photos in /public/images and change the file names here.
export const images = {
  hero: "/images/advocate.jpg",
  about: "/images/gavel.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Cases Handled" },
  { value: "95%", label: "Client Satisfaction" },
];

export const aboutFacts = [
  { icon: GraduationCap, lines: ["LL.B (Hons), University of Dhaka", "LL.M, University of Dhaka"] },
  { icon: IdCard, lines: ["Enrolment No.: 12345", "Bangladesh Bar Council"] },
  { icon: Landmark, lines: ["Practice: Supreme Court of Bangladesh", "(High Court & Appellate Division)"] },
];

export const practiceAreas = [
  { icon: Gavel, label: "Criminal Law" },
  { icon: Scale, label: "Civil Litigation" },
  { icon: Building2, label: "Corporate & Business Law" },
  { icon: Users, label: "Family Law" },
  { icon: Layers, label: "Land & Property Law" },
  { icon: FileText, label: "Constitutional Law" },
  { icon: ShieldCheck, label: "Legal Advisory & Compliance" },
];

export const experience = [
  { role: "Practicing Advocate", place: "Supreme Court of Bangladesh", period: "2015 – Present" },
  { role: "Associate Lawyer", place: "ABC Law Chambers, Dhaka", period: "2012 – 2015" },
  { role: "Intern", place: "The High Court Division, Supreme Court", period: "2011 – 2012" },
];

export const education = [
  { icon: Landmark, title: "LL.M in Law", sub: "University of Dhaka" },
  { icon: Landmark, title: "LL.B (Hons) in Law", sub: "University of Dhaka" },
  { icon: Award, title: "Member, Bangladesh Bar Council", sub: "Enrolment No.: 12345" },
  { icon: UsersRound, title: "Member, Supreme Court Bar Association", sub: "" },
];

