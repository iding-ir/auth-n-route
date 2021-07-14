import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Switch } from "react-router-dom";

import { AppRoutes } from "../AppRoutes";
import { routes, IRoute } from "../../configs/routes";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Content } from "../Content";

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

  // return (
  //   <div className={classes.App}>
  //     <Switch>
  //       {routes.map((route: IRoute) => {
  //         const { path, component, isPrivate, ...rest } = route;

  //         return (
  //           <AppRoutes
  //             path={path}
  //             Component={component}
  //             isPrivate={isPrivate}
  //             {...rest}
  //           />
  //         );
  //       })}
  //     </Switch>
  //   </div>
  // );

  return (
    <div>
      <Header />

      <Sidebar />

      <Content />
    </div>
  );
};
