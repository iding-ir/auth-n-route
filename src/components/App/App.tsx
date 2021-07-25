import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

import { Wrapper } from "../Wrapper";
import { useTheme } from "../../themes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {},
  })
);

interface IProps {}

export const App = (props: IProps) => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
    </div>
  );
};
