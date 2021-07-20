import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  ({ sections }) => (sections ? sections : [])
);

export const selectIsFetching = createSelector(
  [selectDirectory],
  (directory) => directory.isFetching
);
