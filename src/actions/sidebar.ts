import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
} from "../constants/redux";

export interface IAction {
  type: string;
}

export const openSidebar = (): IAction => ({
  type: SIDEBAR_OPEN,
});

export const closeSidebar = (): IAction => ({
  type: SIDEBAR_CLOSE,
});

export const toggleSidebar = (): IAction => ({
  type: SIDEBAR_TOGGLE,
});
