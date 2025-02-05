'use server';

import { MY_EMAIL } from '@/constants';
import { ContactFormValueType } from '@/schemas/contact.schema';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const template = 'contact form';
const secretKey = process.env.CLOUDFLARE_SITE_KEY;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: apiKey as string,
});

export async function sendEmail(
  data: ContactFormValueType & { captcha: string }
) {
  if (!apiKey || !domain || !secretKey) {
    throw new Error(
      'Mailgun API Key, Domain ou Turnstile Secret Key estão ausentes.'
    );
  }

  const { name, email, message, cellphone, captcha } = data;
  const recipient = MY_EMAIL;

  const captchaResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: secretKey,
        response: captcha,
      }),
    }
  );

  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return { success: false, message: 'Verificação do CAPTCHA falhou.' };
  }

  try {
    const response = await mg.messages.create(domain, {
      from: `Contato <no-reply@${domain}>`,
      to: recipient,
      subject: `Nova mensagem de ${name} - ${domain}`,
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
