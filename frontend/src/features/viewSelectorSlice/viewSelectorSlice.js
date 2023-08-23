import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "Art",
  mode: "List",
};

export const viewSelectorSlice = createSlice({
  name: "viewSelector",
  initialState,
  reducers: {
    selectArt: (state) => {
      state.view = "Art";
    },
    selectDetail: (state) => {
      state.mode = "Detail";
    },
    selectList: (state) => {
      state.mode = "List";
    },
    selectApp: (state) => {
      state.view = "App";
    },
    selectAdmin: (state) => {
      state.view = "Admin";
    },
  },
});

export const { selectArt, selectApp, selectList, selectDetail, selectAdmin } =
  viewSelectorSlice.actions;
export default viewSelectorSlice.reducer;
