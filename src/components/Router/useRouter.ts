import { IRoutes, IRoute, IRouteGroup } from "../../routes/index.d";

export const useRouter = () => {
  const searchRoutes = (
    routes: IRoutes,
    pathname: string,
    params: { [key: string]: string }
  ) => {
    let result: any = false;

    routes.forEach((route: IRoute | IRouteGroup) => {
      const path = Object.keys(params).reduce(
        (total: string, key: string, index: number) => {
          const value = Object.values(params)[index];

          return total.replace(`:${key}`, `${value}`);
        },
        route.path || ""
      );

      if (path === pathname) {
        result = route;
      }

      if ("items" in route && !result) {
        result = searchRoutes(route.items, pathname, params);
      }
    });

    return result;
  };

  return { searchRoutes };
};
