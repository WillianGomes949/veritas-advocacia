// src/components/ui/SectionTitle.tsx
import { cn } from '@/lib/utils'; // Importa nossa função utilitária de classes

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: 'left' | 'center'; // Permite alinhar o título
}

export function SectionTitle({
  subtitle,
  title,
  className = '',
  align = 'left',
}: SectionTitleProps) {
  
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={cn(alignClass, className)}>
      {/* Subtítulo: Dourado Acetinado (primary) */}
      <h6 className="mb-2 block text-sm font-semibold uppercase tracking-wide text-primary text-amber-600">
        {subtitle}
      </h6>
      
      {/* Título Principal: Azul Oxford (foreground-heading) */}
      <h2 className="text-3xl font-bold tracking-tight text-foreground-heading sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}