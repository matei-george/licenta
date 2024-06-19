import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./features/auth/authSlice";
import favouriteSlice from "./features/favourites/favouriteSlice";
import { getFavoritesFromLocalStorage } from "../Utils/localStorage";
import cartSlice from "./features/cart/cartSlice";
import shopSlice from "./features/shop/shopSlice";
const initialFavourites = getFavoritesFromLocalStorage() || [];

const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authSlice,
      favorites: favouriteSlice,
      cart: cartSlice,
      shop: shopSlice,
   },

   preloadedState: {
      favorites: initialFavourites,
   },

   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
   devTools: true,
});

setupListeners(store.dispatch);
export default store;
