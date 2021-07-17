import { ITEM_TOGGLE, ITEM_ON, ITEM_OFF } from "../constants/redux";
import { IAction } from "../actions/items";

export interface IStateItems {
  [key: string]: boolean;
}

const initialState: IStateItems = {};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ITEM_TOGGLE:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case ITEM_ON:
      return {
        ...state,
        [action.payload]: true,
      };
    case ITEM_OFF:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default reducer;
