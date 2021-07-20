import { shopActionTypes } from "./shop.types";

export const updateCollections = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export const toggleShopSpinner = (value) => {
  console.log("SPINNER-VALUE ", value);
  return {
    type: shopActionTypes.TOGGLE_SPINNER,
    payload: value,
  };
};
