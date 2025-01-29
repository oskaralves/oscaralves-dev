'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome"
          required
          className="p-4 px-2 lg:p-8 lg:px-4"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          required
          className="p-4 px-2 lg:p-8 lg:px-4"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Sua mensagem"
          required
          className="p-4 px-2 lg:p-8 lg:px-4"
        />
      </div>

      <Button type="submit" className="w-full">
        Enviar
      </Button>
    </form>
  );
};
