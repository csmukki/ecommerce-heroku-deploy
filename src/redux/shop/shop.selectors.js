import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections).reduce((Accumulator, key) => {
          Accumulator.push(collections[key]);
          return Accumulator;
        }, [])
      : []
);

export const selectCollectionMapToUrl = (matchUrlParam) => {
  return createSelector([selectCollections], (collections) =>
    collections ? collections[matchUrlParam] : null
  );
};

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
