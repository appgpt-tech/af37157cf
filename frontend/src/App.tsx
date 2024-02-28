// Source code generated by AppGPT (www.appgpt.tech)

// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import { customDataProvider } from "./dataProvider";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { usersList, usersCreate, usersEdit } from "./resources/users";
import { cardsList, cardsCreate, cardsEdit } from "./resources/cards";
import { setsList, setsCreate, setsEdit } from "./resources/sets";
import {
  inventoryList,
  inventoryCreate,
  inventoryEdit,
} from "./resources/inventory";
import {
  wishlistList,
  wishlistCreate,
  wishlistEdit,
} from "./resources/wishlist";
import usersIcon from "@mui/icons-material/Person";
import cardsIcon from "@mui/icons-material/CollectionsBookmark";
import setsIcon from "@mui/icons-material/Category";
import inventoryIcon from "@mui/icons-material/Inventory";
import wishlistIcon from "@mui/icons-material/Favorite";
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy",
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/af37157cf">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="users"
          options={{ label: "Users" }}
          list={usersList}
          create={usersCreate}
          edit={usersEdit}
          recordRepresentation="id"
          icon={usersIcon}
        />
        <Resource
          name="cards"
          options={{ label: "Cards" }}
          list={cardsList}
          create={cardsCreate}
          edit={cardsEdit}
          recordRepresentation="id"
          icon={cardsIcon}
        />
        <Resource
          name="sets"
          options={{ label: "Sets" }}
          list={setsList}
          create={setsCreate}
          edit={setsEdit}
          recordRepresentation="id"
          icon={setsIcon}
        />
        <Resource
          name="inventory"
          options={{ label: "Inventory" }}
          list={inventoryList}
          create={inventoryCreate}
          edit={inventoryEdit}
          recordRepresentation="user"
          icon={inventoryIcon}
        />
        <Resource
          name="wishlist"
          options={{ label: "Wishlist" }}
          list={wishlistList}
          create={wishlistCreate}
          edit={wishlistEdit}
          recordRepresentation="user"
          icon={wishlistIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
