import { createStore } from "redux";
import actionReducers from "./reducers/action.reducers";

const store  = createStore(actionReducers);

export default store;

