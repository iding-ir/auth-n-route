import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { routes, IRoute, flatRoutes } from "../../routes";
import { useAuth } from "../../hooks/useAuth";
import { setPage } from "../../actions/page";
import * as URLS from "../../constants/urls";
import { useRouter } from "./useRouter";

interface IProps {
  children: ReactNode;
}

export const Router = (props: IProps) => {
  const { children } = props;

  const dispatch = useDispatch();
  const { searchRoutes } = useRouter();
  const { auth } = useAuth();

  const { isLoggedIn } = auth;

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
