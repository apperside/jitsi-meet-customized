import { createSelector } from "reselect";
import { AppState } from "..";

const eventsSlice = (state: AppState) => state.events;

export const eventsSelector = createSelector(
  eventsSlice,
  (slice) => slice.events
);
