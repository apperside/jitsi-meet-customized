import { action } from "typesafe-actions";
import { Event } from "@models/Event";

const loggedInAction = (userToken: string) => action("LOGGED_IN", { userToken });
const anonymousAccessAction = () => action("ANONYMOUS_ACCESS");
const loggedOutAction = () => action("LOGGED_OUT");

export type ActionTypes = | ReturnType<typeof loggedInAction>
  | ReturnType<typeof loggedOutAction>
  | ReturnType<typeof anonymousAccessAction>

export const userActions = {
  loggedInAction,
  anonymousAccessAction,
  loggedOutAction,
};