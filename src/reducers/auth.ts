import { AUTH_LOGIN, AUTH_LOGOUT } from "../constants/redux";
import { IAction } from "../actions/auth";

export interface IStateAuth {
  username: string | null;
  email: string | null;
  name: string | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState = {
  username: null,
  email: null,
  name: null,
  token: null,
  isLoggedIn: null,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        username: action.payload?.username,
        email: action.payload?.email,
        name: action.payload?.name,
        token: action.payload?.token,
        isLoggedIn: true,
      };
    case AUTH_LOGOUT:
      return {
        username: null,
        email: null,
        name: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
