// src/components/sections/CtaFinal.tsx
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import MyBadges from "../ui/MyBadges";
import { IoWarning } from "react-icons/io5";

export function CtaFinal() {
  return (
    // Fundo com gradiente sofisticado
    <section className="w-full bg-linear-to-br from-zinc-50 to-amber-50 py-20 md:py-32">
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
