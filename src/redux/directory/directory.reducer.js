import { directoryActionTypes } from "./directory.types";

const INITIAL_STATE = {
  sections: null,
  loading: true,
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case directoryActionTypes.UPDATE_SECTIONS:
      return {
        ...state,
        sections: action.payload,
      };
    case directoryActionTypes.TOGGLE_SPINNER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
