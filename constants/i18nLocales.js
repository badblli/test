import en from "../static/assets/lang/en";
import tr from "../static/assets/lang/tr";
import de from "../static/assets/lang/de";
import uk from "../static/assets/lang/uk";
import ru from "../static/assets/lang/ru";

// default language
const defaultLocale = "tr";

// List of available language
const locales = [
  {
    code: "tr",
    iso: "tr-TR",
    name: "Türkçe",
    isCatchallLocale: true,
  },
  {
    code: "en",
    iso: "en-US",
    name: "English",
    // isCatchallLocale: true
  },

  {
    code: "de",
    iso: "de-DE",
    name: "Deutsch",
    // isCatchallLocale: true
  },
  {
    code: "uk",
    iso: "ua-UA",
    name: "українська",
    // isCatchallLocale: true
  },
  {
    code: "ru",
    iso: "ru-RU",
    name: "Русский",
    // isCatchallLocale: true
  },
];

// List of available message languages
const i18nLocales = {
  fallbackLocale: "tr",
  messages: { en, tr, de, uk, ru },
};

export { defaultLocale, locales, i18nLocales };
