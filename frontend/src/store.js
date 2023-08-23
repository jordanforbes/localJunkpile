import { configureStore } from "@reduxjs/toolkit";
import viewSelectorReducer from "./features/viewSelectorSlice/viewSelectorSlice";
import detailSelectorReducer from "./features/detailSelectorSlice/detailSelectorSlice";
import projectListSelectorReducer from "./features/projectListSelectorSlice/projectListSelectorSlice";

export default configureStore({
  reducer: {
    viewSelector: viewSelectorReducer,
    detailSelector: detailSelectorReducer,
    projectListSelector: projectListSelectorReducer,
  },
});
