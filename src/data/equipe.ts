// src/data/equipe.ts

// Definimos um tipo para cada membro da equipe
export type EquipeMember = {
  id: number;
  name: string;
  role: string; // Ex: "Advogado Fundador", "Advogada Associada"
  imageUrl: string; // Caminho a partir da pasta /public
  oab: string; // Ex: "OAB/CE 12.345"
  bio: string; // Um breve parágrafo
  specialties?: string;
  experience?: string;
  cases?: string;
};

export const DADOS_EQUIPE: EquipeMember[] = [
  {
    id: 1,
    name: "[Seu Nome Completo]",
    role: "Advogado Fundador - Especialista Trabalhista",
    imageUrl: "/images/equipe/advogado-principal.jpg", // Foto principal
    oab: "OAB/CE [XXXXX]",
    bio: "Com [X] anos de experiência dedicados exclusivamente à defesa dos direitos do trabalhador, o Dr(a). [Seu Sobrenome] fundou a Véritas Advocacia com a missão de trazer justiça e transparência para as relações de trabalho.",
    specialties: "",
    experience: "",
    cases: "",
  },
  {
    id: 2,
    name: "[Nome Associado(a)]",
    role: "Advogado(a) Associado(a)",
    imageUrl: "/images/equipe/associado-1.jpg", // Crie esta imagem
    oab: "OAB/CE [XXXXX]",
    bio: "Especialista em cálculos rescisórios e análise de verbas, [Nome] é a linha de frente na garantia de que cada centavo devido ao trabalhador seja pago.",
    specialties: "",
    experience: "",
    cases: "",
  },
  {
    id: 3,
    name: "[Nome Assistente]",
    role: "Assistente Jurídica",
    imageUrl: "/images/equipe/assistente-1.jpg", // Crie esta imagem
    oab: "Estagiária OAB/CE [XXXXX]", // Ou apenas o cargo
    bio: "Responsável pelo acompanhamento processual e atendimento ao cliente, [Nome] garante que nossos clientes estejam sempre informados sobre o andamento de seus casos.",
    specialties: "",
    experience: "",
    cases: "",
  },
  // Adicione mais membros aqui
];
