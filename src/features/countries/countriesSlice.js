import { createSlice } from "@reduxjs/toolkit";
import countryService from "../../services/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
    search: "",
    favourites: [],
  },
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
    addFavourite(state, action) {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(!action.payload);
    },
  },
});

export const initCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountries, isLoading, search, addFavourite, removeFavourite } =
  countriesSlice.actions;

export default countriesSlice.reducer;
