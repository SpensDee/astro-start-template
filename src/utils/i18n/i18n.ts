import { ui, defaultLang, showDefaultLang, languages } from "./ui";

// визначення мови сторінки на основі поточної URL-адреси
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// отримання перекладу для навігації
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// шляхи на базі мови
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function pathAfterLanguage(pathname: URL) {
  const langKeys = Object.keys(languages);
  const segments = pathname.pathname.split("/");
  const langIndex = segments.findIndex(segment => langKeys.includes(segment));
  return langIndex !== -1 ? segments.slice(langIndex + 1).join('/') : pathname.pathname;
}

