import { THEME_CHANGE } from "../constants/redux";

export type ITheme = "light" | "dark" | undefined;

export interface IAction {
  type: string;
  payload: {
    theme: ITheme;
  };
}

export const changeTheme = (theme: ITheme): IAction => ({
  type: THEME_CHANGE,
  payload: { theme },
});
