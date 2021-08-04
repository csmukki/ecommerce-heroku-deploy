import { call, all } from "redux-saga/effects";

import directorySagas from "./directory/directory.sagas";
import userSaga from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(directorySagas), call(userSaga)]);
}
