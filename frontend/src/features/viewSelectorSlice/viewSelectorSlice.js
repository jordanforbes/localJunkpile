import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "Splash",
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
      state.mode = "Admin";
    },
    selectSplash: (state) => {
      state.view = "Splash";
    },
  },
});

export const {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
  selectAdmin,
  selectSplash,
} = viewSelectorSlice.actions;
export default viewSelectorSlice.reducer;
