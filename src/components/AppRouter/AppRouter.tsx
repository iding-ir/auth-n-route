import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { routes, IRoutes, IRoute, IRouteGroup } from "../../routes";
import { useAuth } from "../../hooks/useAuth";
import { setPage } from "../../actions/page";
import * as URLS from "../../constants/urls";

interface IProps {
  children: ReactNode;
}

export const AppRouter = (props: IProps) => {
  const { children } = props;

  const dispatch = useDispatch();
  const { auth } = useAuth();

  const { isLoggedIn } = auth;

  const searchRoutes = (routes: IRoutes, pathname: string) => {
    let result: any = false;

    routes.forEach((route: IRoute | IRouteGroup) => {
      if (route.path === pathname) {
        result = route;
      }

      if ("items" in route && !result) {
        result = searchRoutes(route.items, pathname);
      }
    });

    result =
      result ||
      routes.find((route: IRoute | IRouteGroup) => {
        return route.path === URLS.URL_NOT_FOUND;
      });

    return result;
  };

  const pageRouteRenderer = (props: RouteComponentProps) => {
    const { location } = props;
    const { pathname } = location;

    const route = searchRoutes(routes, pathname);

    const { showPrivate, showPublic } = route;

    dispatch(setPage(route));

    return showPrivate && !isLoggedIn && !showPublic ? (
      <Redirect to={{ pathname: URLS.URL_LOGIN }} />
    ) : null;
  };

  const renderRoutes = () => {
    return Object.values(URLS).map((url: string) => {
      return (
        <Route
          key={url}
          exact
          path={url}
          render={(props) => pageRouteRenderer(props)}
        />
      );
    });
  };

  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>

      {children}
    </Router>
  );
};
