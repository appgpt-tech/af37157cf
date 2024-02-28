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
      fields: { userName: "User Name", email: "Email", id: "id" },
    },
    Cards: {
      name: "Cards",
      fields: {
        cardName: "Card Name",
        serial: "Serial",
        type: "Type",
        rarity: "Rarity",
        condition: "Condition",
        imageUrl: "Image URL",
        set: "Set",
        id: "id",
      },
    },
    Sets: {
      name: "Sets",
      fields: {
        setName: "Set Name",
        releaseDate: "Release Date",
        totalCards: "Total Cards",
        id: "id",
      },
    },
    Inventory: {
      name: "Inventory",
      fields: { user: "User", card: "Card", dateAdded: "Date Added", id: "id" },
    },
    Wishlist: {
      name: "Wishlist",
      fields: {
        user: "User",
        card: "Card",
        dateInserted: "Date Inserted",
        id: "id",
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: "Utilisateurs",
      fields: { userName: "Nom d'utilisateur", email: "Email", id: "id" },
    },
    Cards: {
      name: "Cartes",
      fields: {
        cardName: "Nom de la Carte",
        serial: "Série",
        type: "Type",
        rarity: "Rareté",
        condition: "Condition",
        imageUrl: "URL de l'image",
        set: "Ensemble",
        id: "id",
      },
    },
    Sets: {
      name: "Ensembles",
      fields: {
        setName: "Nom de l'Ensemble",
        releaseDate: "Date de sortie",
        totalCards: "Total de Cartes",
        id: "id",
      },
    },
    Inventory: {
      name: "Inventaire",
      fields: {
        user: "Utilisateur",
        card: "Carte",
        dateAdded: "Date Ajoutée",
        id: "id",
      },
    },
    Wishlist: {
      name: "Liste de souhaits",
      fields: {
        user: "Utilisateur",
        card: "Carte",
        dateInserted: "Date Insérée",
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
