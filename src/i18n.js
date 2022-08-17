import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locale/ar/txn.json";
import en from "./locale/en/txn.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
