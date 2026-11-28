import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      label: "GitHub",
      icon: <FaGithub size={20} />,
      href: "https://github.com/muradbzuneh",
      colorClass: "text-slate-900 dark:text-white hover:border-slate-500",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      href: "https://linkedin.com/in/murad-bzuneh",
      colorClass: "text-[#0A66C2] hover:border-[#0A66C2]/60",
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/muradina_16",
      colorClass: "text-[#E4405F] hover:border-[#E4405F]/60",
    },
    {
      label: "X (Twitter)",
      icon: <SiX size={18} />,
      href: "https://x.com/MuradBzuneh",
      colorClass: "text-slate-900 dark:text-white hover:border-slate-500",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/qr/2LC2XHRVIYJ7I1",
      colorClass: "text-[#25D366] hover:border-[#25D366]/60",
    },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 mt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Murad Bzuneh. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className={`p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all ${social.colorClass}`}
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
