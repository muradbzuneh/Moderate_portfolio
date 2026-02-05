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
  SiMongodb
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
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Firebase", icon: SiFirebase },
  ],
   Database: [
    { name: "Mysql", icon: SiMysql },
    { name: "Postgresssql", icon: SiPostgresql },
     { name: "Mongodb", icon: SiMongodb }


  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Vite", icon: SiVite },
  ],
};