import { combineReducers } from "redux";

import sidebarReducer, { IStateSidebar } from "./sidebar";

export interface IState {
  sidebar: IStateSidebar;
}

const combinedReducers = combineReducers({
  sidebar: sidebarReducer,
});

export default combinedReducers;
