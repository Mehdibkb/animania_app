import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

export default function C_Footer() {
  const navLinks: NavLink[] = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-900 py-6 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-start space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logo_rbg.png"
              alt="Logo Animania - Votre portail sur le monde animal"
              width={60}
              height={60}
              className="rounded-full border-2 border-green-700 shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            />
            <h3 className="text-xl font-bold text-white font-serif">
              Animania
            </h3>
          </Link>
          <nav className="flex justify-center w-full">
            <ul className="flex flex-row space-x-6">
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
      </div>
    </footer>
  );
}
