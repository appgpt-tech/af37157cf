// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"userID":"User ID","email":"Email","name":"Name","id":"id"}},"Cards":{"name":"Cards","fields":{"cardID":"Card ID","setID":"Set ID","cardName":"Card Name","serial":"Serial","type":"Type","rarity":"Rarity","condition":"Condition","imageURL":"Image URL","id":"id"}},"Sets":{"name":"Sets","fields":{"setID":"Set ID","setName":"Set Name","releaseDate":"Release Date","totalCards":"Total Cards","id":"id"}},"Inventory":{"name":"Inventory","fields":{"userID":"User ID","cardID":"Card ID","recordedDate":"Recorded Date","id":"id"}},"Wishlist":{"name":"Wishlist","fields":{"userID":"User ID","cardID":"Card ID","insertedDate":"Inserted Date","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Utilisateurs","fields":{"userID":"ID utilisateur","email":"Email","name":"Nom","id":"id"}},"Cards":{"name":"Cartes","fields":{"cardID":"ID de la Carte","setID":"ID de l'Ensemble","cardName":"Nom de la Carte","serial":"Série","type":"Type","rarity":"Rareté","condition":"Condition","imageURL":"URL de l'image","id":"id"}},"Sets":{"name":"Ensembles","fields":{"setID":"ID de l'Ensemble","setName":"Nom de l'Ensemble","releaseDate":"Date de Sortie","totalCards":"Total des Cartes","id":"id"}},"Inventory":{"name":"Inventaire","fields":{"userID":"ID utilisateur","cardID":"ID de la Carte","recordedDate":"Date Enregistrée","id":"id"}},"Wishlist":{"name":"Liste de souhaits","fields":{"userID":"ID utilisateur","cardID":"ID de la Carte","insertedDate":"Date Insérée","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    