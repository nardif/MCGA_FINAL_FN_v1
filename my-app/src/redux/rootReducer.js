import { combineReducers } from "redux";
import productsReducer from "./reducer";
import reducerUsers from "./reducerUsers";

const rootReducer = combineReducers({
  products: productsReducer,
  users: reducerUsers
});

export default rootReducer;