import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
        <Equipe/>
        <Depoimentos/>
        <Processo/>
        <CtaFinal/>
        
        <Footer/>
      </main>
    </div>
  );
}
