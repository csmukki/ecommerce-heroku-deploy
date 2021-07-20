import { directoryActionTypes } from "./directory.types";

export const updateSections = (sections) => ({
  type: directoryActionTypes.UPDATE_SECTIONS,
  payload: sections,
});

export const toggleDirectorySpinner = () => ({
  type: directoryActionTypes.TOGGLE_SPINNER,
});
