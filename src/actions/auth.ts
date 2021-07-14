import { LOGIN, LOGOUT, PAGE_SET } from "../constants";
import auth from "../apis/auth";
import * as URLS from "../constants";
import { routes, IRoute } from "../configs/routes";

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
  const homeRoute = routes.filter(
    (route: IRoute) => route.path === URLS.URL_HOME
  )[0];

  return async (dispatch: any, getState: any) => {
    const response = await auth.get("/login.json");

    if (response.data.success) {
      dispatch({ type: PAGE_SET, payload: homeRoute });
      dispatch({ type: LOGIN, payload: response.data.data });
    }
  };
};

export const logout = (username: string | null): any => {
  const loginRoute = routes.filter(
    (route: IRoute) => route.path === URLS.URL_LOGIN
  )[0];

  return async (dispatch: any, getState: any) => {
    const response = await auth.get("/logout.json");

    if (response.data.success) {
      dispatch({ type: PAGE_SET, payload: loginRoute });
      dispatch({ type: LOGOUT });
    }
  };
};
