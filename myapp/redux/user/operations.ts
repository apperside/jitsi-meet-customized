import { login, LoginApiResponse } from "@api";
import { AsyncStorageHelper } from "@utils/AsyncStorageHelper";
import { AppDispatch, AppState, AppThunk } from "..";
import { showLoading } from "../loading";
import { userActions } from "./actions";


export function checkLoginStatusOperation() {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    const { isAnonymous, spotifyToken, userToken } = await AsyncStorageHelper.multiGet("isAnonymous", "spotifyToken", "userToken");
    console.log("{ isAnonymous, spotifyToken, userToken }", { isAnonymous, spotifyToken, userToken });
    !!userToken && !!spotifyToken && dispatch(userActions.loggedInAction(userToken));
    isAnonymous == "true" && dispatch(userActions.anonymousAccessAction());
    return (!!userToken || isAnonymous == "true");
  };
}

export type LoginResponse = {
  loginAuthData?: LoginApiResponse;
}

export function loginOperation(): AppThunk<Promise<LoginResponse>> {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    dispatch(showLoading(true));
    const loginAuthData = await login();
    await AsyncStorageHelper.setItem("userToken", loginAuthData.token);
    dispatch(userActions.loggedInAction(loginAuthData.token));
    return { loginAuthData };
  };
}

export function anonymousLoginOperation() {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    dispatch(showLoading(false));
    await AsyncStorageHelper.setItem("isAnonymous", "true");
    dispatch(userActions.anonymousAccessAction());
    return true;
  };
}

export function logoutOperation() {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    await AsyncStorageHelper.multiRemove("isAnonymous", "spotifyToken", "userToken");
    dispatch(userActions.loggedOutAction());
  };
}
