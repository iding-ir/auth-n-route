import { routes } from "./index";
import { IRoute, IRouteGroup, IRoutes } from "./index.d";
import * as URLS from "../constants/urls";

export const useRoutes = () => {
  const flatRoutes = (routes: IRoutes): IRoutes => {
    let result: IRoutes = [];

    routes.forEach((route) => {
      result =
        "items" in route
          ? [...result, ...flatRoutes(route.items)]
          : [...result, route];
    });

    return result;
  };

  const getRoute = (path: string): IRoute | IRouteGroup => {
    const notFound = flatRoutes(routes).find((route) => {
      return route.path === URLS.NOT_FOUND;
    }) as IRoute;

    const result =
      flatRoutes(routes).find((route) => {
        return route.path === path;
      }) || notFound;

    return result;
  };

  return { routes, flatRoutes, getRoute };
};
