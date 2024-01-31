// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"books":{"name":"Books","fields":{"title":"title","author":"author","genre":"genre","bookCover":"bookCover","id":"id"}},"authors":{"name":"Authors","fields":{"name":"name","books":"books","id":"id"}},"genres":{"name":"Genres","fields":{"category":"category","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    