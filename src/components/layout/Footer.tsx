// src/components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

// Links de navegação rápidos
const navLinks = [
  { href: "/", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

// Links das redes sociais
const socialLinks = [
  {
    href: "https://wa.me/5585999999999",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://instagram.com/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    // Fundo claro e escuro com bordas sutis
    <footer className="w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* 1. Logo e Descrição */}
          <div className="flex flex-col md:col-span-2">
            {/* Logo - Substituído por Card */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.svg"
                alt="Véritas Advocacia Logo"
                width={50}
                height={50}
                priority
                className="dark:invert transition-opacity group-hover:opacity-90"
              />
              <div className="text-zinc-800 dark:text-zinc-300 tracking-tight flex flex-col gap-0">
                <h2 className="font-bold">Véritas</h2>
                <span className="text-zinc-700 dark:text-zinc-400">
                  Advogados
                </span>
              </div>
            </Link>

            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 max-w-md">
              Defendemos seus direitos trabalhistas com excelência e
              transparência. Sua justiça começa aqui.
            </p>
            {/* Informação OAB */}
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-500/10 rounded-lg border border-amber-200 dark:border-amber-500/20">
              <p className="text-sm text-zinc-800 dark:text-zinc-200">
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  Dr. Rodrigo Silva
                </span>
                <br />
                OAB/CE 123.456
              </p>
            </div>
          </div>

          {/* 2. Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-300 transition-all duration-300 hover:text-amber-600 dark:hover:text-amber-400 hover:pl-2 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contato e Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                <FaMapMarkerAlt className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                <span className="text-sm">
                  Av. Santos Dumont, 1234
                  <br />
                  Sala 501, Fortaleza-CE
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                <FaPhone className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-sm">(85) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                <FaEnvelope className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-sm">contato@veritasadv.com.br</span>
              </li>
            </ul>

            {/* Ícones Sociais */}
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg transition-all duration-300 hover:bg-amber-600 dark:hover:bg-amber-600 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-300 hover:text-white" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Véritas Advocacia. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
            Desenvolvido com excelência para resultados extraordinários
          </p>
        </div>
      </div>
    </footer>
  );
}
