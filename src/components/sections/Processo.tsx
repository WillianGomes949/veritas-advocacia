// src/components/sections/Processo.tsx
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import {
  HiOutlineChatAlt2, // 1. Análise
  HiOutlineDocumentSearch, // 2. Viabilidade
  HiOutlineScale, // 3. Ação
  HiOutlineCheckCircle, // 4. Justiça
} from "react-icons/hi";
import MyBadges from "../ui/MyBadges";

// Nossos 4 passos
const passos = [
  {
    icon: HiOutlineChatAlt2,
    title: "1. Análise Gratuita do Caso",
    description:
      "Você nos conta sua história pelo WhatsApp ou reunião. Analisamos seus documentos (contrato, holerites, etc.) sem custo algum.",
  },
  {
    icon: HiOutlineDocumentSearch,
    title: "2. A Verdade (Viabilidade)",
    description:
      "Seremos 100% honestos. Se entendermos que você tem direito, explicaremos o caminho e os riscos. Só avançamos se acreditarmos na causa.",
  },
  {
    icon: HiOutlineScale,
    title: "3. Ação e Processo",
    description:
      "Preparamos o processo e cuidamos de toda a burocracia. Você será informado sobre cada etapa de forma clara e simples.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "4. A Justiça",
    description:
      "Atuamos de forma firme nas audiências e em todas as fases até a decisão final, buscando o melhor resultado possível para você.",
  },
];

export function Processo() {
  return (
    // Fundo claro simples
    <section className="w-full bg-white py-20 md:py-30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <SectionTitle
          subtitle="Nosso Método"
          title="Entenda como vamos lutar por você"
          align="center"
          className="mx-auto max-w-2xl"
        />

        {/* Descrição adicional */}
        <p className="mt-6 text-center text-zinc-600 max-w-3xl mx-auto">
          Um processo transparente e eficiente, do primeiro contato até a
          conquista dos seus direitos
        </p>

        {/* Lista dos Passos usando Card component */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo) => (
            <Card
              key={passo.title}
              title={passo.title}
              description={passo.description}
              icon={passo.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* Nota de garantia */}
          <MyBadges
            description="Atuamos somente quando há viabilidade comprovada"
            variant='danger'
            icon={<HiOutlineCheckCircle size={20} />}
          />
        </div>
      </div>
    </section>
  );
}
