// src/components/sections/SobreHome.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SobreHome() {
  return (
    <section className="w-full bg-background-accent py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* --- 1. Coluna de Imagem - Substituída por Card --- */}
          <div className="flex justify-center lg:justify-start">
            {/* Card substituto para a imagem do advogado */}
            <div className="w-full max-w-md h-96 bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 border border-zinc-200 dark:border-zinc-600">
              <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 text-center">
                Dr. Rodrigo Silva
              </h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium mb-4 text-center">
                Advogado Sênior - OAB/SP 123.456
              </p>
              <div className="w-16 h-1 bg-amber-500 rounded-full mb-4"></div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm text-center">
                +10 anos de experiência em Direito Trabalhista
              </p>
            </div>

            {/* 
            <Image
              src="/images/equipe/advogado-principal.jpg"
              alt="Foto do Advogado Principal - Véritas Advocacia"
              width={500}
              height={550}
              className="rounded-lg object-cover shadow-xl"
            />
            */}
          </div>

          {/* --- 2. Coluna de Texto --- */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            
            {/* Título da Seção */}
            <SectionTitle
              subtitle="Véritas Advocacia"
              title="Mais que advogados, seus aliados pela justiça"
              align="left"
            />

            {/* Texto de Apresentação */}
            <p className="text-lg leading-7 text-foreground">
              A Véritas Advocacia nasceu da missão de ser a voz do trabalhador. Entendemos que 
              por trás de cada caso existe uma história, e é por isso que tratamos cada 
              cliente com a seriedade e a transparência que ele merece.
            </p>

            {/* Destaque (frase de impacto) */}
            <p className="text-lg font-semibold leading-7 text-foreground-heading">
              Nós não temos medo de enfrentar grandes empresas. O nosso compromisso 
              é com você e com a verdade.
            </p>

            {/* Botão para a página 'Sobre' completa */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <Button asChild variant="secondary" size="lg" className="bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/sobre">
                  Conheça Nossa História
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}