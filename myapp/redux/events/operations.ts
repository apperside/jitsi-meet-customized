import { AppDispatch, AppState } from "..";
import { showLoading } from "../loading";
import api from "@api";
import { eventsActions } from "./actions";


export function getEventsOperation() {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    dispatch(showLoading(true));
    const events = await api.getEvents();
    dispatch(eventsActions.availableEventsUpdatedAction(events.result));
  };
}


