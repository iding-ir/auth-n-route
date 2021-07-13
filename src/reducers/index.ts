import { combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";
import authReducer, { IStateAuth } from "./auth";

export interface IState {
  sidebar: IStateSidebar;
  auth: IStateAuth;
}

const combinedReducers = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
});

export default combinedReducers;
