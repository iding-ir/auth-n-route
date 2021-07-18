import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  SIDEBAR_RESIZE,
} from "../constants/redux";
import { SIDEBAR_WIDTH } from "../constants/config";
import { IAction } from "../actions/sidebar";

export interface IState {
  open: boolean;
  width: number;
}

const initialState: IState = {
  open: false,
  width: SIDEBAR_WIDTH,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, open: true };
    case SIDEBAR_CLOSE:
      return { ...state, open: false };
    case SIDEBAR_TOGGLE:
      return { ...state, open: !state.open };
    case SIDEBAR_RESIZE:
      return { ...state, width: action.payload?.width };
    default:
      return state;
  }
};

export default reducer;
