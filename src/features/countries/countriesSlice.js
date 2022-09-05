import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: {},
    loading: true,
  },
  reducers: {
    getCountry: (state, action) => {},
  },
});

export const { getCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
