import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  SIDEBAR_RESIZE,
} from "../constants/redux";

export interface IAction {
  type: string;
  payload?: { width: number };
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

export const resizeSidebar = (width: number): IAction => ({
  type: SIDEBAR_RESIZE,
  payload: { width },
});
