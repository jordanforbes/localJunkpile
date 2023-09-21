import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app_projects: [],
  artwork: [],
};

export const projectListSelectorSlice = createSlice({
  name: "projectListSelector",
  initialState,
  reducers: {
    populateList: (state, action) => {
      console.log(action);
      state.app_projects = action.payload.app_project;
      state.artwork = action.payload.artwork;
    },
    // getListObj: (state) => {
    //   return [state.app_projects, state.artwork];
    // },
  },
});

export const { populateList } = projectListSelectorSlice.actions;

export default projectListSelectorSlice.reducer;
