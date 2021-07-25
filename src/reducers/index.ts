import { combineReducers } from "redux";

import authReducer, { IState as IStateAuth } from "./auth";
import sidebarReducer, { IState as IStateSidebar } from "./sidebar";
import SwitchesReducer, { IState as IStateSwitches } from "./switches";
import ThemeReducer, { IState as IStateTheme } from "./theme";
import ItemsReducer, { IState as IStateItems } from "./items";

export interface IState {
  auth: IStateAuth;
  sidebar: IStateSidebar;
  switches: IStateSwitches;
  theme: IStateTheme;
  items: IStateItems;
}

const combinedReducers = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  switches: SwitchesReducer,
  theme: ThemeReducer,
  items: ItemsReducer,
});

export default combinedReducers;
