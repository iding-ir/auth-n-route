import { useRoutes } from "../../routes/useRoutes";
import { IRoute, IRouteGroup, IRoutes } from "../../routes/index.d";
import * as URLS from "../../constants/urls";

export const useBreadcrumbs = (page: IRoute | IRouteGroup) => {
  const { routes, getRoute } = useRoutes();

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
