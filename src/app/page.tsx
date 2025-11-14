import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AreasGrid } from "@/components/sections/AreasGrid";
import { Contact } from "@/components/sections/Contact";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Equipe } from "@/components/sections/Equipe";
import { Hero } from "@/components/sections/Hero";
import { Processo } from "@/components/sections/Processo";
import { SobreHome } from "@/components/sections/SobreHome";

export default function Home() {
  return (
    <div>
      <main>
        <Header/>
        <Hero/>
        <SobreHome/>
        <AreasGrid/>
        <Equipe/>
        <Depoimentos/>
        <Processo/>
        <CtaFinal/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
