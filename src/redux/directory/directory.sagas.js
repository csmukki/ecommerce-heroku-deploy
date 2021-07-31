import { takeLatest, put, call, all } from "redux-saga/effects";
import { directoryActionTypes } from "./directory.types";

import { firestore, sectionsForReducer } from "../../firebase/firebase.utils";
import {
  fetchSectionsSuccess,
  fetchSectionsFailure,
} from "./directory.actions";

function* fetchSections() {
  try {
    const collectionRef = yield firestore.collection("sections");
    const snapshot = yield collectionRef.get();
    const sections = yield sectionsForReducer(snapshot);
    yield put(fetchSectionsSuccess(sections));
  } catch (error) {
    yield put(fetchSectionsFailure(error.message));
  }
}

function* onFetchSectionsStart() {
  yield takeLatest(directoryActionTypes.FETCH_SECTIONS_START, fetchSections);
}

export default function* directorySagas() {
  yield all([call(onFetchSectionsStart)]);
}
