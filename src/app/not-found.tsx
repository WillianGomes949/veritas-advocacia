// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button"; // Importa nosso botão dourado
import Image from "next/image";

/**
 * Esta é uma página especial do Next.js 16+ (App Router).
 * Ela será renderizada automaticamente para qualquer rota não encontrada.
 * Ela não precisa ser importada em nenhum outro lugar.
 */
export default function NotFound() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center justify-center 
                  px-4 py-20 text-center"
    >
      <div className="max-w-lg flex flex-col justify-center items-center">
        {/* Logo - Substituído por Card */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            alt="Véritas Advocacia Logo"
            width={40}
            height={40}
            priority
            className="transition-opacity group-hover:opacity-90"
          />
          <div className="text-zinc-800  tracking-tight flex flex-col gap-0">
            <h2 className="font-bold">Véritas</h2>
            <span className="text-zinc-700 ">Advogados</span>
          </div>
        </Link>

        {/* O número "404" em Dourado e Serifado (Luxo) */}
        <span className="font-serif text-9xl font-bold text-primary">404</span>

        {/* O Título (H1) em Azul Oxford e Serifado (Autoridade) */}
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground-heading sm:text-5xl">
          Página Não Localizada
        </h1>

        {/* O Parágrafo em Cinza Chumbo e Sans-Serif (Clareza) */}
        <p className="mt-6 font-sans text-lg leading-7 text-foreground">
          Pedimos desculpas, mas a página que você está tentando acessar não
          existe, foi movida ou está temporariamente indisponível.
        </p>

        <p className="mt-4 font-sans text-lg leading-7 text-foreground">
          Recomendamos verificar o endereço digitado ou retornar à página
          inicial.
        </p>

        {/* O Botão CTA (Dourado) para guiar o usuário */}
        <div className="mt-10">
          <Button>
            <Link href="/">Voltar à Página Inicial</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
