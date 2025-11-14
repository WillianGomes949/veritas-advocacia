// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid responsivo */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* --- 1. Coluna de Texto --- */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Título Principal (H1) */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground-heading sm:text-5xl md:text-6xl">
              Seus direitos foram desrespeitados? A verdade vai prevalecer.
            </h1>

            {/* Subtítulo */}
            <p className="text-lg leading-7 text-foreground md:text-xl">
              Somos um escritório de advocacia focado em defender o trabalhador. 
              Analisamos seu caso a fundo para garantir a justiça e a reparação que você merece.
            </p>

            {/* Botão de Ação (CTA) */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <Button href="#" variant="success" size="lg">
                
                  Fale Grátis com um Especialista
               
              </Button>
            </div>
          </div>

          {/* --- 2. Coluna de Imagem - Substituída por Card --- */}
          <div className="flex justify-center">
            {/* Card substituto para a imagem */}
            <div className="w-full max-w-md h-80 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center p-8 border border-gray-300 dark:border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Justiça & Excelência
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
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

        </div>
      </div>
    </section>
  );
}