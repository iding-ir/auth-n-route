import { THEME_CHANGE } from "../constants/redux";
import { IActionTheme } from "../actions/theme";
import { ITheme } from "../actions/theme";

export type IStateTheme = ITheme;

const initialState: IStateTheme = "dark" as ITheme;

const reducer = (state = initialState, action: IActionTheme) => {
  switch (action.type) {
    case THEME_CHANGE:
      return action.payload.theme;
    default:
      return state;
  }
};

export default reducer;
