import { PAGE_SET } from "../constants/redux";
import { IRoute, IRouteGroup } from "../routes";

export interface IAction {
  type: string;
  payload: {
    route: IRoute | IRouteGroup;
  };
}

export const setPage = (route: IRoute | IRouteGroup): IAction => ({
  type: PAGE_SET,
  payload: { route },
});
