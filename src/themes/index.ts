import { createTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../reducers";
import { primary, secondary } from "./colors";
import { changeTheme } from "../actions/theme";

export const useTheme = () => {
  const dispatch = useDispatch();

  const stateTheme = useSelector((state: IState) => state.theme);

  const toggleTheme = () => {
    const newTheme = stateTheme === "light" ? "dark" : "light";

    dispatch(changeTheme(newTheme));
  };

  const theme = createTheme({
    palette: {
      type: stateTheme,
      primary: {
        light: primary[200],
        main: primary[400],
        dark: primary[800],
        contrastText: stateTheme === "dark" ? "#ffffff" : "#000000",
      },
      secondary: {
        light: secondary[200],
        main: secondary[400],
        dark: secondary[800],
        contrastText: stateTheme === "dark" ? "#000000" : "#ffffff",
      },
    },
  });

  return { theme, toggleTheme };
};
