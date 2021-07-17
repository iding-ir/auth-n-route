import { ITEM_TOGGLE, ITEM_ON, ITEM_OFF } from "../constants/redux";

export interface IAction {
  type: string;
  payload: string;
}

export const toggleItem = (payload: string): IAction => ({
  type: ITEM_TOGGLE,
  payload,
});

export const itemOn = (payload: string): IAction => ({
  type: ITEM_ON,
  payload,
});

export const itemOff = (payload: string): IAction => ({
  type: ITEM_OFF,
  payload,
});
