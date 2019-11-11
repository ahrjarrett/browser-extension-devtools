import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

function rootReducer(state = "initial message from redux!", action) {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return action.payload;

    default:
      return state;
  }
}

export default history =>
  combineReducers({
    router: connectRouter(history),
    test: rootReducer
  });
