import { AppAction } from "..";
import { Event } from "../../models/Event";

export type State = {
  events: Event[]
}

export const initialState: State = { events: [] };

export function reducer(s: State = initialState, action: AppAction): State {
  switch (action.type) {
    case "AVAILABLE_EVENTS_UPDATED": {
      return {
        ...s,
        events: action.payload.events
      };
    }
    default:
      return s;
  }
}
