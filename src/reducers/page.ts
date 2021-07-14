import { PAGE_SET } from "../constants/redux";
import { iRoute, IRoute, IRouteGroup } from "../routes";
import { IActionPage } from "../actions/page";

export interface IStatePage {
  selected: IRoute | IRouteGroup;
}

const initialState: IStatePage = {
  selected: iRoute,
};

const reducer = (state = initialState, action: IActionPage) => {
  switch (action.type) {
    case PAGE_SET:
      return { ...state, selected: action.payload.route };
    default:
      return state;
  }
};

export default reducer;
