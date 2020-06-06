import { createSelector } from "reselect";
import { AppState } from "..";

const loginSlice = (state: AppState) => state.user;

export const tokenSelector = createSelector(
  loginSlice,
  (slice) => slice.userToken
);

export const loginStateSelector = createSelector(
  loginSlice,
  (slice) => {
    return {
      token: slice.userToken,
      isAnonymous: slice.isAnonymousUser
    };
  }
);

