// Obrigatório para qualquer componente que use hooks (useState, useEffect) ou interatividade
'use client'; 

import { motion, Variants } from 'framer-motion';
import React from 'react';

// Tipamos as props que o componente vai receber
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function FadeIn({
  children,
  delay = 0.2,
  direction = 'up',
  className,
}: FadeInProps) {

  // Define as variantes da animação
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      // A mágica acontece aqui!
      initial="hidden"       // Estado inicial (antes de entrar na tela)
      whileInView="visible"  // Estado final (quando entra na tela)
      viewport={{ once: true }} // Anima apenas uma vez
      variants={variants}      // Aplica as variantes que definimos
      className={className}    // Permite passar classes externas (ex: Tailwind)
    >
      {children}
    </motion.div>
  );
}