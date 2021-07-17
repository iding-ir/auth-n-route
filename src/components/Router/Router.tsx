import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import {
  routes,
  IRoutes,
  IRoute,
  IRouteGroup,
  flatRoutes,
  getRoute,
} from "../../routes";
import { useAuth } from "../../hooks/useAuth";
import { setPage } from "../../actions/page";
import * as URLS from "../../constants/urls";

interface IProps {
  children: ReactNode;
}

export const Router = (props: IProps) => {
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

    const notFoundRoute = getRoute(URLS.URL_NOT_FOUND);

    result = result || notFoundRoute;

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
