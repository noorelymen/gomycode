import { createStore, combineReducers } from "redux";
import CartReducer from "./reducers/cart";

const reducers = {
  CartReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);
export default store;
