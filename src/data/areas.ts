// src/data/areas.ts
import { IconType } from "react-icons";
import { 
  HiOutlineScale, // Justiça/Demissão
  HiOutlineClock, // Horas Extras
  HiOutlineShieldExclamation, // Assédio
  HiOutlineIdentification, // Vínculo PJ
  HiOutlineExclamationCircle, // Insalubridade
  HiOutlineHeart // Acidente/Saúde
} from "react-icons/hi";

// Definimos um tipo para nossos dados
export type AreaDeAtuacao = {
  title: string;
  description: string;
  icon: IconType; // Usamos o tipo da react-icons
};

// Aqui está todo o seu conteúdo, focado no trabalhador
export const DADOS_AREAS: AreaDeAtuacao[] = [
  {
    title: "Demissão por Justa Causa Injusta",
    description: "Analisamos e revertemos demissões falsas ou exageradas para garantir todos os seus direitos.",
    icon: HiOutlineScale,
  },
  {
    title: "Horas Extras Não Pagas",
    description: "Buscamos o pagamento de todas as horas extras, domingos e feriados trabalhados e não pagos.",
    icon: HiOutlineClock,
  },
  {
    title: "Assédio Moral ou Sexual",
    description: "Defesa em casos de humilhação e constrangimento, buscando rescisão indireta e indenização.",
    icon: HiOutlineShieldExclamation,
  },
  {
    title: "Trabalho sem Carteira (PJ)",
    description: "Buscamos o reconhecimento do vínculo de emprego e o pagamento de férias, 13º e FGTS.",
    icon: HiOutlineIdentification,
  },
  {
    title: "Adicionais (Insalubridade/Periculosidade)",
    description: "Não recebe pelo risco? Buscamos o pagamento correto pelo seu ambiente de trabalho.",
    icon: HiOutlineExclamationCircle,
  },
  {
    title: "Acidente de Trabalho ou Doença",
    description: "Garantimos sua estabilidade e buscamos indenizações por acidentes ou doenças ocupacionais.",
    icon: HiOutlineHeart,
  },
];


