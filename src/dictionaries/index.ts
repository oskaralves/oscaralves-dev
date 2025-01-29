// pt-BR
import experience_ptBR from './pt-BR/experience.json';
import feedback_ptBR from './pt-BR/feedback.json';
import field_ptBR from './pt-BR/field.json';
import general_ptBR from './pt-BR/general.json';
import metadata_ptBR from './pt-BR/metadata.json';
import page_ptBR from './pt-BR/page.json';
import segment_ptBR from './pt-BR/segment.json';
import validation_ptBR from './pt-BR/validation.json';

// en-US
import { Locale } from '@/types/locale';
import experience_enUS from './en-US/experience.json';
import feedback_enUS from './en-US/feedback.json';
import field_enUS from './en-US/field.json';
import general_enUS from './en-US/general.json';
import metadata_enUS from './en-US/metadata.json';
import page_enUS from './en-US/page.json';
import segment_enUS from './en-US/segment.json';
import validation_enUS from './en-US/validation.json';

type GeneralType = typeof general_ptBR;
type FieldType = typeof field_ptBR;
type ValidationType = typeof validation_ptBR;
type FeedbackType = typeof feedback_ptBR;
type PageType = typeof page_ptBR;
type MetadataType = typeof metadata_ptBR;
type SegmentType = typeof segment_ptBR;
type ExperienceType = typeof experience_ptBR;

export type DictionaryType = {
  general: GeneralType;
  field: FieldType;
  validation: ValidationType;
  feedback: FeedbackType;
  page: PageType;
  metadata: MetadataType;
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
    metadata: metadata_ptBR,
    segment: segment_ptBR,
    experience: experience_ptBR,
  },
  'en-US': {
    page: page_enUS,
    general: general_enUS,
    field: field_enUS,
    validation: validation_enUS,
    feedback: feedback_enUS,
    metadata: metadata_enUS,
    segment: segment_enUS,
    experience: experience_enUS,
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
