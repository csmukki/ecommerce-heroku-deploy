import { call, all } from "redux-saga/effects";
import directorySagas from "./directory/directory.sagas";

export default function* rootSaga() {
  yield all([call(directorySagas)]);
}
