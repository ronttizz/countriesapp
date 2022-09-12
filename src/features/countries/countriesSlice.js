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
    getFavourites(state, action) {
      state.favourites = action.payload;
    },
    addFavourite(state, action) {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.name.common !== action.payload.name.common
      );
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

export const initFavourites = () => {
  return async (dispatch) => {
    const favourites = localStorage.getItem("favourites");
    dispatch(getFavourites(favourites));
  };
};

export const updateFavourites = (state) => {
  return async () => {
    localStorage.setItem("favourites", state.favourites);
  };
};

export const {
  getCountries,
  isLoading,
  search,
  addFavourite,
  removeFavourite,
  getFavourites,
} = countriesSlice.actions;

export default countriesSlice.reducer;
