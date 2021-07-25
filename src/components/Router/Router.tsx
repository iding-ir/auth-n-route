import React, { ReactNode } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { useRouter } from "./useRouter";
import { Template } from "../Template";
import { useRoutes } from "../../routes/useRoutes";
import { IRoute } from "../../routes/index.d";
import { useAuth } from "../../hooks/useAuth";
import * as URLS from "../../constants/urls";

interface IProps {
  children: ReactNode;
}

export const Router = (props: IProps) => {
  const { children } = props;

  const { searchRoutes } = useRouter();
  const { routes, getRoute, flatRoutes } = useRoutes();
  const { auth } = useAuth();

  const { isLoggedIn } = auth;

  const pageRouteRenderer = (props: RouteComponentProps) => {
    const { location } = props;
    const { pathname } = location;

    const route = searchRoutes(routes, pathname) || getRoute(URLS.NOT_FOUND);

    const { showPrivate, showPublic } = route;

    return showPrivate && !isLoggedIn && !showPublic ? (
      <Redirect to={{ pathname: URLS.LOGIN }} />
    ) : (
      <Template page={route} />
    );
  };

  const renderRoutes = () => {
    return flatRoutes(routes).map((route: IRoute) => {
      return (
        <Route
          key={route.key}
          exact={route.exact}
          path={route.path}
          render={(props) => pageRouteRenderer(props)}
        />
      );
    });
  };

  return (
    <HashRouter>
      <Switch>{renderRoutes()}</Switch>

      {children}
    </HashRouter>
  );
};
