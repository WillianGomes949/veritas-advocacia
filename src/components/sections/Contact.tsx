// src/components/sections/Contact.tsx
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiCheck,
} from "react-icons/hi";
import MyBadges from "../ui/MyBadges";

export function Contact() {
  return (
    // Fundo com gradiente sutil
    <section className="w-full bg-linear-to-br from-white to-gray-50 py-20 md:py-30" id="contato">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid de 2 colunas em desktop */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* --- Coluna Esquerda: Títulos e Informações --- */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <SectionTitle
                subtitle="Fale Conosco"
                title="Não deixe seu direito 'passar do prazo'"
                align="left"
              />

              {/* Alerta de urgência */}
              <MyBadges
                variant="danger"
                icon={<HiOutlineClock size={20} />}
                title="Prazo Limite"
                description="2 anos após a demissão para ação trabalhista"
                className="w-full"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-7 text-gray-600">
                No Direito Trabalhista, o tempo é crucial. Você tem apenas 2
                anos após a demissão para entrar com uma ação. Não perca seu
                direito por falta de informação.
              </p>

              <MyBadges
                variant="success"
                title="Primeira análise gratuita e sigilosa"
                description="Preencha o formulário ou entre em contato diretamente pelos nossos canais."
                className="w-full"
                icon={<HiCheck size={20} />}
              />
            </div>

            {/* Contatos Rápidos */}
            <div className="space-y-6">
              {/* WhatsApp/Telefone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <HiOutlinePhone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    WhatsApp
                  </h4>
                  <Link
                    href="https://wa.me/5585999999999"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    target="_blank"
                  >
                    (85) 99999-9999
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <HiOutlineMail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <Link
                    href="mailto:contato@veritasadv.com.br"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    contato@veritasadv.com.br
                  </Link>
                </div>
              </div>
            </div>

            {/* Garantias */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-lg bg-white border border-gray-200">
                <div className="text-2xl font-bold text-amber-600">100%</div>
                <div className="text-xs text-gray-600">Gratuito</div>
              </div>
              <div className="p-3 rounded-lg bg-white border border-gray-200">
                <div className="text-2xl font-bold text-amber-600">24h</div>
                <div className="text-xs text-gray-600">Resposta</div>
              </div>
            </div>
          </div>

          {/* --- Coluna Direita: Formulário --- */}
          <div className="w-full">
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Envie sua Mensagem
                </h3>
                <p className="mt-2 text-gray-600">
                  Respondemos em até 24 horas
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
