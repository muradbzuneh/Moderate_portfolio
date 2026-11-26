import { Netlify, NextJs, Npm, Vercel, Python,Django, Java, Php } from "@boxicons/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVite,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRender,
  SiPnpm,
  SiDocker,
  SiRailway,
  SiHeroku,
  SiCplusplus
} from "react-icons/si";

export const skills = {
  frontend: [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
  ],
  backend: [
    { name: "NEXTJs", icon: NextJs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Firebase", icon: SiFirebase },
    {name: "Django", icon:Django}
  ],
   Database: [
    { name: "Mysql", icon: SiMysql },
    { name: "Postgresssql", icon: SiPostgresql },
     { name: "Mongodb", icon: SiMongodb },
     { name: "supabase", icon: SiMongodb }
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Vite", icon: SiVite },
    {name: "npm", icon: Npm},
    { name: "pnpm", icon: SiPnpm },
    {name:"Docker", icon: SiDocker}
  ],
  Programming: [
  { name: "Python", icon: Python },
  { name: "Java", icon: Java },
  { name: "C++", icon: SiCplusplus},
  { name: "PHP", icon: Php}
],
  deployment : [
  { name: "Vercel", icon: Vercel },
  { name: "Netlify", icon: Netlify },
  { name: "Render", icon: SiRender },
  { name: "Railway", icon: SiRailway },
  {name:"Heroku", icon:SiHeroku}
]
};
