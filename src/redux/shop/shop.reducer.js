import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  loading: true,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case shopActionTypes.TOGGLE_SPINNER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
