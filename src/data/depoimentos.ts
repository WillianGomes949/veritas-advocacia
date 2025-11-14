
// src/data/depoimentos.ts

// Definimos o tipo para os depoimentos
export type Depoimento = {
  nome: string;
  caso: string; // Ex: "Motorista", "Vendedor", "Caso: Horas Extras"
  texto: string;
};

export const DADOS_DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Marcos R.",
    caso: "Caso: Reversão de Justa Causa",
    texto: "Pensei que minha causa estava perdida. A Véritas Advocacia foi a fundo e conseguiu reverter minha demissão. Equipe muito honesta e batalhadora. Só tenho a agradecer."
  },
  {
    nome: "Juliana S.",
    caso: "Caso: Assédio Moral",
    texto: "Eu sofria assédio por meses e tinha muito medo de processar. O Dr. [Seu Nome] me deu toda a confiança e a assessoria que eu precisava. A justiça foi feita."
  },
  {
    nome: "Carlos P.",
    caso: "Caso: Horas Extras",
    texto: "Eu não recebia minhas horas extras corretamente há anos. A Véritas fez o cálculo, provou tudo e eu recebi o que era meu por direito. Recomendo de olhos fechados."
  }
];