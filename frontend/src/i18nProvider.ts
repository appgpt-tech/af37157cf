// Source code generated by AppGPT (www.appgpt.tech)

// in i18nProvider.js
import { mergeTranslations } from "ra-core";
import polyglotI18nProvider from "ra-i18n-polyglot";
import enOriginal from "ra-language-english";
import frOriginal from "ra-language-french";

const enResources = {
  resources: {
    Users: {
      name: "Users",
      fields: { UserName: "user name", email: "email", id: "id" },
    },
    Cards: {
      name: "Cards",
      fields: {
        CardName: "card name",
        serial: "serial",
        type: "type",
        rarity: "rarity",
        condition: "condition",
        imageurl: "image url",
        set: "set",
        id: "id",
      },
    },
    Sets: {
      name: "Sets",
      fields: {
        SetName: "set name",
        ReleaseDate: "release date",
        TotalCards: "total cards",
        id: "id",
      },
    },
    Inventory: {
      name: "Inventory",
      fields: {
        user: "user",
        card: "card",
        RecordedDate: "recorded date",
        id: "id",
      },
    },
    Wishlist: {
      name: "Wishlist",
      fields: {
        user: "user",
        card: "card",
        InsertedDate: "inserted date",
        id: "id",
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: "Utilisateurs",
      fields: { UserName: "nom d'utilisateur", email: "email", id: "id" },
    },
    Cards: {
      name: "Cartes",
      fields: {
        CardName: "nom de la carte",
        serial: "série",
        type: "type",
        rarity: "rareté",
        condition: "condition",
        imageurl: "url de l'image",
        set: "ensemble",
        id: "id",
      },
    },
    Sets: {
      name: "Ensembles",
      fields: {
        SetName: "nom de l'ensemble",
        ReleaseDate: "date de sortie",
        TotalCards: "total des cartes",
        id: "id",
      },
    },
    Inventory: {
      name: "Inventaire",
      fields: {
        user: "utilisateur",
        card: "carte",
        RecordedDate: "date enregistrée",
        id: "id",
      },
    },
    Wishlist: {
      name: "Liste de souhaits",
      fields: {
        user: "utilisateur",
        card: "carte",
        InsertedDate: "date insérée",
        id: "id",
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "en", //default locale
  [
    { locale: "en", name: "English" },
    { locale: "fr", name: "Français" },
  ],
);
