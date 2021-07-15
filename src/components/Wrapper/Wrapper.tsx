import React, { ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { AppRouter } from "../AppRouter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      "*": {
        scrollbarColor: `${theme.palette.primary.dark} ${theme.palette.grey[600]}`,
        scrollbarWidth: "thin",
      },

      "* ::-webkit-scrollbar": {
        width: theme.spacing(1),
      },

      "* ::-webkit-scrollbar-track": {
        background: theme.palette.grey[600],
      },

      "* ::-webkit-scrollbar-thumb": {
        borderRadius: theme.spacing(1),
        background: theme.palette.primary.dark,
        transition: "all ease 0.3s",
      },

      "* ::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.dark,
      },
    },
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
