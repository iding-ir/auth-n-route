import { PAGE_SET } from "../constants/redux";
import { IRoute, IRouteGroup } from "../configs/routes";

export interface IActionPage {
  type: string;
  payload: IRoute | IRouteGroup;
}

export const setPage = (payload: IRoute | IRouteGroup): IActionPage => ({
  type: PAGE_SET,
  payload,
});
