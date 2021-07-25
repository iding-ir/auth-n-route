import { IRoute, IRouteGroup, IRoutes, getRoute } from "../../routes";
import { routes } from "../../routes/routes";
import * as URLS from "../../constants/urls";

export const useBreadcrumbs = (page: IRoute | IRouteGroup) => {
  const lookInto = (routes: IRoutes, prev: IRoutes) => {
    let result: IRoutes = [];

    for (let index in routes) {
      const route = routes[index];

      if (route.key === page.key) {
        result = [...result, ...prev, route];

        break;
      } else if ("items" in route) {
        result = [...result, ...lookInto(route.items, [...prev, route])];
      }
    }

    return result;
  };

  let breadcrumbs = lookInto(routes, []);

  const homeRoute = getRoute(URLS.HOME);

  if (page.key !== homeRoute.key) {
    breadcrumbs = [homeRoute, ...breadcrumbs];
  }

  return { breadcrumbs };
};
