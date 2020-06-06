import { AppAction } from "..";

export type State = {
  userToken?: string,
  isAnonymousUser?: boolean,
}

export const initialState: State = {
};

export function reducer(s: State = initialState, action: AppAction): State {
  switch (action.type) {
    case "LOGGED_IN": {
      return {
        ...s,
        userToken: action.payload.userToken,
        isAnonymousUser: false
      };
    }
    case "LOGGED_OUT": {
      return initialState;
    }
    case "ANONYMOUS_ACCESS": {
      return {
        ...s,
        userToken: undefined,
        isAnonymousUser: true
      };
    }
    default:
      return s;
  }
}
