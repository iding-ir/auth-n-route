import { combineReducers } from "redux";

import authReducer, { IStateAuth } from "./auth";
import pageReducer, { IStatePage } from "./page";
import sidebarReducer, { IStateSidebar } from "./sidebar";
import SwitchesReducer, { IStateSwitches } from "./switches";
import ThemeReducer, { IStateTheme } from "./theme";
import ItemsReducer, { IStateItems } from "./items";

export interface IState {
  auth: IStateAuth;
  page: IStatePage;
  sidebar: IStateSidebar;
  switches: IStateSwitches;
  theme: IStateTheme;
  items: IStateItems;
}

const combinedReducers = combineReducers({
  auth: authReducer,
  page: pageReducer,
  sidebar: sidebarReducer,
  switches: SwitchesReducer,
  theme: ThemeReducer,
  items: ItemsReducer,
});

export default combinedReducers;
