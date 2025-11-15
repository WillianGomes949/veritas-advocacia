// src/components/sections/SobreHome.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";

export function SobreHome() {
  return (
    <section className="w-full bg-background-accent py-20 md:py-30" id="sobre">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* --- 1. Coluna de Imagem - Substituída por Card --- */}
          <div className="relative flex flex-col-reverse gap-6 items-center justify-center lg:justify-start">
            {/* Card substituto para a imagem do advogado */}
            <div className="md:absolute inset-0 md:w-60 md:h-70 bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl shadow-2xl md:flex flex-col items-center justify-center p-8 border border-zinc-200 dark:border-zinc-600 z-10 2xs:left-50 md:top-80">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-100">
                Dr. Rodrigo Silva
              </h4>
              <p className="text-amber-600 dark:text-amber-400">
                Advogado Sênior - OAB/SP 123.456
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 ">
                +10 anos de experiência em Direito Trabalhista
              </p>
            </div>

            <Image
              src="/images/equipe/diretor.webp"
              alt="Foto do Advogado Principal - Véritas Advocacia"
              width={500}
              height={550}
              className="rounded-lg object-cover shadow-xl"
            />
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
              A Véritas Advocacia nasceu da missão de ser a voz do trabalhador.
              Entendemos que por trás de cada caso existe uma história, e é por
              isso que tratamos cada cliente com a seriedade e a transparência
              que ele merece.
            </p>

            {/* Destaque (frase de impacto) */}
            <p className="text-lg font-semibold leading-7 text-foreground-heading">
              Nós não temos medo de enfrentar grandes empresas. O nosso
              compromisso é com você e com a verdade.
            </p>

            {/* Botão para a página 'Sobre' completa */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <Button
                variant="secondary"
                size="lg"
              >
                <Link href="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
