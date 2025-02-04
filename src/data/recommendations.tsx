import { getDictionary } from '@/dictionaries';
import { Locale } from '@/types/locale';
import { Recommendation } from '@/types/recommendation';
import { Fragment } from 'react';

export const getRecommendations = (
  locale: Locale = 'pt-BR'
): Recommendation[] => {
  const {
    ISABELLE_DAVID,
    GUILHERME_LAGES,
    JACKSON_PIRES,
    ROMULO_GOMES,
    JOAO_VITOR,
  } = getDictionary(locale, 'recommendation');

  const formatText = (descriptions: string[]) => {
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
      avatar: '/images/avatars/isabelle-david.png',
      role: ISABELLE_DAVID.ROLE,
      date: ISABELLE_DAVID.DATE,
      name: ISABELLE_DAVID.NAME,
      text: formatText(ISABELLE_DAVID.TEXT),
      linkedinUrl: ISABELLE_DAVID.LINKEDIN,
      isVisible: true,
    },
    {
      avatar: '/images/avatars/guilherme-lages.png',
      role: GUILHERME_LAGES.ROLE,
      date: GUILHERME_LAGES.DATE,
      name: GUILHERME_LAGES.NAME,
      text: formatText(GUILHERME_LAGES.TEXT),
      linkedinUrl: GUILHERME_LAGES.LINKEDIN,
      isVisible: true,
    },
    {
      avatar: '/images/avatars/jackson-pires.png',
      role: JACKSON_PIRES.ROLE,
      date: JACKSON_PIRES.DATE,
      name: JACKSON_PIRES.NAME,
      text: formatText(JACKSON_PIRES.TEXT),
      linkedinUrl: JACKSON_PIRES.LINKEDIN,
      isVisible: true,
    },
    {
      avatar: '/images/avatars/romulo-gomes.png',
      role: ROMULO_GOMES.ROLE,
      date: ROMULO_GOMES.DATE,
      name: ROMULO_GOMES.NAME,
      text: formatText(ROMULO_GOMES.TEXT),
      linkedinUrl: ROMULO_GOMES.LINKEDIN,
      isVisible: true,
    },
    {
      avatar: '/images/avatars/tkovs.png',
      role: JOAO_VITOR.ROLE,
      date: JOAO_VITOR.DATE,
      name: JOAO_VITOR.NAME,
      text: formatText(JOAO_VITOR.TEXT),
      linkedinUrl: JOAO_VITOR.LINKEDIN,
      isVisible: true,
    },
  ].reverse();
};
