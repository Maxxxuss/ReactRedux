import { createSelector } from 'reselect';

export const getMetadaten = state => state.metadaten;

export const getMetadatenList = createSelector(
    getMetadaten,
    metadaten => metadaten.map(metadata => ({
        id: metadata.id,
        content: metadata.content
    }))
);

// export const getActivId = createSelector(
//     getMetadata,
//     metadaten => metadaten.find(metadata => metadata.isActive) || null,
// );