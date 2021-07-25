import { AUTH_LOGIN, AUTH_LOGOUT } from "../constants/redux";
import auth from "../apis/auth";

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
  return async (dispatch: any, getState: any) => {
    const response = await auth.get("/login.json");

    if (response.data.success) {
      dispatch({ type: AUTH_LOGIN, payload: response.data.data });
    }
  };
};

export const logout = (username: string | null): any => {
  return async (dispatch: any, getState: any) => {
    const response = await auth.get("/logout.json");

    if (response.data.success) {
      dispatch({ type: AUTH_LOGOUT });
    }
  };
};
