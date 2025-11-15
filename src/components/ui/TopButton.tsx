// components/TopButton.tsx
'use client'
import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';
import { Button } from './Button';

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão se o scroll for maior que 300px
      if (window.pageYOffset > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        // 1. Container relativo para o tooltip (classe 'group')
        //    Posicionado fixo no canto da tela
        <div className="fixed bottom-6 right-6 group z-50  text-white rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 group">
          <Button
          variant='ghost'
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            size={'sm'}
            className='w-12 h-12 p-3 rounded-2xl '
          >
            <RiArrowUpLine className='h-7 w-7'/>
          </Button>
          {/* Efeito de pulsaçao sutil */}
      

          {/* 2. O Tooltip*/}
          <span
            className="absolute bottom-full mb-2 left-1/2 -translate-x-22
                       px-3 py-1.5 rounded-md bg-zinc-900 text-white text-sm
                       transition-all duration-200 ease-in-out
                       scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                       origin-bottom whitespace-nowrap"
          >
            Voltar ao topo
          </span>
        </div>
      )}
    </>
  );
}