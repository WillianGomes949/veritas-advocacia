// src/components/sections/Hero.tsx
"use client";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "../FadeIn";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-linear-to-r py-24">
      <div className="absolute inset-0 opacity-30 overflow-hidden -z-10">
        <Image
          src="/images/law.webp"
          alt="Background"
          className="w-full h-full object-cover object-top"
          width={600}
          height={600}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-red-700 to-amber-500 -z-11"></div>

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
                <Button href="#" variant="success" size="lg">
                  Fale Grátis com um Especialista
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            {/* --- 2. Coluna de Imagem - Substituída por Card --- */}
            <div className="flex justify-center">
              {/* Card substituto para a imagem */}
              <div className="w-full max-w-md h-80 bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl shadow-2xl flex items-center justify-center p-8 border border-zinc-300 dark:border-zinc-600">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    Justiça & Excelência
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    Defesa trabalhista especializada com resultados comprovados
                  </p>
                </div>
              </div>

              {/* 
            <Image
              src="/images/banners/hero-banner.jpg"
              alt="Advocacia Trabalhista - Véritas Advocacia"
              width={600}
              height={600}
              priority
              className="rounded-lg shadow-xl"
            />
            */}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
// {/* <main>
//   <div className="relative min-h-screen">
//     {/* Imagem de fundo com efeito parallax */}
//     <div className="fixed inset-0 z-0">
//       <img
//         src="/sua-imagem.jpg"
//         alt="Background"
//         className="w-full h-full object-cover"

//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//     </div>

//     {/* Conteúdo */}
//     <div className="relative z-10">

//     CONTEUDO
//     </div>
//   </div>
// </main> */}
