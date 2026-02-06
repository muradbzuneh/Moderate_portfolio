import { FaGithub, FaLinkedin, FaInstagram, FaTwitter,  FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Murad. All rights reserved.
        </p>

        <div className="flex gap-6 text-slate-400">
          <a
            href="https://github.com/muradbzuneh"
            target="_blank"
            className="transition hover:text-cyan-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/murad-bzuneh"
            target="_blank"
            className="transition hover:text-cyan-300"
          >
            <FaLinkedin size={18} />
          </a>

           <a
            href="https://instagram.com/muradina_16"
            target="_blank"
            className="transition hover:text-cyan-300"
          >
            <FaInstagram size={18} />

          
          </a>
          <a
            href="https://x.com/MuradBzuneh"
            target="_blank"
            className="transition hover:text-cyan-300"
          >
            <FaTwitter size={18} />
          </a>
       
          <a
            href="https://wa.me/qr/2LC2XHRVIYJ7I1"
            target="_blank"
            className="transition hover:text-cyan-300"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;