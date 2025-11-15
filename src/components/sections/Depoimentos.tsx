// src/components/sections/Depoimentos.tsx
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DADOS_DEPOIMENTOS } from "@/data/depoimentos";

// Usaremos o ícone de citação da react-icons
import { FaQuoteLeft, FaStar } from "react-icons/fa"; 

export function Depoimentos() {
  return (
    // Fundo com contraste sutil
    <section className="w-full bg-background py-20 md:py-30" id="depoimentos">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Título da Seção - Alinhado ao centro */}
        <SectionTitle
          subtitle="Histórias Reais"
          title="O que nossos clientes dizem"
          align="center"
          className="mx-auto max-w-2xl "
        />

        {/* Grid Responsivo para os depoimentos */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {DADOS_DEPOIMENTOS.map((depoimento) => (
            <div 
              key={depoimento.nome}
              className="flex flex-col rounded-2xl bg-white dark:bg-zinc-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700 hover:-translate-y-1"
            >
              {/* Ícone de Citação (Âmbar) */}
              <div className="shrink-0">
                <FaQuoteLeft className="h-8 w-8 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              </div>

              {/* Texto do Depoimento */}
              <p className="mt-6 grow text-lg italic leading-8 text-zinc-700 dark:text-zinc-300">
                {depoimento.texto}
              </p>

              {/* Separador e informações do cliente */}
              <div className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-6">
                
                {/* Nome do cliente */}
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {depoimento.nome}
                </h4>
                
                {/* Caso/Especialização */}
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">
                  {depoimento.caso}
                </p>

                {/* Rating visual (opcional) */}
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i}
                      className="w-4 h-4 text-amber-500"/>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Nota adicional de credibilidade */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            + de 500 casos resolvidos com excelência
          </p>
        </div>
      </div>
    </section>
  );
}