// src/components/layout/Footer.tsx
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// Links de navegação rápidos
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/#areas", label: "Áreas de Atuação" },
  { href: "/contato", label: "Contato" },
];

// Links das redes sociais
const socialLinks = [
  { 
    href: "https://wa.me/5585999999999", 
    icon: FaWhatsapp, 
    label: "WhatsApp" 
  },
  { 
    href: "https://instagram.com/veritasadvocacia", 
    icon: FaInstagram, 
    label: "Instagram" 
  },
  { 
    href: "https://linkedin.com/company/veritasadvocacia", 
    icon: FaLinkedin, 
    label: "LinkedIn" 
  },
];

export function Footer() {
  return (
    // Fundo claro e escuro com bordas sutis
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* 1. Logo e Descrição */}
          <div className="flex flex-col md:col-span-2">
            {/* Logo substituta */}
            <Link href="/" className="inline-block">
              <div className="w-40 h-10 bg-linear-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg tracking-tight">VÉRITAS</span>
              </div>
            </Link>
            {/*
            <Image
              src="/logo-branca.png"
              alt="Véritas Advocacia Logo"
              width={160}
              height={40}
            />
            */}
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-md">
              Defendemos seus direitos trabalhistas com excelência e transparência. 
              Sua justiça começa aqui.
            </p>
            {/* Informação OAB */}
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-500/10 rounded-lg border border-amber-200 dark:border-amber-500/20">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-amber-600 dark:text-amber-400">Dr. Rodrigo Silva</span><br />
                OAB/CE 123.456
              </p>
            </div>
          </div>
          
          {/* 2. Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-amber-600 dark:hover:text-amber-400 hover:pl-2 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contato e Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <FaMapMarkerAlt className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                <span className="text-sm">Av. Santos Dumont, 1234<br />Sala 501, Fortaleza-CE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaPhone className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-sm">(85) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
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
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:bg-amber-600 dark:hover:bg-amber-600 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-white" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Véritas Advocacia. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            Desenvolvido com excelência para resultados extraordinários
          </p>
        </div>

      </div>
    </footer>
  );
}