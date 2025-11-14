// src/components/sections/Equipe.tsx
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DADOS_EQUIPE } from "@/data/equipe";

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
        <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
          Profissionais qualificados com vasta experiência em direito trabalhista, 
          comprometidos em buscar a justiça que você merece.
        </p>

        {/* Grid Responsivo para a Equipe */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {DADOS_EQUIPE.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center text-center rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              
              {/* Avatar substituto para imagem */}
              <div className="relative h-40 w-40 overflow-hidden rounded-full bg-linear-to-br from-amber-500 to-amber-600 shadow-lg flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
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
                <h3 className="text-xl font-bold text-gray-900">
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
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {member.bio}
                </p>

                {/* Especialidades */}
                {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {member.specialties?.map((specialty, index) => (
                    <span 
                      key={index}
                      className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div> */}

                {/* Experiência */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="text-center">
                      <div className="text-lg font-bold text-amber-600">{member.experience}+</div>
                      <div className="text-xs">anos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-amber-600">{member.cases}+</div>
                      <div className="text-xs">casos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de equipe */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-4 rounded-2xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
              <span className="text-sm font-bold text-white">✓</span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Equipe multidisciplinar com mais de 50 anos de experiência combinada
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
}