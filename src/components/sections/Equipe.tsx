// src/components/sections/Equipe.tsx
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DADOS_EQUIPE } from "@/data/equipe";
import MyBadges from "../ui/MyBadges";
import { BiCheck } from "react-icons/bi";

export function Equipe() {
  return (
    // Fundo claro simples
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <SectionTitle
          subtitle="Nossos Especialistas"
          title="A equipe dedicada à sua causa"
          align="center"
          className="mx-auto max-w-2xl"
        />

        {/* Descrição adicional */}
        <p className="mt-6 text-center text-zinc-600 max-w-3xl mx-auto">
          Profissionais qualificados com vasta experiência em direito
          trabalhista, comprometidos em buscar a justiça que você merece.
        </p>

        {/* Grid Responsivo para a Equipe */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DADOS_EQUIPE.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between items-center text-center rounded-2xl bg-zinc-50 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Avatar substituto para imagem */}
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-linear-to-br from-amber-500 to-amber-600 shadow-lg flex items-center justify-center mx-auto">
                  <span className="text-4xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/*
                  <div className="relative h-60 w-60 overflow-hidden rounded-full shadow-lg">
                    <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover object-top"
                    />
                  </div>
                  */}

                {/* Informações */}
                <div className="mt-6 w-full">
                  {/* Nome */}
                  <h3 className="text-xl font-bold text-zinc-900">
                    {member.name}
                  </h3>

                  {/* Cargo */}
                  <p className="mt-2 text-base font-semibold text-amber-600">
                    {member.role}
                  </p>

                  {/* OAB */}
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1">
                    <span className="text-xs font-medium text-amber-800">
                      {member.oab}
                    </span>
                  </div>
                  {/* Bio */}
                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div>
                {/* Especialidades */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <MyBadges
                    variant="success"
                    key={member.id}
                    description={`${member.specialties}`}
                  />
                </div>

                {/* Experiência */}
                <div className="mt-6 pt-4 border-t border-zinc-200 flex justify-around items-center">
                  <div className="flex text-center items-center gap-3 text-md text-zinc-500 ">
                    <div className="text-2xl font-bold text-amber-600">
                      {member.experience}
                    </div>
                    <span>+</span>
                    <span className="text-xs">anos</span>
                  </div>
                  <div className="flex text-center items-center gap-3 text-md text-zinc-500 ">
                    <div className="text-2xl font-bold text-amber-600">
                      {member.cases}
                    </div>
                    <span>+</span>
                    <span className="text-sm">casos</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de equipe */}
        <div className="mt-12 text-center">
          <MyBadges
            variant="success"
            icon={<BiCheck size={20} />}
           description="Equipe multidisciplinar com mais de 50 anos de experiência combinada"
          />
        </div>
      </div>
    </section>
  );
}
