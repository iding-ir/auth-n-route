import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Login } from "../Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      width: "100%",
      height: "100%",
    },
  })
);

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Login></Login>
    </div>
  );
};
