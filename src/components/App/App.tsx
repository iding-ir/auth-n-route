import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Switch } from "react-router-dom";

import { AppRoutes } from "../AppRoutes";
import routes, { IRoute } from "../../configs/routes";

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
      <Switch>
        {routes.map((route: IRoute) => {
          return (
            <AppRoutes
              key={route.path}
              path={route.path}
              Component={route.component}
              isPrivate={route.isPrivate}
            />
          );
        })}
      </Switch>
    </div>
  );
};
