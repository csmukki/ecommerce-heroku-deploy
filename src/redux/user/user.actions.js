import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (emailandPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailandPassword,
});

export const currentUserSession = () => ({
  type: userActionTypes.CURRENT_USER_SESSION,
});

export const signUpStart = (signUpData) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: signUpData,
});

export const signUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});
