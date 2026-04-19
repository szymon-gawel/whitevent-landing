import { useLanguage } from '../context/LanguageContext';
import { t, tr as trFn, type Lang } from '../translations';

export function useTranslation() {
  const { lang } = useLanguage();
  return {
    t,
    tr: (key: { pl: string; en: string }) => trFn(key, lang as Lang),
    lang,
  };
}
