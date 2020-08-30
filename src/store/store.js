import { createStore, combineReducers, applyMiddleware } from "redux";
import clientReducer from "./reducers/clientReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  clientInfo: clientReducer,
  //    reducers will added here for future pupose
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
