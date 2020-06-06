import { AppAction } from "..";

export type State = {
  isLoading?: boolean,
  loadingMessage?: string
}

export const initialState: State = { isLoading: false };

export function reducer(s: State = initialState, action: AppAction): State {
  switch (action.type) {
    case "SHOW_LOADING": {
      return {
        ...s,
        isLoading: action.payload.load,
        loadingMessage: action.payload.loadingMessage || ""
      };
    }
    default:
      return s;
  }
}
