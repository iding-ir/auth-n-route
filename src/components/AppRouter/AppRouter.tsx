import React from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
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
    return Object.values(routes).map((route: IRoute | IRouteGroup) => (
      <Route
        key={route.key}
        exact
        path={route.path}
        render={(props) => {
          if (route.isPrivate && !isLoggedIn) {
            return <Redirect to={{ pathname: "/login" }} />;
          } else {
            return pageRouteRenderer;
          }
        }}
      />
    ));
  };

  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>

      {props.children}
    </Router>
  );
};
