import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: {},
  },
  reducers: {},
});

export const {} = countriesSlice.actions;

export default countriesSlice.reducer;
