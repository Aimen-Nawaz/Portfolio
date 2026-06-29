import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-md">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Aimen
            <span className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              .
            </span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-black transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:block px-5 py-2.5 rounded-xl bg-black text-white hover:scale-105 transition"
          >
            Contact Me
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 px-6 py-4 bg-white/90">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 hover:text-black"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-2 bg-black text-white py-3 rounded-xl"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;