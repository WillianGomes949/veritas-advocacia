// src/components/ui/Card.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon: IconType;
  className?: string;
}

export function Card({ 
  title, 
  description, 
  icon: Icon, 
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-xl bg-white p-6 shadow-lg",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl",
        "group cursor-pointer",
        " bg-white dark:bg-gray-800 p-8 hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:-translate-y-1",
        className
      )}
    >
      {/* Ícone */}
      <div className="shrink-0">
        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300 ">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="grow space-y-3">
        {/* Título */}
        <h3 className="text-lg font-bold text-gray-200">
          {title}
        </h3>
        
        {/* Descrição */}
        <p className="text-sm leading-6 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}