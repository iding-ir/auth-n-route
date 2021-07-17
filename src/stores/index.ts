import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

import reducers from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(save(), reduxThunk)
)(createStore);

const store = createStoreWithMiddleware(reducers, load());

export default store;
