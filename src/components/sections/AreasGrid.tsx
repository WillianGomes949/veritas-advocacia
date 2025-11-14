// src/components/sections/AreasGrid.tsx
import { Card } from "@/components/ui/Card"; // Importa nossa UI
import { SectionTitle } from "@/components/ui/SectionTitle"; // Importa o título padrão
import DADOS_AREAS from "@/data/areas";

export function AreasGrid() {
  return (
    // Fundo 'Marfim Suave' (padrão)
    <section id="areas" className="w-full scroll-mt-20 bg-background py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção - Alinhado ao centro */}
        <SectionTitle
          subtitle="Defendemos Seus Direitos"
          title="Como podemos lutar por você?"
          align="center"
          className="mx-auto max-w-2xl" // Limita a largura do título
        />

        {/* Grid Responsivo */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Mapeia os dados do 'areas.ts' e renderiza um 'Card.tsx' para cada.
            O conteúdo é separado do layout.
          */}
          {DADOS_AREAS.map((area) => (
            <Card
              key={area.title}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}