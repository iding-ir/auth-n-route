import { SWITCH_TOGGLE, SWITCH_ON, SWITCH_OFF } from "../constants/redux";

export interface IActionSwitches {
  type: string;
  payload: string;
}

export const toggleSwitch = (payload: string): IActionSwitches => ({
  type: SWITCH_TOGGLE,
  payload,
});

export const switchOn = (payload: string): IActionSwitches => ({
  type: SWITCH_ON,
  payload,
});

export const switchOff = (payload: string): IActionSwitches => ({
  type: SWITCH_OFF,
  payload,
});
