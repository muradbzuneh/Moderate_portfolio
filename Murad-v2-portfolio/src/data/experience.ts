import type { IconType } from "react-icons";
import { HiAcademicCap, HiBadgeCheck, HiChip, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export interface CredentialItem {
  id: string;
  badge: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  icon: IconType;
  actionLabel: string;
  actionHref: string;
  external?: boolean;
}

export const credentials: CredentialItem[] = [
  {
    id: "thrive-hackathon",
    badge: "1st Place Winner",
    period: "May 2026",
    title: "THRIVE 2018 Hackathon Challenge",
    subtitle: "Qelem Meda Technologies® × Wollo University",
    description:
      "Won 1st Place building Qelem Inventory Management—a collaborative solution helping businesses track products, manage sales, calculate VAT, and monitor stock efficiently.",
    image: "/thrive-hackathon-cert.jpg",
    tags: ["Qelem Inventory", "VAT & Stock", "1st Place", "Teamwork"],
    icon: HiCode,
    actionLabel: "View Certificate",
    actionHref: "/thrive-hackathon-cert.jpg",
    external: true,
  },
  {
    id: "github-tracking",
    badge: "893 Contributions",
    period: "49+ Repositories",
    title: "Consistent GitHub Engineering",
    subtitle: "github.com/muradbzuneh",
    description:
      "893+ contributions across the past year spanning 49+ repositories—including Enj, Estud_v.2, and MB_Drug—with 94% commits, pull requests, and active issue tracking.",
    image: "/github-achievements.png",
    tags: ["893+ Commits/yr", "49+ Repos", "94% Commits", "Open Source"],
    icon: FaGithub,
    actionLabel: "View GitHub Profile",
    actionHref: "https://github.com/muradbzuneh",
    external: true,
  },
  {
    id: "microsoft-ai200",
    badge: "Microsoft AI-200",
    period: "Oct 2026 — Active Track",
    title: "Microsoft AI-200 Specialization",
    subtitle: "AppFactory Academy — Azure AI Cloud",
    description:
      "Awarded Coordinator Direct Assignment to the official Microsoft AI-200 track (Developing AI Cloud Solutions on Azure), including dedicated lab environments and Pearson VUE certification pathway.",
    image: "/microsoft-ai200-track.png",
    tags: ["Microsoft AI-200", "Azure AI", "Cloud Solutions", "AppFactory"],
    icon: HiChip,
    actionLabel: "View Allocation",
    actionHref: "/microsoft-ai200-track.png",
    external: true,
  },
  {
    id: "android-cert",
    badge: "Verified Certificate",
    period: "Mobile Track",
    title: "Android Development Certification",
    subtitle: "Mobile Engineering & App Architecture",
    description:
      "Completed structured Android application development training covering mobile UI layouts, lifecycle management, and cross-platform mobile patterns using Flutter, Expo, and React Native.",
    image: "/cert-android-preview.svg",
    tags: ["Android", "Mobile UI", "Flutter", "React Native"],
    icon: HiBadgeCheck,
    actionLabel: "View Certificate PDF",
    actionHref: "/android development certification.pdf",
    external: true,
  },
  {
    id: "wollo-cv",
    badge: "Software Engineering",
    period: "Wollo University & CV",
    title: "Academic & Full-Stack Resume",
    subtitle: "Murad Bzuneh — Fullstack Engineer",
    description:
      "Software Engineering studies at Wollo University paired with 3+ years building full-stack web apps, relational/NoSQL databases, REST APIs, and Dockerized deployments.",
    image: "/hero.png",
    tags: ["Wollo University", "Full-Stack CV", "PostgreSQL", "Docker"],
    icon: HiAcademicCap,
    actionLabel: "Open Full CV",
    actionHref: "/Murad_Bzuneh_Fullstack-Developer_CV.pdf",
    external: true,
  },
];
