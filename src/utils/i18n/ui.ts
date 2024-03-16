// список підтриуємих мов
export const languages = {
  uk: "Ukrainian",
  en: "English",
  ru: "Russian",
};

// мова за замовчуванням
export const defaultLang = "uk";

// створювати чи ні папку для дефолтної мови
export const showDefaultLang = false;

//переклади для навігації
export const ui = {
  uk: {
    "nav.home": "Головна",
    "nav.portfolio": "Портфоліо",
    "nav.blog": "Блог",
  },
  en: {
    "nav.home": "Home",
    "nav.portfolio": "Cases",
    "nav.blog": "Blog",
  },
  ru: {
    "nav.home": "Главная",
    "nav.portfolio": "Портфолио",
    "nav.blog": "Блог",
  },
} as const;
