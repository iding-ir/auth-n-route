import { THEME_CHANGE } from "../constants/redux";
import { IAction, ITheme } from "../actions/theme";

export interface IState {
  current: ITheme;
}

const initialState: IState = {
  current: "dark",
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case THEME_CHANGE:
      return { ...state, current: action.payload.theme };
    default:
      return state;
  }
};

export default reducer;
