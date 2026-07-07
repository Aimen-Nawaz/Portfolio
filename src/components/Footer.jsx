import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-xl border-t border-white/40 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Aimen-Nawaz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/aimen-nawaz-691464313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:aimenkhan840@gmail.com"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-600 text-sm">
            © 2026 <span className="font-semibold">Aimen Nawaz</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;