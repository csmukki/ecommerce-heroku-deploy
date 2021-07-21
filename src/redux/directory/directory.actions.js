import { directoryActionTypes } from "./directory.types";
import { firestore, sectionsForReducer } from "../../firebase/firebase.utils";

export const fetchSectionsSuccess = (sections) => ({
  type: directoryActionTypes.FETCH_SECTIONS_SUCCESS,
  payload: sections,
});

const fetchSectionsStart = () => ({
  type: directoryActionTypes.FETCH_SECTIONS_START,
});

const fetchSectionsFailure = (errorMessage) => ({
  type: directoryActionTypes.FETCH_SECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchSectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchSectionsStart());
    console.log("START");
    const collectionRef = firestore.collection("sections");
    collectionRef
      .get()
      .then((snapshot) => {
        const convertedSections = sectionsForReducer(snapshot);
        setTimeout(
          () => dispatch(fetchSectionsSuccess(convertedSections)),
          3000
        );
        console.log("SUCCESS");
      })
      .catch((error) => {
        dispatch(fetchSectionsFailure(error.message));
      });
  };
};
