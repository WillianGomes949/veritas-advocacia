// src/components/sections/CtaFinal.tsx
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import MyBadges from "../ui/MyBadges";
import { IoWarning } from "react-icons/io5";
import Image from "next/image";

export function CtaFinal() {
  return (
    // Fundo com gradiente sofisticado
    <section className="relative w-full py-20 md:py-30">
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



      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Container principal com borda sutil */}
        <div className="flex flex-col items-center text-center rounded-2xl bg-white p-8 shadow-lg md:p-12">
          {/* Título e Subtítulo */}
          <SectionTitle
            subtitle="Não espere mais"
            title="Não deixe seu direito 'passar do prazo'"
            align="center"
          />

          <p className="mt-6 max-w-xl text-lg leading-7 text-zinc-600">
            No Direito Trabalhista, o tempo é crucial. Você tem apenas 2 anos
            após a demissão para entrar com uma ação. Não perca seu direito por
            falta de informação.
          </p>

          {/* Destaque urgente */}
          <MyBadges
            variant="danger"
            icon={<IoWarning size={20}/>}
            description="Prazo máximo: 2 anos para ação trabalhista"
          />

          {/* Botão Principal */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button fullWidth={false} href="/">
              Falar com Advogado (Análise Gratuita)
            </Button>
            <Button variant="outline" fullWidth={false} href="/sobre">
              Conhecer o Escritório
            </Button>
          </div>

          {/* Garantia */}
          <p className="mt-8 text-sm text-zinc-500">
            Consulta inicial sem compromisso • Confidencialidade garantida
          </p>
        </div>
      </div>
    </section>
  );
}
