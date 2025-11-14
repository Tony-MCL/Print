export type Locale = "no" | "en";

export type I18nApi = {
  t: (key: string) => string;
  locale: Locale;
};

/**
 * Midlertidig, enkel i18n-implementasjon.
 * Kan byttes ut med fullverdig løsning senere.
 */
export function useI18n(locale: Locale = "no"): I18nApi {
  const dictionaries: Record<Locale, Record<string, string>> = {
    no: {
      "print.button": "Skriv ut / lagre som PDF"
    },
    en: {
      "print.button": "Print / save as PDF"
    }
  };

  const dict = dictionaries[locale] ?? dictionaries.no;

  return {
    locale,
    t: (key: string) => dict[key] ?? key
  };
}
