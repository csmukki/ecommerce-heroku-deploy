import { cartActionTypes } from "./cart.types";
import { addItem, clearItem } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(action.payload, state.cartItems),
      };
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItem(action.payload, state.cartItems),
      };
    default:
      return state;
  }
};
