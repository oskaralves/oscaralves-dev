import { Locale } from '@/types/locale';

// pt-BR
import experience_ptBR from './pt-BR/experience.json';
import feedback_ptBR from './pt-BR/feedback.json';
import field_ptBR from './pt-BR/field.json';
import general_ptBR from './pt-BR/general.json';
import page_ptBR from './pt-BR/page.json';
import segment_ptBR from './pt-BR/segment.json';
import validation_ptBR from './pt-BR/validation.json';

// en-US
import experience_enUS from './en-US/experience.json';
import feedback_enUS from './en-US/feedback.json';
import field_enUS from './en-US/field.json';
import general_enUS from './en-US/general.json';
import page_enUS from './en-US/page.json';
import segment_enUS from './en-US/segment.json';
import validation_enUS from './en-US/validation.json';

// es-ES
import experience_esES from './es-ES/experience.json';
import feedback_esES from './es-ES/feedback.json';
import field_esES from './es-ES/field.json';
import general_esES from './es-ES/general.json';
import page_esES from './es-ES/page.json';
import segment_esES from './es-ES/segment.json';
import validation_esES from './es-ES/validation.json';

type GeneralType = typeof general_ptBR;
type FieldType = typeof field_ptBR;
type ValidationType = typeof validation_ptBR;
type FeedbackType = typeof feedback_ptBR;
type PageType = typeof page_ptBR;
type SegmentType = typeof segment_ptBR;
type ExperienceType = typeof experience_ptBR;

export type DictionaryType = {
  general: GeneralType;
  field: FieldType;
  validation: ValidationType;
  feedback: FeedbackType;
  page: PageType;
  segment: SegmentType;
  experience: ExperienceType;
};

export const dictionaries: Record<Locale, DictionaryType> = {
  'pt-BR': {
    page: page_ptBR,
    general: general_ptBR,
    field: field_ptBR,
    validation: validation_ptBR,
    feedback: feedback_ptBR,
    segment: segment_ptBR,
    experience: experience_ptBR,
  },
  'en-US': {
    page: page_enUS,
    general: general_enUS,
    field: field_enUS,
    validation: validation_enUS,
    feedback: feedback_enUS,
    segment: segment_enUS,
    experience: experience_enUS,
  },
  'es-ES': {
    page: page_esES,
    general: general_esES,
    field: field_esES,
    validation: validation_esES,
    feedback: feedback_esES,
    segment: segment_esES,
    experience: experience_esES,
  },
};

export function getDictionary<K extends keyof DictionaryType | undefined>(
  locale: Locale,
  key?: K
): K extends keyof DictionaryType ? DictionaryType[K] : DictionaryType {
  const dictionary = dictionaries[locale] || dictionaries['pt-BR'];

  if (key) {
    return dictionary[key] as K extends keyof DictionaryType
      ? DictionaryType[K]
      : never;
  }

  return dictionary as K extends keyof DictionaryType ? never : DictionaryType;
}
