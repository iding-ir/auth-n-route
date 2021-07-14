import React from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { routes, IRoutes, IRoute, IRouteGroup } from "../../configs/routes";
import { useAuth } from "../../hooks/useAuth";
import { setPage } from "../../actions/page";

interface IPropsAppRouter {
  children: JSX.Element;
}

export const AppRouter = (props: IPropsAppRouter) => {
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const { isLoggedIn } = auth;

  const searchRoutes = (routes: IRoutes, url: string) => {
    let result: any = false;

    routes.forEach((route: IRoute | IRouteGroup) => {
      if (route.path === url) {
        result = route;
      }

      if ("items" in route && !result) {
        result = searchRoutes(route.items, url);
      }
    });

    return result;
  };

  const pageRouteRenderer = ({ match }: RouteComponentProps) => {
    const { url } = match;
    const route = searchRoutes(routes, url) || routes[0];

    dispatch(setPage(route));

    return null;
  };

  const renderRoutes = () => {
    return Object.values(routes).map((route: IRoute | IRouteGroup) => {
      const { key, path, isPrivate, isPublic } = route;

      return (
        <Route
          key={key}
          exact
          path={path}
          render={(props) => {
            if (isPrivate && !isLoggedIn && !isPublic) {
              return <Redirect to={{ pathname: "/login" }} />;
            } else if ((isPrivate && isLoggedIn) || (isPublic && !isLoggedIn)) {
              return pageRouteRenderer;
            } else {
              return null;
            }
          }}
        />
      );
    });
  };

  return (
    <HashRouter>
      <Switch>{renderRoutes()}</Switch>

      {props.children}
    </HashRouter>
  );
};
