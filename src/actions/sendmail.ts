'use server';

import { ContactFormValueType } from '@/schemas/contact.schema';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const template = 'contact form';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: apiKey as string,
});

export async function sendEmail(data: ContactFormValueType) {
  if (!apiKey || !domain) {
    throw new Error('Mailgun API Key or Domain is missing');
  }

  const { name, email, message, cellphone } = data;
  const recipient = 'osk.alves@gmail.com';

  try {
    const response = await mg.messages.create(domain, {
      from: `Contato <no-reply@${domain}>`,
      to: recipient,
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email || 'Não informado'}\nCelular: ${cellphone || 'Não informado'}\n\nMensagem:\n${message}`,
      template,
      'h:X-Mailgun-Variables': JSON.stringify({
        name: name,
        email: email || 'Não informado',
        cellphone: cellphone || '[Não informado]',
        message: message,
      }),
    });
    console.info('response', response);

    return { success: true, response };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false };
  }
}
