import { getDictionary } from '@/dictionaries';
import { translateFormatter } from '@/dictionaries/utils';
import { Locale } from '@/types/locale';
import { z } from 'zod';

export const getContactFormSchema = (locale: Locale = 'pt-BR') => {
  const { REQUIRED_FIELD, MIN_LENGTH, MAX_LENGTH, EMAIL_INVALID } =
    getDictionary(locale, 'validation');
  const { NAME, MESSAGE } = getDictionary(locale, 'field');

  return z.object({
    name: z
      .string({
        message: translateFormatter(REQUIRED_FIELD, { field: NAME }),
      })
      .min(3, translateFormatter(MIN_LENGTH, { field: NAME, min: 3 }))
      .max(90, translateFormatter(MAX_LENGTH, { field: NAME, max: 90 })),

    cellphone: z.string().nullable().optional(),
    email: z.string().email({ message: EMAIL_INVALID }).nullable().optional(),
    message: z
      .string({
        message: translateFormatter(REQUIRED_FIELD, { field: MESSAGE }),
      })
      .min(20, translateFormatter(MIN_LENGTH, { field: MESSAGE, min: 20 }))
      .max(2500, translateFormatter(MAX_LENGTH, { field: MESSAGE, max: 2500 })),
  });
};

export const ContactFormSchema = getContactFormSchema('pt-BR');

export type ContactFormValueType = z.infer<typeof ContactFormSchema>;

export const getContactFormValues = (): Partial<ContactFormValueType> => {
  return {
    name: '',
    cellphone: '',
    email: '',
    message: '',
  };
};
