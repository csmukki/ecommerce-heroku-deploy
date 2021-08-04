import { takeLatest, put, all, call } from "redux-saga/effects";
import { userActionTypes } from "./user.types";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
  getCurrentUserAuth,
} from "../../firebase/firebase.utils";

import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

function* fireSignInSuccess(authUser) {
  try {
    const userRef = yield createUserProfileDocument(authUser);
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield fireSignInSuccess(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield fireSignInSuccess(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const authUser = yield getCurrentUserAuth();
    yield fireSignInSuccess(authUser);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signUp({ payload: { email, password, ...additionalData } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user, {
      ...additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signUpSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

//#####################################################//
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCurrentUserSession() {
  yield takeLatest(userActionTypes.CURRENT_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

//############################################//:
export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onEmailSignInStart),
    call(onCurrentUserSession),
    call(onSignUpStart),
  ]);
}
