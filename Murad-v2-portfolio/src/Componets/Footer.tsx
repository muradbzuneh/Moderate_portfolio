import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Murad. All rights reserved.
        </p>

        <div className="flex gap-6 text-slate-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="transition hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="transition hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;