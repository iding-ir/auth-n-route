import { useSelector } from "react-redux";

import { IState } from "../../reducers";
import { routes, IRoutes, getRoute } from "../../routes";
import * as URLS from "../../constants/urls";

export const useBreadcrumbs = () => {
  const selectedPage = useSelector((state: IState) => state.page.selected);

  const lookInto = (routes: IRoutes, prev: IRoutes) => {
    let result: IRoutes = [];

    for (let index in routes) {
      const route = routes[index];

      if (route.key === selectedPage.key) {
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

  if (selectedPage.key !== homeRoute.key) {
    breadcrumbs = [homeRoute, ...breadcrumbs];
  }

  return { breadcrumbs };
};
