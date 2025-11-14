// src/components/layout/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Ícones para menu mobile
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// Definição dos links de navegação
const navLinks = [
  { href: "/", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Substituído por Card */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-40 h-10 bg-linear-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg tracking-tight">
              VÉRITAS
            </span>
          </div>
          {/* 
          <Image
            src="/logo.png"
            alt="Véritas Advocacia Logo"
            width={160}
            height={40}
            priority
            className="transition-opacity group-hover:opacity-90"
          />
          */}
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
        <div className="hidden lg:block">
          <Button href="#" variant={"default"} size="lg">
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
        <div className="absolute left-0 top-20 w-full border-t bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg border-zinc-200 dark:border-zinc-800 shadow-xl lg:hidden animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col space-y-2 p-6">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-base font-medium text-zinc-800 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA dentro do Menu Mobile */}
            <Button href="#" variant={"default"} size="lg">
              Fale com Especialista
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
