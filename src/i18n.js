import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
    },
  },
  ar: {
    translation: {
      "Welcome to React": "مرحبا بك في رياكت ",
      "hi users": "مرحبا بالمستخدمين",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import translationEN from './locales/en/translation.json';
// import translationES from './locales/es/translation.json';

// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   es: {
//     translation: translationES,
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
