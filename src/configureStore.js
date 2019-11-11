import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

import createReducer from "./reducers";

export default function configureStore({}, history) {
  const middlewares = [reduxThunk];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(history),
    composeWithDevTools(...enhancers)
  );

  return store;
}
