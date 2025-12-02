// src/components/sections/Hero.tsx
"use client";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "../ui/FadeIn";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

export function Hero() {
  return (
    <section className="relative py-20 md:py-0">
      <div className="absolute inset-0 opacity-30 overflow-hidden -z-10">
        <Image
          src="/images/law.webp"
          alt="Background"
          className="w-full h-full object-cover object-top"
          width={600}
          height={600}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-amber-950 to-amber-500 -z-11"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid responsivo */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="right" delay={0.4}>
            {/* --- 1. Coluna de Texto --- */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              {/* Título Principal (H1) */}
              <h1 className="text-4xl font-bold tracking-tight text-zinc-50 text-heading sm:text-5xl md:text-6xl">
                Seus direitos foram desrespeitados? A verdade vai prevalecer.
              </h1>

              {/* Subtítulo */}
              <p className="text-lg leading-7 text-zinc-50 md:text-xl">
                Somos um escritório de advocacia focado em defender o
                trabalhador. Analisamos seu caso a fundo para garantir a justiça
                e a reparação que você merece.
              </p>

              {/* Botão de Ação (CTA) */}
              <div className="mt-4 flex justify-center lg:justify-start">
                <Button href="#" variant="success" size="lg" target="_blank">
                  <BsWhatsapp size={20} className="mr-2" />
                  Fale Grátis com um Especialista
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            {/* --- 2. Coluna de Imagem - Substituída por Card --- */}
            <div className="relative">
            <Image
              src="/images/equipe/advogada2.webp"
              alt="Advocacia Trabalhista - Véritas Advocacia"
              width={600}
              height={600}
              priority
              className="hidden md:flex w-full  rounded-lg inset-0 object-cover object-top"
            />
           
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
