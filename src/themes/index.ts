import { createTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import { IState } from "../reducers";
import { primary, secondary } from "./colors";

const useTheme = () => {
  const stateTheme = useSelector((state: IState) => state.theme);

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

  return { theme };
};

export default useTheme;
