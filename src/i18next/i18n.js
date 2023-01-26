import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

const resources = {
    eng: {
        translation: require ('./eng.json')
    },
    geo: {
        translation: require('./geo.json')
    }
};

i18n 
.use(initReactI18next)
.init({
    resources,
    lng: "geo",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;