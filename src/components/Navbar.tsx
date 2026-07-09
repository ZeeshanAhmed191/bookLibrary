import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // X icon smooth close state ke liye
import Logo from "../assets/Logo.jpeg"; // Aapka logo import path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Active tab highlight karne ke liye

  // Helper function to check if link is active
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
  
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className=" mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="transition-transform hover:scale-102 dynamic-zone">
          <img src={Logo} alt="UrduKitabain" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-14 text-[17px] font-semibold text-slate-600">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative py-2 transition-colors duration-300 hover:text-emerald-700 font-medium text-2xl ${
                  isActive(link.path) ? "text-emerald-700 font-semibold" : ""
                }`}
              >
                {link.name}
                {/* Underline Animation Effect */}
                <span
                  className={`absolute bottom-0 left-0 h-0.75 bg-amber-400 transition-all duration-300 rounded-full ${
                    isActive(link.path) ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-emerald-800 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-emerald-700 shadow-md hover:shadow-emerald-800/20 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button Hamburger Toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} className="text-emerald-800" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Modern Slide-down Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4 text-base font-semibold">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  isActive(link.path)
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
