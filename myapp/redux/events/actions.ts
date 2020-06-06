import { action } from "typesafe-actions";
import { Event } from "@models/Event";

const availableEventsUpdatedAction = (events: Event[]) => action("AVAILABLE_EVENTS_UPDATED", { events });

export type ActionTypes = | ReturnType<typeof availableEventsUpdatedAction>

export const eventsActions = {
  availableEventsUpdatedAction
};