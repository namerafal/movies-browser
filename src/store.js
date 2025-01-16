import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./common/Pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
