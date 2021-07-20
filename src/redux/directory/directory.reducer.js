import { directoryActionTypes } from "./directory.types";

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: "",
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case directoryActionTypes.FETCH_SECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case directoryActionTypes.FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        sections: action.payload,
        isFetching: false,
      };
    case directoryActionTypes.FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
