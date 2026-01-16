import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", ref: refs.heroRef },
    { name: "About", ref: refs.aboutRef },
    { name: "Education", ref: refs.educationRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Project", ref: refs.projectsRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const handleScroll = (ref) => {
    if (!ref || !ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/">
          <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
            My Portfolio
          </h1>
        </Link>
        
        {/* Desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleScroll(link.ref)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>
        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden text-center px-4 pb-4 bg-white shadow">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleScroll(link.ref)}
              className="block w-full py-2 text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
