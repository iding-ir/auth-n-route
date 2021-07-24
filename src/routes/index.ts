import { ReactNode } from "react";

import { routes } from "./routes";

export interface IRoute {
  key: string;
  showPrivate: boolean;
  showPublic: boolean;
  showInSidebar: boolean;
  exact?: boolean;
  path?: string;
  label?: string;
  icon?: JSX.Element;
  component?: ReactNode;
  action?: () => void;
  custom?: JSX.Element;
}

export interface IRouteGroup extends IRoute {
  items: IRoutes;
}

export type IRoutes = (IRoute | IRouteGroup)[];

export const iRoute: IRoute | IRouteGroup = routes[0];

export const flatRoutes = (routes: IRoutes) => {
  let result: IRoute[] = [];

  routes.forEach((route) => {
    result =
      "items" in route
        ? [...result, ...flatRoutes(route.items)]
        : [...result, route];
  });

  return result as IRoutes;
};

export const getRoute = (path: string) => {
  return flatRoutes(routes).find((route) => {
    return route.path === path;
  }) as IRoute | IRouteGroup;
};
