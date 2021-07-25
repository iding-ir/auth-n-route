import { IRoutes, IRoute, IRouteGroup } from "../../routes/index.d";

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

    return result;
  };

  return { searchRoutes };
};
