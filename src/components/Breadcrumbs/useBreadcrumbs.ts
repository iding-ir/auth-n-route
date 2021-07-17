import { useSelector } from "react-redux";

import { IState } from "../../reducers";
import { routes, IRoutes } from "../../routes";

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

  const breadcrumbs = lookInto(routes, []);

  return { breadcrumbs };
};
