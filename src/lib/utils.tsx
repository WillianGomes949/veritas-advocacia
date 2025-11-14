// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina nomes de classe do Tailwind de forma inteligente.
 * Previne conflitos (ex: 'bg-red-500' e 'bg-blue-500' passados ao mesmo tempo).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}