import { PAGE_SET } from "../constants/redux";
import { iRoute, IRoute, IRouteGroup } from "../routes";
import { IAction } from "../actions/page";

export interface IState {
  selected: IRoute | IRouteGroup;
}

const initialState: IState = {
  selected: iRoute,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case PAGE_SET:
      return { ...state, selected: action.payload.route };
    default:
      return state;
  }
};

export default reducer;
