import * as events from "./getEvents";
import * as login from "./login";

export * from "./getEvents";
export * from "./login";

const api = {
  ...events,
  ...login,
};
export default api;
