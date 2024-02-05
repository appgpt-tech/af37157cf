// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"userId":"User Id","email":"Email","name":"Name","id":"id"}},"Cards":{"name":"Cards","fields":{"cardId":"Card Id","setid":"Set Id","name":"Name","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Utilisateurs","fields":{"userId":"Identifiant utilisateur","email":"Email","name":"Nom","id":"id"}},"Cards":{"name":"Cartes","fields":{"cardId":"Identifiant de carte","setid":"Identifiant de set","name":"Nom","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    