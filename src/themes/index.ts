import { createTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../reducers";
import {
  DARK_THEME_PRIMARY_COLOR,
  DARK_THEME_SECONDARY_COLOR,
  LIGHT_THEME_PRIMARY_COLOR,
  LIGHT_THEME_SECONDARY_COLOR,
  grey,
} from "./colors";
import { changeTheme } from "../actions/theme";

export const useTheme = () => {
  const dispatch = useDispatch();

  const stateTheme = useSelector((state: IState) => state.theme.current);

  const toggleTheme = () => {
    const newTheme = stateTheme === "light" ? "dark" : "light";

    dispatch(changeTheme(newTheme));
  };

  const theme = createTheme({
    palette: {
      type: stateTheme,
      primary: {
        light:
          stateTheme === "dark"
            ? DARK_THEME_PRIMARY_COLOR[400]
            : LIGHT_THEME_PRIMARY_COLOR[400],
        main:
          stateTheme === "dark"
            ? DARK_THEME_PRIMARY_COLOR[600]
            : LIGHT_THEME_PRIMARY_COLOR[600],
        dark:
          stateTheme === "dark"
            ? DARK_THEME_PRIMARY_COLOR[800]
            : LIGHT_THEME_PRIMARY_COLOR[800],
        contrastText: stateTheme === "dark" ? grey[50] : grey[900],
      },
      secondary: {
        light:
          stateTheme === "dark"
            ? DARK_THEME_SECONDARY_COLOR[400]
            : LIGHT_THEME_SECONDARY_COLOR[400],
        main:
          stateTheme === "dark"
            ? DARK_THEME_SECONDARY_COLOR[600]
            : LIGHT_THEME_SECONDARY_COLOR[600],
        dark:
          stateTheme === "dark"
            ? DARK_THEME_SECONDARY_COLOR[800]
            : LIGHT_THEME_SECONDARY_COLOR[800],
        contrastText: stateTheme === "dark" ? grey[900] : grey[50],
      },
    },
  });

  return { theme, toggleTheme };
};
