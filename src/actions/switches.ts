import { SWITCH_TOGGLE, SWITCH_ON, SWITCH_OFF } from "../constants/redux";

export interface IAction {
  type: string;
  payload: string;
}

export const toggleSwitch = (payload: string): IAction => ({
  type: SWITCH_TOGGLE,
  payload,
});

export const switchOn = (payload: string): IAction => ({
  type: SWITCH_ON,
  payload,
});

export const switchOff = (payload: string): IAction => ({
  type: SWITCH_OFF,
  payload,
});
