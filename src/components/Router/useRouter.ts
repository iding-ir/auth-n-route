import { IRoutes, IRoute, IRouteGroup, flatRoutes } from "../../routes";
import * as URLS from "../../constants/urls";

export const useRouter = () => {
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

    const notFoundRoute = flatRoutes(routes).find((route) => {
      return route.path === URLS.URL_NOT_FOUND;
    }) as IRoute | IRouteGroup;

    result = result || notFoundRoute;

    return result;
  };

  return { searchRoutes };
};
