import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.SIGN_OUT_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
      };

    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
