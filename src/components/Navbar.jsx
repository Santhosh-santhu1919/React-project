import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-md">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">

            {/* Logo */}
            <div
              className="flex items-center gap-2 md:gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/logo.jpg"
                alt="BuildBros Innovations Logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />

              {/* Hide text on mobile */}
              <h1 className="hidden md:block text-xl lg:text-2xl font-bold text-primary">
                BuildBro Innovations
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 lg:gap-8 font-semibold text-lg text-black">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {link.name}
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.path);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-4 font-medium hover:bg-blue-50 hover:text-blue-700 transition"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
