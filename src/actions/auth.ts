import { LOGIN } from "../constants";
import auth from "../apis/auth";

export interface IAction {
  type: string;
  payload: {
    username: string;
    email: string;
    name: string;
  };
}

export const login = (username: string, password: string): any => {
  return async (dispatch: any, getState: any) => {
    console.log({ username, password });

    const response = await auth.get("/login.json");

    dispatch({ type: LOGIN, payload: response.data });
  };
};
