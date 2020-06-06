import { combineReducers } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import * as loading from "./loading";
import * as user from "./user";
import * as events from "./events";

export type StatefulDataState = "loading" | "loaded" | "error" | "idle";
export type StatefulData<T> = {
  value?: T;
  state: StatefulDataState;
  message?: string;
};
const reducers = {
  loading: loading.reducer,
  user: user.reducer,
  events: events.reducer,
};

export type AppState = {
  loading: loading.State;
  user: user.State;
  events: events.State;
};
export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export type AppAction =
  | loading.ActionTypes
  | user.ActionTypes
  | events.ActionTypes

const combinedReducers = combineReducers<AppState>(reducers);

export const appInitialState: AppState = {
  loading: loading.initialState,
  user: user.initialState,
  events: events.initialState,

};
export default combinedReducers;

export type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
export type AppThunk<R> = ThunkAction<R, AppState, unknown, AppAction>;
export type Dispatch = AppDispatch;
