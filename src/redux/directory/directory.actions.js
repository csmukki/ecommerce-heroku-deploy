import { directoryActionTypes } from "./directory.types";

export const fetchSectionsSuccess = (sections) => ({
  type: directoryActionTypes.FETCH_SECTIONS_SUCCESS,
  payload: sections,
});

export const fetchSectionsStart = () => ({
  type: directoryActionTypes.FETCH_SECTIONS_START,
});

export const fetchSectionsFailure = (errorMessage) => ({
  type: directoryActionTypes.FETCH_SECTIONS_FAILURE,
  payload: errorMessage,
});
