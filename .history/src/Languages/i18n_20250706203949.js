import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AZ from './AZ/AZ.json';
import EN from './EN/EN.json';
import RU from './RU/RU.json';

const resources = {
  az: { translation: AZ },
  en: { translation: EN },
  ru: { translation: RU },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'az', // İlkin dil
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;