import { THEME_CHANGE } from "../constants/redux";
import { IActionTheme } from "../actions/theme";
import { payload } from "../actions/theme";

export type IStateTheme = payload;

const initialState: IStateTheme = "dark" as payload;

const reducer = (state = initialState, action: IActionTheme) => {
  switch (action.type) {
    case THEME_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
