export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
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
  },
  {
    title: "Cosmot",
    category: "Full-Stack E-Commerce",
    description:
      "A fullstack cosmetics e-commerce platform built with Express, React, and PostgreSQL.",
    highlights: [
      "End-to-end e-commerce storefront with Express REST APIs and PostgreSQL persistence",
      "Responsive product browsing and storefront UI built with React and Tailwind CSS",
      "Structured client-server architecture deployed to production on Vercel",
    ],
    tech: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/codeAlpha_Cosmot_app",
    live: "https://cosmot-app.vercel.app",
    image: "/cosmot-banner.png",
  },
  {
    title: "Enj.",
    category: "Social Media Platform",
    description:
      "A modern, full-stack social media platform built for creators and communities. Post. Share. Connect.",
    highlights: [
      "Creator and community social experience supporting posts, sharing, and interactions",
      "Authentication powered by Better Auth with TanStack Query for client data synchronization",
      "Containerized workflow with Docker alongside an Express and TypeScript backend",
    ],
    tech: ["React", "TypeScript", "TanStack Query", "Better Auth", "Express", "Docker", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/codeAlpha-Enj",
    live: "https://code-alpha-enj-web.vercel.app/",
    image: "/enj-mobile-view.jpg",
  },
  {
    title: "Drug Tracker",
    category: "Healthcare & Medication Platform",
    description:
      "A full-stack medicine management and health tracking platform featuring a searchable medicine catalogue, personalized medication schedules, dose tracking, prescription requests, pharmacist communication, and health education. Built with Next.js and TypeScript, featuring a clean, responsive interface.",
    highlights: [
      "Searchable medicine catalogue with personalized medication schedules and dose tracking",
      "Prescription requests, pharmacist communication workflows, and health education resources",
      "Built on Next.js, TypeScript, Prisma ORM, PostgreSQL, NextAuth.js, and Cloudinary",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js", "Cloudinary"],
    github: "https://github.com/muradbzuneh/MB_Drug_Tracker",
    live: "https://mb-drug.vercel.app",
    image: "/drug-rukker-banner.png",
  },
  {
    title: "Food Delivery App",
    category: "Real-Time Ordering App",
    description:
      "A full-stack food delivery application with authentication, role-based access, and real-time updates.",
    highlights: [
      "User authentication and role-based access control for delivery workflows",
      "Real-time status synchronization powered by Firebase",
      "Responsive TypeScript + React interface styled with Tailwind CSS",
    ],
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/muradbzuneh/MB_Food_delivery_project",
    live: "https://mb-food-delivery-project.vercel.app/",
    image: "/Project1.jpg",
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
  },
];
