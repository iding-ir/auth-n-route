import { combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import authReducer, { IStateAuth } from "./auth";
import pageReducer, { IStatePage } from "./page";
import ThemeReducer, { IStateTheme } from "./theme";
import SwitchesReducer, { IStateSwitches } from "./switches";

export interface IState {
  sidebar: IStateSidebar;
  auth: IStateAuth;
  page: IStatePage;
  theme: IStateTheme;
  switches: IStateSwitches;
}

const combinedReducers = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  page: pageReducer,
  theme: ThemeReducer,
  switches: SwitchesReducer,
});

export default combinedReducers;
