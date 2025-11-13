import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../feature/favoirteSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
