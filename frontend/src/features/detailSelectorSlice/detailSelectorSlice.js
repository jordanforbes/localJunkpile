import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: false,
  id: false,
  title: false,
  githubURL: false,
  projectURL: false,
  description: false,
  technologies: false,
  medium: false,
  type: false,
  images: [],
};

export const detailSelectorSlice = createSlice({
  name: "detailSelector",
  initialState,
  reducers: {
    reset: (state) => {
      state.selected = false;
      state.title = false;
      state.githubURL = false;
      state.projectURL = false;
      state.description = false;
      state.technologies = false;
      state.medium = false;
      state.type = false;
      state.images = [];
      state.id = false;
    },
    setArt: (state, action) => {
      state.selected = true;
      state.type = "art";
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.medium = action.payload.mediums;
      state.images = action.payload.images;
      state.id = action.payload.id;
    },
    setApp: (state, action) => {
      state.selected = true;
      state.type = "app";
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.githubURL = action.payload.githubURL
        ? action.payload.githubURL
        : false;
      state.projectURL = action.payload.projectURL
        ? action.payload.projectURL
        : false;
      state.technologies = action.payload.technologies;
      state.images = action.payload.images;
      state.id = action.payload.id;
    },
    getDetails: (state) => {
      return state;
    },
  },
});

export const { reset, setArt, setApp, getDetails } =
  detailSelectorSlice.actions;

export default detailSelectorSlice.reducer;
