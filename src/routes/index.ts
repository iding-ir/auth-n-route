import { ReactNode } from "react";

import { routes } from "./routes";
import * as URLS from "../constants/urls";

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
  template?: () => JSX.Element;
  action?: () => void;
  custom?: JSX.Element;
}

export interface IRouteGroup extends IRoute {
  items: IRoutes;
}

export type IRoutes = (IRoute | IRouteGroup)[];

export const flatRoutes = (routes: IRoutes): IRoutes => {
  let result: IRoutes = [];

  routes.forEach((route) => {
    result =
      "items" in route
        ? [...result, ...flatRoutes(route.items)]
        : [...result, route];
  });

  return result;
};

export const getRoute = (path: string): IRoute | IRouteGroup => {
  const notFound = flatRoutes(routes).find((route) => {
    return route.path === URLS.NOT_FOUND;
  }) as IRoute;

  const result =
    flatRoutes(routes).find((route) => {
      return route.path === path;
    }) || notFound;

  return result;
};
