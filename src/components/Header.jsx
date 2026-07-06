import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "User", path: "/user" },
  { name: "GtiHub", path: "/github" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/80 shadow-sm backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/home"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="React Logo"
            className="h-11 w-11 transition-transform duration-300 "
          />

          <h1 className="text-xl font-bold tracking-tight text-white">
            Routing Journey
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                      isActive
                        ? "border border-violet-500/20 bg-violet-500/15 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                        : "text-zinc-400 hover:bg-zinc-800/70 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="rounded-xl p-2 text-zinc-400 transition-all duration-300 hover:bg-zinc-800 hover:text-white md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 z-50 w-full border-4 rounded-2xl border-white/10 bg-[#09090B] backdrop-blur-2xl md:hidden">
          <nav>
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "border border-violet-500/20 bg-violet-500/15 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                          : "text-zinc-400 hover:bg-zinc-800/70 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
