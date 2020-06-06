import { createSelector } from "reselect";
import { AppState } from "..";

const loadingSlice = (state: AppState) => state.loading;

export const isLoadingSelector = createSelector(
  loadingSlice,
  (slice) => slice.isLoading
);
