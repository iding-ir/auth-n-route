import { SWITCH_TOGGLE, SWITCH_ON, SWITCH_OFF } from "../constants/redux";
import { IActionSwitches } from "../actions/switches";

export interface IStateSwitches {
  [key: string]: boolean;
}

const initialState: IStateSwitches = {
  theme: true,
};

const reducer = (state = initialState, action: IActionSwitches) => {
  switch (action.type) {
    case SWITCH_TOGGLE:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case SWITCH_ON:
      return {
        ...state,
        [action.payload]: true,
      };
    case SWITCH_OFF:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default reducer;
