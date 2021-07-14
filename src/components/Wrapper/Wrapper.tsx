import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import useTheme from "../../themes";
import { AppRouter } from "../AppRouter";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

interface IProps {
  children: JSX.Element[];
}

export const Wrapper = (props: IProps) => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <AppRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />

          {props.children}
        </div>
      </ThemeProvider>
    </AppRouter>
  );
};
