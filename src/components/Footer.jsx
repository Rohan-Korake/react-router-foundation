import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Rohan-Korake",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/rohan-korake/",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter size={20} />,
      href: "https://x.com/RohanKorake",
      label: "Twitter",
    },
    {
      icon: <FaGlobe size={20} />,
      href: "https://rohankorake.vercel.app/",
      label: "Portfolio",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:rohannkorake@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#09090B]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">Routing Journey</h2>

          <p className="mt-1 text-sm text-zinc-400">
            Built with React Router, React & Tailwind CSS.
          </p>

          <p className="mt-3 text-xs text-zinc-500">
            © {new Date().getFullYear()} Rohan Korake. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="rounded-xl border border-white/10 bg-zinc-900 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
