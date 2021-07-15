import React, { ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { AppRouter } from "../AppRouter";
import { styles } from "../../themes/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...styles(theme),
    wrapper: {
      display: "flex",
      height: "100%",
    },
  })
);

interface IProps {
  children: ReactNode;
}

export const Wrapper = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppRouter>
        <CssBaseline />

        {props.children}
      </AppRouter>
    </div>
  );
};
