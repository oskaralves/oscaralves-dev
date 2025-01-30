'use client';

import { ContactForm } from '@/components/app/contact-form';
import { ContactInfo } from '@/components/app/contact-info';
import { useDictionary } from '@/contexts/dictionary-context';
import { Github01Icon, Linkedin02Icon, Mail02Icon } from 'hugeicons-react';

export const ContactSection = () => {
  const {
    page: { CONTACT_PAGE },
  } = useDictionary();

  return (
    <section
      id="contact"
      className="flex min-h-[700px] w-full flex-col items-center justify-center pb-24 pt-12 dark:bg-black/10 md:min-h-[calc(100vh-68px)]"
    >
      <div className="container h-full space-y-12">
        <h2 className="text-center text-5xl font-light lg:text-7xl lg:font-extralight">
          {CONTACT_PAGE.TITLE}
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Lado Esquerdo - Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">{CONTACT_PAGE.SUBTITLE}</h3>
            <p className="text-muted-foreground">{CONTACT_PAGE.PARAGRAPH_1}</p>

            <div className="space-y-4">
              <ContactInfo
                icon={<Mail02Icon className="size-8" strokeWidth={0.8} />}
                label={CONTACT_PAGE.EMAIL}
                value="osk.alves@gmail.com"
                link="mailto:osk.alves@gmail.com"
              />
              <ContactInfo
                icon={<Linkedin02Icon className="size-8" strokeWidth={0.8} />}
                label={CONTACT_PAGE.LINKEDIN}
                value="linkedin.com/in/oskaralves"
                link="https://www.linkedin.com/in/oskaralves"
              />
              <ContactInfo
                icon={<Github01Icon className="size-8" strokeWidth={0.8} />}
                label={CONTACT_PAGE.GITHUB}
                value="github.com/oskaralves"
                link="https://github.com/oskaralves"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
