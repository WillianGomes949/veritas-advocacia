// src/components/layout/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Ícones para menu mobile
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

// Definição dos links de navegação
const navLinks = [
  { href: "/", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Substituído por Card */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            alt="Véritas Advocacia Logo"
            width={40}
            height={40}
            priority
            className="dark:invert transition-opacity group-hover:opacity-90"
          />
          <div className="text-zinc-800 dark:text-zinc-300 tracking-tight flex flex-col gap-0">
            <h2 className="font-bold">Véritas</h2>
            <span className="text-zinc-700 dark:text-zinc-400">Advogados</span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex lg:items-center lg:gap-10">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden shrink-0 justify-center items-center md:flex gap-4">
          <Button
            href="https://api.whatsapp.com/send/?phone=5585999999999&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+advocat%C3%ADcios.&type=phone_number&app_absent=0"
            variant={"default"}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com Especialista
          </Button>
        </div>
        {/* Botão do Menu Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
            className="text-zinc-800 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX size={26} />
            ) : (
              <HiOutlineMenu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 top-20 w-full border-t bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg border-zinc-200 dark:border-zinc-800 shadow-xl lg:hidden animate-in slide-in-from-top-5 duration-300"
        >
          <nav className="flex flex-col space-y-2 p-6">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-base font-medium text-zinc-800 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA dentro do Menu Mobile */}
            <Button
              href="https://api.whatsapp.com/send/?phone=5585999999999&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+advocat%C3%ADcios.&type=phone_number&app_absent=0"
              variant="default"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
              Fale com Especialista
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
