import { createTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../reducers";
import { primary, secondary, grey } from "./colors";
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
        light: primary[400],
        main: primary[600],
        dark: primary[800],
        contrastText: stateTheme === "dark" ? grey[50] : grey[900],
      },
      secondary: {
        light: secondary[400],
        main: secondary[600],
        dark: secondary[800],
        contrastText: stateTheme === "dark" ? grey[900] : grey[50],
      },
    },
  });

  return { theme, toggleTheme };
};
