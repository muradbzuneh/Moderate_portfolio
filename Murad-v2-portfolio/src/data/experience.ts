import type { IconType } from "react-icons";
import { HiAcademicCap, HiBadgeCheck, HiChip, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import type { SectionThemePalette } from "./themePalette";

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
  theme: SectionThemePalette;
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
    theme: {
      accent: "#2563eb",
      accentSecondary: "#eab308",
      accentTextLight: "#1d4ed8",
      accentTextDark: "#60a5fa",
      surfaceLight: "rgba(239, 246, 255, 0.94)",
      surfaceDark: "rgba(15, 26, 48, 0.90)",
      imageBg: "#0f1a30",
      badgeBg: "rgba(15, 26, 48, 0.86)",
      borderLight: "rgba(37, 99, 235, 0.30)",
      borderDark: "rgba(59, 130, 246, 0.35)",
      glow: "rgba(37, 99, 235, 0.18)",
      pillBg: "rgba(37, 99, 235, 0.12)",
      pillBorder: "rgba(37, 99, 235, 0.28)",
      buttonText: "#ffffff",
    },
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
    theme: {
      accent: "#2ea043",
      accentSecondary: "#39d353",
      accentTextLight: "#15803d",
      accentTextDark: "#4ade80",
      surfaceLight: "rgba(240, 253, 244, 0.94)",
      surfaceDark: "rgba(13, 17, 23, 0.92)",
      imageBg: "#0d1117",
      badgeBg: "rgba(13, 17, 23, 0.88)",
      borderLight: "rgba(46, 160, 67, 0.32)",
      borderDark: "rgba(57, 211, 83, 0.35)",
      glow: "rgba(46, 160, 67, 0.18)",
      pillBg: "rgba(46, 160, 67, 0.12)",
      pillBorder: "rgba(46, 160, 67, 0.30)",
      buttonText: "#052e16",
    },
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
    theme: {
      accent: "#8b5cf6",
      accentSecondary: "#f97316",
      accentTextLight: "#6d28d9",
      accentTextDark: "#a78bfa",
      surfaceLight: "rgba(245, 243, 255, 0.94)",
      surfaceDark: "rgba(28, 20, 46, 0.90)",
      imageBg: "#1c142e",
      badgeBg: "rgba(28, 20, 46, 0.86)",
      borderLight: "rgba(139, 92, 246, 0.30)",
      borderDark: "rgba(139, 92, 246, 0.35)",
      glow: "rgba(139, 92, 246, 0.18)",
      pillBg: "rgba(139, 92, 246, 0.12)",
      pillBorder: "rgba(139, 92, 246, 0.28)",
      buttonText: "#ffffff",
    },
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
    theme: {
      accent: "#06b6d4",
      accentSecondary: "#3b82f6",
      accentTextLight: "#0e7490",
      accentTextDark: "#22d3ee",
      surfaceLight: "rgba(236, 254, 255, 0.94)",
      surfaceDark: "rgba(15, 23, 42, 0.90)",
      imageBg: "#0f172a",
      badgeBg: "rgba(15, 23, 42, 0.86)",
      borderLight: "rgba(6, 182, 212, 0.32)",
      borderDark: "rgba(34, 211, 238, 0.34)",
      glow: "rgba(6, 182, 212, 0.18)",
      pillBg: "rgba(6, 182, 212, 0.12)",
      pillBorder: "rgba(6, 182, 212, 0.28)",
      buttonText: "#042f2e",
    },
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
    theme: {
      accent: "#0ea5e9",
      accentSecondary: "#d97706",
      accentTextLight: "#0369a1",
      accentTextDark: "#38bdf8",
      surfaceLight: "rgba(248, 250, 252, 0.95)",
      surfaceDark: "rgba(20, 27, 40, 0.90)",
      imageBg: "#1e293b",
      badgeBg: "rgba(15, 23, 42, 0.85)",
      borderLight: "rgba(14, 165, 233, 0.30)",
      borderDark: "rgba(56, 189, 248, 0.32)",
      glow: "rgba(14, 165, 233, 0.16)",
      pillBg: "rgba(14, 165, 233, 0.12)",
      pillBorder: "rgba(14, 165, 233, 0.28)",
      buttonText: "#ffffff",
    },
  },
];
