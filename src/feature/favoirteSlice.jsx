import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearFavorites: () => [],
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;


