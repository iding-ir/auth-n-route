import React, { ReactNode } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
  useRouteMatch,
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

  const { routes, flatRoutes } = useRoutes();

  const renderRoutes = () => {
    return flatRoutes(routes).map((route: IRoute) => {
      return (
        <Route key={route.key} exact={route.exact} path={route.path}>
          <Child />
        </Route>
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

const Child = () => {
  const { params } = useRouteMatch();
  const { pathname } = useLocation();
  const { searchRoutes } = useRouter();
  const { routes, getRoute } = useRoutes();
  const { auth } = useAuth();

  const { isLoggedIn } = auth;

  const route =
    searchRoutes(routes, pathname, params) || getRoute(URLS.NOT_FOUND);

  const { showPrivate, showPublic } = route;

  return showPrivate && !isLoggedIn && !showPublic ? (
    <Redirect to={{ pathname: URLS.LOGIN }} />
  ) : (
    <Template page={route} />
  );
};
