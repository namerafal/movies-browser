import { createSlice } from "@reduxjs/toolkit";
import { totalPages } from "./useTotalPages";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    resetPage: (state) => {
      state.currentPage = 1;
    },
    setCurrentPage: (state, { payload: pageNumber }) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        state.currentPage = pageNumber;
      }
    },
  },
});

export const { resetPage, setCurrentPage } = paginationSlice.actions;
const selectPaginationState = (state) => state.pagination;
export const selectCurrentPage = (state) =>
  selectPaginationState(state).currentPage;

export default paginationSlice.reducer;
