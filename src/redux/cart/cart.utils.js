export const addItem = (newItem, cartItems) => {
  if (!newItem) return cartItems;

  const existingItem = cartItems.find((item) => item.id === newItem.id);
  if (existingItem) {
    return cartItems.map((item) => {
      if (item === existingItem) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const clearItem = (cartItem, cartItems) => {
  if (!cartItem) return cartItems;

  return cartItems.filter((item) => item.id !== cartItem.id);
};
