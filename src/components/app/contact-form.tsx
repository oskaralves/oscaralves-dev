'use client';

import { sendEmail } from '@/actions/sendmail';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useDictionary } from '@/contexts/dictionary-context';
import { useLanguage } from '@/contexts/locale-context';
import {
  ContactFormValueType,
  getContactFormSchema,
  getContactFormValues,
} from '@/schemas/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Mail02Icon,
  Navigation03Icon,
  SmartPhone01Icon,
  UserIcon,
} from 'hugeicons-react';
import { useCallback, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Country } from 'react-phone-number-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { PhoneInput } from '../ui/phone-input';
import { useSonnerToast } from '../ui/use-sonner-toast';

export const ContactForm = () => {
  const { locale, countries } = useLanguage();
  const { showToast, closeToast } = useSonnerToast();

  const {
    general: { CLOSE, SEND, SEARCH },
    field: {
      NAME,
      NAME_PLACEHOLDER,
      EMAIL,
      EMAIL_PLACEHOLDER,
      CELLPHONE,
      CELLPHONE_PLACEHOLDER,
      MESSAGE,
      MESSAGE_PLACEHOLDER,
    },
    feedback: { CONTACT },
  } = useDictionary();

  const form = useForm<ContactFormValueType>({
    resolver: zodResolver(getContactFormSchema(locale)),
    defaultValues: getContactFormValues(),
    mode: 'onChange',
  });
  const [isPending, startTransition] = useTransition();

  const [country, setCountry] = useState<Country | undefined>(
    () => countries[locale]
  );

  const onSubmit = useCallback(
    (values: ContactFormValueType) => {
      startTransition(async () => {
        console.log('values', values);
        const res = await sendEmail(values);
        if (!res.success) {
          const errorToastId = showToast({
            type: 'error',
            title: CONTACT.MESSAGE_SEND_ERROR,
            closeButton: false,
            action: {
              label: CLOSE,
              onClick: () => closeToast(errorToastId),
            },
          });
          return;
        }
        const successToastId = showToast({
          type: 'success',
          title: CONTACT.MESSAGE_SEND_SUCCESSFULLY,
          closeButton: false,
          action: { label: CLOSE, onClick: () => closeToast(successToastId) },
        });
        form.reset(getContactFormValues());
      });
    },
    [CLOSE, CONTACT, closeToast, form, showToast]
  );

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState: { invalid } }) => (
            <FormItem className="space-y-1">
              <FormLabel>{NAME}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  variant={invalid ? 'destructive' : 'default'}
                  className="px-2 py-4 pl-11 lg:px-3 lg:py-7 lg:pl-11"
                  placeholder={NAME_PLACEHOLDER}
                  startIcon={
                    <UserIcon
                      className="pointer-events-none size-6"
                      strokeWidth={1}
                    />
                  }
                  disabled={isPending}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState: { invalid } }) => (
            <FormItem className="space-y-1">
              <FormLabel>{EMAIL}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? undefined}
                  variant={invalid ? 'destructive' : 'default'}
                  className="px-2 py-4 pl-11 lg:px-3 lg:py-7 lg:pl-11"
                  placeholder={EMAIL_PLACEHOLDER}
                  startIcon={
                    <Mail02Icon
                      className="pointer-events-none size-6"
                      strokeWidth={1}
                    />
                  }
                  disabled={isPending}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cellphone"
          render={({ field, fieldState: { invalid } }) => (
            <FormItem className="space-y-1">
              <FormLabel>{CELLPHONE}</FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  searchCountryPlaceholder={SEARCH}
                  searchEmptyLabel={'Nenhum encontrado'}
                  defaultCountry={country}
                  onCountryChange={setCountry}
                  variant={invalid ? 'destructive' : 'default'}
                  className="flex w-full px-2 py-4 pl-11 lg:px-3 lg:py-7 lg:pl-11"
                  startIcon={
                    <SmartPhone01Icon
                      className="pointer-events-none size-6"
                      strokeWidth={1}
                    />
                  }
                  value={field.value || ''}
                  disabled={isPending}
                  placeholder={CELLPHONE_PLACEHOLDER}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState: { invalid } }) => (
            <FormItem className="space-y-1">
              <FormLabel>{MESSAGE}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  variant={invalid ? 'destructive' : 'default'}
                  value={field.value || ''}
                  rows={6}
                  className="px-2 py-4 lg:px-3 lg:py-5"
                  placeholder={MESSAGE_PLACEHOLDER}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            className="w-full min-w-32 lg:w-auto"
            isLoading={isPending}
            endIcon={<Navigation03Icon className="-mr-1" />}
          >
            {SEND}
          </Button>
        </div>
      </form>
    </Form>
  );
};
