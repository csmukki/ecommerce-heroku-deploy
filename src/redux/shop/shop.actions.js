import { shopActionTypes } from "./shop.types";
import {
  collectionsForReducer,
  firestore,
} from "../../firebase/firebase.utils";

const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then((snapshot) => {
        const convertedCollections = collectionsForReducer(snapshot);
        dispatch(fetchCollectionsSuccess(convertedCollections));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
