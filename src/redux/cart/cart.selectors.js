import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const totalCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((Accumulator, item) => {
      Accumulator += item.quantity;
      return Accumulator;
    }, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => !!cart.hidden
);

export const totalCartItemsAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((Accumulator, item) => {
      Accumulator = Accumulator + item.price * item.quantity;
      return Accumulator;
    }, 0)
);
