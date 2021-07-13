import { LOGIN } from "../constants";
import { IAction } from "../actions/auth";

export interface IStateAuth {
  username: string | null;
  email: string | null;
  name: string | null;
}

const initialState = {
  username: null,
  email: null,
  name: null,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        username: action.payload.username,
        email: action.payload.email,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default reducer;
