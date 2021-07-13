import { LOGIN } from "../constants";
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
    case LOGIN:
      return {
        username: action.payload.username,
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
