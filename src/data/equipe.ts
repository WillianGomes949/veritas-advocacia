// src/data/equipe.ts

// Definimos um tipo para cada membro da equipe
export type EquipeMember = {
  id: number;
  name: string;
  role: string; // Ex: "Advogado Fundador", "Advogada Associada"
  imageUrl: string; // Caminho a partir da pasta /public
  oab: string; // Ex: "OAB/CE 12.345"
  bio: string; // Um breve parágrafo
  specialties?: string | null;
  experience?: string;
  cases?: string;
};

export const DADOS_EQUIPE: EquipeMember[] = [
  {
    id: 1,
    name: "Pedro Alcantara",
    role: "Advogado Fundador - Especialista Trabalhista",
    imageUrl: "/images/equipe/lider.webp",
    oab: "OAB/CE 132546",
    bio: "Com [X] anos de experiência dedicados exclusivamente à defesa dos direitos do trabalhador, o Dr(a). [Seu Sobrenome] fundou a Véritas Advocacia com a missão de trazer justiça e transparência para as relações de trabalho.",
    specialties: "Direito do Trabalho, Rescisão Indireta, Acidentes de Trabalho, Assédio Moral, Horas Extras não Pagas",
    experience: "15",
    cases: "30",
  },
  {
    id: 2,
    name: "Juliana Silva",
    role: "Advogado(a) Associado(a)",
    imageUrl: "/images/equipe/associada.webp",
    oab: "OAB/CE 1254875",
    bio: "Especialista em cálculos rescisórios e análise de verbas, [Nome] é a linha de frente na garantia de que cada centavo devido ao trabalhador seja pago.",
    specialties: "Cálculos Trabalhistas, Verbas Rescisórias, Equiparação Salarial, Adicionais de Insalubridade e Periculosidade",
    experience: "8",
    cases: "100",
  },
  {
    id: 3,
    name: "Amanda Oliveira",
    role: "Assistente Jurídica",
    imageUrl: "/images/equipe/estagiaria.webp",
    oab: "Estagiária OAB/CE 2598636",
    bio: "Responsável pelo acompanhamento processual e atendimento ao cliente, [Nome] garante que nossos clientes estejam sempre informados sobre o andamento de seus casos.",
    specialties: "Acompanhamento Processual, Atendimento ao Cliente, Protocolos Judiciais, Organização de Prazos",
    experience: "3",
    cases: "50",
  },
  // Adicione mais membros aqui
];