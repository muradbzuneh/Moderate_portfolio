import type { SectionThemePalette } from "./themePalette";

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
  theme: SectionThemePalette;
}

export const projects: ProjectItem[] = [
  {
    title: "Proshe",
    category: "Fintech & Impact Platform",
    description:
      "ProShe connects diaspora investors with verified workers through trusted banks. Fund real startup packages, share profits transparently, and grow communities — no Riba, ever.",
    highlights: [
      "Connects diaspora investors with verified local workers through trusted banking channels",
      "Transparent profit-sharing workflow tailored around Riba-free startup packages",
      "Type-safe React + TypeScript frontend backed by Express and Neon",
    ],
    tech: ["React", "TypeScript", "Neon", "Express", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/proshe_app",
    live: "https://proshe-app.vercel.app/",
    image: "/proshe-night-logo.jpg",
    theme: {
      accent: "#22c55e",
      accentSecondary: "#f59e0b",
      accentTextLight: "#15803d",
      accentTextDark: "#4ade80",
      surfaceLight: "rgba(240, 253, 244, 0.92)",
      surfaceDark: "rgba(11, 24, 46, 0.90)",
      imageBg: "#0b182e",
      badgeBg: "rgba(11, 24, 46, 0.85)",
      borderLight: "rgba(34, 197, 94, 0.30)",
      borderDark: "rgba(34, 197, 94, 0.32)",
      glow: "rgba(34, 197, 94, 0.16)",
      pillBg: "rgba(34, 197, 94, 0.12)",
      pillBorder: "rgba(34, 197, 94, 0.28)",
      buttonText: "#052e16",
    },
  },
  {
    title: "Cosmot",
    category: "Full-Stack E-Commerce",
    description:
      "A full-stack cosmetics e-commerce platform built with React, Express, and PostgreSQL. Features a structured REST API backend, relational product persistence, and a responsive storefront designed for smooth browsing and checkout.",
    highlights: [
      "End-to-end e-commerce storefront with Express REST APIs and PostgreSQL persistence",
      "Responsive product browsing and storefront UI built with React and Tailwind CSS",
      "Structured client-server architecture deployed to production on Vercel",
    ],
    tech: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/codeAlpha_Cosmot_app",
    live: "https://cosmot-app.vercel.app",
    image: "/cosmot-banner.png",
    theme: {
      accent: "#c49a6c",
      accentSecondary: "#a16207",
      accentTextLight: "#784f2a",
      accentTextDark: "#e5c198",
      surfaceLight: "rgba(250, 246, 240, 0.95)",
      surfaceDark: "rgba(32, 26, 22, 0.90)",
      imageBg: "#241f1b",
      badgeBg: "rgba(36, 31, 27, 0.86)",
      borderLight: "rgba(196, 154, 108, 0.38)",
      borderDark: "rgba(196, 154, 108, 0.35)",
      glow: "rgba(196, 154, 108, 0.18)",
      pillBg: "rgba(196, 154, 108, 0.14)",
      pillBorder: "rgba(196, 154, 108, 0.32)",
      buttonText: "#1c140d",
    },
  },
  {
    title: "Enj.",
    category: "Social Media Platform",
    description:
      "A modern full-stack social media platform built for creators and communities to post, share, and connect. Powered by TypeScript, Express, Better Auth authentication, TanStack Query data synchronization, and containerized Docker workflows.",
    highlights: [
      "Creator and community social experience supporting posts, sharing, and interactions",
      "Authentication powered by Better Auth with TanStack Query for client data synchronization",
      "Containerized workflow with Docker alongside an Express and TypeScript backend",
    ],
    tech: ["React", "TypeScript", "TanStack Query", "Better Auth", "Express", "Docker", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/codeAlpha-Enj",
    live: "https://code-alpha-enj-web.vercel.app/",
    image: "/enj-mobile-view.jpg",
    theme: {
      accent: "#f43f5e",
      accentSecondary: "#fb923c",
      accentTextLight: "#be123c",
      accentTextDark: "#fb7185",
      surfaceLight: "rgba(255, 241, 242, 0.94)",
      surfaceDark: "rgba(33, 18, 28, 0.90)",
      imageBg: "#24131f",
      badgeBg: "rgba(36, 19, 31, 0.86)",
      borderLight: "rgba(244, 63, 94, 0.30)",
      borderDark: "rgba(244, 63, 94, 0.34)",
      glow: "rgba(244, 63, 94, 0.18)",
      pillBg: "rgba(244, 63, 94, 0.12)",
      pillBorder: "rgba(244, 63, 94, 0.28)",
      buttonText: "#ffffff",
    },
  },
  {
    title: "Drug Tracker",
    category: "Healthcare & Medication Platform",
    description:
      "A full-stack medicine management and health tracking platform featuring a searchable medicine catalogue, personalized medication schedules, dose tracking, prescription requests, pharmacist communication, and health education built with Next.js and TypeScript.",
    highlights: [
      "Searchable medicine catalogue with personalized medication schedules and dose tracking",
      "Prescription requests, pharmacist communication workflows, and health education resources",
      "Built on Next.js, TypeScript, Prisma ORM, PostgreSQL, NextAuth.js, and Cloudinary",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js", "Cloudinary"],
    github: "https://github.com/muradbzuneh/MB_Drug_Tracker",
    live: "https://mb-drug.vercel.app",
    image: "/drug-rukker-banner.png",
    theme: {
      accent: "#14b8a6",
      accentSecondary: "#2563eb",
      accentTextLight: "#0f766e",
      accentTextDark: "#2dd4bf",
      surfaceLight: "rgba(240, 253, 250, 0.94)",
      surfaceDark: "rgba(12, 32, 46, 0.90)",
      imageBg: "#0c2233",
      badgeBg: "rgba(12, 34, 51, 0.86)",
      borderLight: "rgba(20, 184, 166, 0.32)",
      borderDark: "rgba(20, 184, 166, 0.35)",
      glow: "rgba(20, 184, 166, 0.18)",
      pillBg: "rgba(20, 184, 166, 0.12)",
      pillBorder: "rgba(20, 184, 166, 0.30)",
      buttonText: "#042f2e",
    },
  },
  {
    title: "Food Delivery App",
    category: "Real-Time Ordering App",
    description:
      "A full-stack food delivery application built with React, TypeScript, and Firebase. Supports user authentication, role-based access control across ordering workflows, and real-time status synchronization in a responsive Tailwind CSS interface.",
    highlights: [
      "User authentication and role-based access control for delivery workflows",
      "Real-time status synchronization powered by Firebase",
      "Responsive TypeScript + React interface styled with Tailwind CSS",
    ],
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/MB_Food_delivery_project",
    live: "https://mb-food-delivery-project.vercel.app/",
    image: "/Project1.jpg",
    theme: {
      accent: "#f97316",
      accentSecondary: "#eab308",
      accentTextLight: "#c2410c",
      accentTextDark: "#fb923c",
      surfaceLight: "rgba(255, 247, 237, 0.94)",
      surfaceDark: "rgba(36, 20, 14, 0.90)",
      imageBg: "#26150e",
      badgeBg: "rgba(38, 21, 14, 0.86)",
      borderLight: "rgba(249, 115, 22, 0.32)",
      borderDark: "rgba(249, 115, 22, 0.35)",
      glow: "rgba(249, 115, 22, 0.18)",
      pillBg: "rgba(249, 115, 22, 0.13)",
      pillBorder: "rgba(249, 115, 22, 0.30)",
      buttonText: "#1f0f05",
    },
  },
  {
    title: "Estud",
    category: "Campus Management Platform",
    description:
      "A full-stack campus management platform that centralizes student services including announcements, cafeteria reservations, and a marketplace. Implements authentication, role-based authorization, and scalable architecture with a clean, user-friendly interface.",
    highlights: [
      "Centralizes campus announcements, cafeteria reservations, and a student marketplace",
      "Implements authentication and role-based authorization across student services",
      "Built on the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/Estud",
    live: "https://estud-v-2-9clb.vercel.app/",
    image: "/estud-banner.jpg",
    theme: {
      accent: "#3b82f6",
      accentSecondary: "#f97316",
      accentTextLight: "#1d4ed8",
      accentTextDark: "#60a5fa",
      surfaceLight: "rgba(239, 246, 255, 0.94)",
      surfaceDark: "rgba(15, 28, 52, 0.90)",
      imageBg: "#0f1c34",
      badgeBg: "rgba(15, 28, 52, 0.86)",
      borderLight: "rgba(59, 130, 246, 0.32)",
      borderDark: "rgba(59, 130, 246, 0.35)",
      glow: "rgba(59, 130, 246, 0.18)",
      pillBg: "rgba(59, 130, 246, 0.12)",
      pillBorder: "rgba(59, 130, 246, 0.30)",
      buttonText: "#ffffff",
    },
  },
];
