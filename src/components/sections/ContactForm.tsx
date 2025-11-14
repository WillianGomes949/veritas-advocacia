// src/components/sections/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Simulação de envio - substitua pela sua API
      console.log('Dados do formulário:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulação de sucesso
      setSubmitStatus('success');
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Houve um erro ao enviar. Tente novamente ou entre em contato diretamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = cn(
    "block w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5",
    "text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200",
    "focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20",
    "hover:border-gray-400",
    "disabled:bg-gray-100 disabled:cursor-not-allowed"
  );

  const labelClasses = "block text-sm font-semibold text-gray-900 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campo Nome */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Seu nome completo"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Grid Email e Telefone */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Campo Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="seu@email.com"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Campo Telefone/WhatsApp */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(85) 99999-9999"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Campo Mensagem */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Descreva seu caso *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Conte-nos sobre sua situação de forma detalhada..."
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Botão de Envio e Mensagem de Status */}
      <div className="space-y-4">
        <Button
          type="submit"
          size="lg"
          loading={isSubmitting}
          loadingText="Enviando..."
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem Agora"}
        </Button>
        
        {submitStatus !== 'idle' && (
          <div className={`flex items-center gap-3 p-4 rounded-xl ${
            submitStatus === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <HiCheckCircle className="h-5 w-5 text-green-600 shrink-0" />
            ) : (
              <HiExclamationCircle className="h-5 w-5 text-red-600 shrink-0" />
            )}
            <p className={`text-sm ${
              submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {submitMessage}
            </p>
          </div>
        )}
      </div>

      {/* Nota de privacidade */}
      <p className="text-xs text-gray-500 text-center">
        Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
      </p>
    </form>
  );
}