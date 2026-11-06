import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    { icon: <FaGithub size={20} />, href: "https://github.com/muradbzuneh" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/murad-bzuneh" },
    { icon: <FaInstagram size={20} />, href: "https://instagram.com/muradina_16" },
    { icon: <FaTwitter size={20} />, href: "https://x.com/MuradBzuneh" },
    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/qr/2LC2XHRVIYJ7I1" },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 mt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Murad Bzuneh. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-slate-600 dark:text-slate-400">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-cyan-500/10 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-700"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
