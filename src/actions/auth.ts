import { AUTH_LOGIN, AUTH_LOGOUT, PAGE_SET } from "../constants/redux";
import * as URLS from "../constants/urls";
import auth from "../apis/auth";
import { getRoute } from "../routes";

export interface IAction {
  type: string;
  payload?: {
    username: string;
    email: string;
    name: string;
    token: string;
  };
}

export const login = (username: string, password: string): any => {
  const homeRoute = getRoute(URLS.HOME);

  return async (dispatch: any, getState: any) => {
    const response = await auth.get("/login.json");

    if (response.data.success) {
      dispatch({ type: AUTH_LOGIN, payload: response.data.data });
      dispatch({ type: PAGE_SET, payload: { route: homeRoute } });
    }
  };
};

export const logout = (username: string | null): any => {
  const loginRoute = getRoute(URLS.LOGIN);

  return async (dispatch: any, getState: any) => {
    const response = await auth.get("/logout.json");

    if (response.data.success) {
      dispatch({ type: AUTH_LOGOUT });
      dispatch({ type: PAGE_SET, payload: { route: loginRoute } });
    }
  };
};
