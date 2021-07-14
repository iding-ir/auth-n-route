import { PAGE_SET } from "../constants/redux";
import { IRoute, IRouteGroup } from "../routes";

export interface IActionPage {
  type: string;
  payload: {
    route: IRoute | IRouteGroup;
  };
}

export const setPage = (route: IRoute | IRouteGroup): IActionPage => ({
  type: PAGE_SET,
  payload: { route },
});
