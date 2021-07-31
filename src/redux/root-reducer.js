import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

let rootConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer,
});

export default persistReducer(rootConfig, rootReducer);
