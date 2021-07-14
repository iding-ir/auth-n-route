import { THEME_CHANGE } from "../constants/redux";

export type payload = "light" | "dark" | undefined;

export interface IActionTheme {
  type: string;
  payload: payload;
}

export const changeTheme = (payload: payload): IActionTheme => ({
  type: THEME_CHANGE,
  payload,
});
