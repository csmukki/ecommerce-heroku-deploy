import { shopActionTypes } from "./shop.types";

export const updateCollections = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export const toggleShopSpinner = () => ({
  type: shopActionTypes.TOGGLE_SPINNER,
});
