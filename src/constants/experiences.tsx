import { getDictionary } from '@/dictionaries';
import { Experience } from '@/types/experience';
import { Locale } from '@/types/locale';
import { Fragment } from 'react';

export const getExperiences = (locale: Locale = 'pt-BR'): Experience[] => {
  const {
    MERCADO_DIFERENTE,
    ZESTT,
    NEURALTRONIC,
    EFABRIKA,
    BITBEER,
    EZTECH_PMO,
    EZTECH_SENIOR,
    EZTECH_PLENO,
    FATOR_CRIATIVO,
    IVE_STUDIO,
    SEVEN_MEDIA,
    SEVEN_INTERNSHIP,
  } = getDictionary(locale, 'experience');

  const formatDescription = (descriptions: string[]) => {
    return descriptions.map((desc, index) => (
      <Fragment key={index}>
        {desc}
        {index < descriptions.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </Fragment>
    ));
  };

  return [
    {
      company: MERCADO_DIFERENTE.COMPANY,
      role: MERCADO_DIFERENTE.ROLE,
      startDate: MERCADO_DIFERENTE.START_DATE,
      endDate: MERCADO_DIFERENTE.END_DATE,
      logo: '/images/logos/mercado-diferente.jpg',
      description: formatDescription(MERCADO_DIFERENTE.DESCRIPTION),
    },
    {
      company: ZESTT.COMPANY,
      role: ZESTT.ROLE,
      startDate: ZESTT.START_DATE,
      endDate: ZESTT.END_DATE,
      logo: '/images/logos/zestt.png',
      description: formatDescription(ZESTT.DESCRIPTION),
    },
    {
      company: NEURALTRONIC.COMPANY,
      role: NEURALTRONIC.ROLE,
      startDate: NEURALTRONIC.START_DATE,
      endDate: NEURALTRONIC.END_DATE,
      logo: '/images/logos/neuraltronic.png',
      description: formatDescription(NEURALTRONIC.DESCRIPTION),
    },
    {
      company: EFABRIKA.COMPANY,
      role: EFABRIKA.ROLE,
      startDate: EFABRIKA.START_DATE,
      endDate: EFABRIKA.END_DATE,
      logo: '/images/logos/efabrika.png',
      description: formatDescription(EFABRIKA.DESCRIPTION),
    },
    {
      company: BITBEER.COMPANY,
      role: BITBEER.ROLE,
      startDate: BITBEER.START_DATE,
      endDate: BITBEER.END_DATE,
      logo: '/images/logos/bitbeer.png',
      description: formatDescription(BITBEER.DESCRIPTION),
    },
    {
      company: EZTECH_PMO.COMPANY,
      role: EZTECH_PMO.ROLE,
      startDate: EZTECH_PMO.START_DATE,
      endDate: EZTECH_PMO.END_DATE,
      logo: '/images/logos/eztech.png',
      description: formatDescription(EZTECH_PMO.DESCRIPTION),
    },
    {
      company: EZTECH_SENIOR.COMPANY,
      role: EZTECH_SENIOR.ROLE,
      startDate: EZTECH_SENIOR.START_DATE,
      endDate: EZTECH_SENIOR.END_DATE,
      logo: '/images/logos/eztech.png',
      description: formatDescription(EZTECH_SENIOR.DESCRIPTION),
    },
    {
      company: EZTECH_PLENO.COMPANY,
      role: EZTECH_PLENO.ROLE,
      startDate: EZTECH_PLENO.START_DATE,
      endDate: EZTECH_PLENO.END_DATE,
      logo: '/images/logos/eztech.png',
      description: formatDescription(EZTECH_PLENO.DESCRIPTION),
    },
    {
      company: FATOR_CRIATIVO.COMPANY,
      role: FATOR_CRIATIVO.ROLE,
      startDate: FATOR_CRIATIVO.START_DATE,
      endDate: FATOR_CRIATIVO.END_DATE,
      logo: '/images/logos/fator-criativo.png',
      description: formatDescription(FATOR_CRIATIVO.DESCRIPTION),
    },
    {
      company: IVE_STUDIO.COMPANY,
      role: IVE_STUDIO.ROLE,
      startDate: IVE_STUDIO.START_DATE,
      endDate: IVE_STUDIO.END_DATE,
      logo: '/images/logos/ive-studio.png',
      description: formatDescription(IVE_STUDIO.DESCRIPTION),
    },
    {
      company: SEVEN_MEDIA.COMPANY,
      role: SEVEN_MEDIA.ROLE,
      startDate: SEVEN_MEDIA.START_DATE,
      endDate: SEVEN_MEDIA.END_DATE,
      logo: '/images/logos/seven-computacao-grafica.png',
      description: formatDescription(SEVEN_MEDIA.DESCRIPTION),
    },
    {
      company: SEVEN_INTERNSHIP.COMPANY,
      role: SEVEN_INTERNSHIP.ROLE,
      startDate: SEVEN_INTERNSHIP.START_DATE,
      endDate: SEVEN_INTERNSHIP.END_DATE,
      logo: '/images/logos/seven-computacao-grafica.png',
      description: formatDescription(SEVEN_INTERNSHIP.DESCRIPTION),
    },
  ];
};
