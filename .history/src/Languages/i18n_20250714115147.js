import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import AZ from './AZ/AZ.json';
import EN from './EN/EN.json';
import RU from './RU/RU.json';

const resources = {
  az: {
    translation: AZ,
  },
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
    
    resources,
    fallbackLng: 'az',
    supportedLngs: ['az', 'en', 'ru'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    lng: 'az',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
