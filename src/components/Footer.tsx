import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      ),
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com",
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
  ];

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-green-700 to-green-900 py-16 relative"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo et description */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <Link
              href="/"
              className="flex items-center justify-center space-x-4 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/logo_rbg.png"
                alt="Logo Animania - Votre portail sur le monde animal"
                width={95}
                height={95}
                className="rounded-full border-2 border-green-700 shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
              />
              <h3 className="text-2xl font-bold text-white font-serif">
                Animania
              </h3>
            </Link>
            <p className="text-gray-300 text-center md:text-left">
              Où chaque créature a une histoire à raconter !
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-lg mb-4">
              Navigation
            </h4>
            <nav>
              <ul className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-300 hover:underline transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-lg mb-4">
              Suivez-nous
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <div key={social.name} className="group relative">
                  <a
                    href={social.url}
                    className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-label={`Icône ${social.name}`}
                    >
                      {social.icon}
                    </svg>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Animania - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
