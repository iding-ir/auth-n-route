import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

interface Props {
  path: string | undefined;
  Component: any;
  isPrivate: boolean;
}

export const AppRoutes = (props: Props) => {
  const { path, Component, isPrivate, ...rest } = props;

  const { auth } = useAuth();

  const { isLoggedIn } = auth;

  return (
    <Route
      path={path}
      render={(props) => {
        if (isPrivate && !isLoggedIn) {
          return <Redirect to={{ pathname: "/login" }} />;
        } else {
          return <Component {...props} />;
        }
      }}
      {...rest}
    />
  );
};

// import React from "react";
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   RouteComponentProps,
// } from "react-router-dom";

// import { routes, IRoutes, IRoute, IRouteGroup } from "../../configs/routes";
// import * as URLS from "../../constants/urls";

// interface IProps {
//   path: string | undefined;
//   Component: any;
//   isPrivate: boolean;
// }

// export const AppRoutes = (props: IProps) => {
//   const searchRoutes = (routes: IRoutes, url: string) => {
//     let result: any = false;

//     routes.forEach((route: IRoute | IRouteGroup) => {
//       if (route.path === url) {
//         result = route;
//       }

//       if ("items" in route && !result) {
//         result = searchRoutes(route.items, url);
//       }
//     });

//     return result;
//   };

//   const pageRouteRenderer = ({ match }: RouteComponentProps) => {
//     const { url } = match;
//     const route = searchRoutes(routes, url) || routes[0];

//     return null;
//   };

//   const renderRoutes = () => {
//     return Object.values(URLS).map((url: string) => (
//       <Route key={url} exact path={url} render={pageRouteRenderer} />
//     ));
//   };

//   return (
//     <Router>
//       <Switch>{renderRoutes()}</Switch>
//     </Router>
//   );
// };
