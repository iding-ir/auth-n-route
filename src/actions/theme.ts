import { THEME_CHANGE } from "../constants/redux";

export type ITheme = "light" | "dark" | undefined;

export interface IActionTheme {
  type: string;
  payload: {
    theme: ITheme;
  };
}

export const changeTheme = (theme: ITheme): IActionTheme => ({
  type: THEME_CHANGE,
  payload: { theme },
});
