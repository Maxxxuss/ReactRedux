import {
    metadaten as actionTypes,
} from '../actions/actionTypes';

const initalState = [];

const actionsMap = {
    [actionTypes.addMetadata]: (state, { type, ...newMetadaten }) => state
        .concat([newMetadaten]),
    [actionTypes.deleteMetadata]: (state, action) => state.filter(metadaten => metadaten.id),
    [actionTypes.updateMetadatenContent]: (state, action) => state.map(metadaten => metadaten.id !== action.id
        ? metadaten
        : ({
            ...metadaten,
            content: action.content,
        })
    ),
    [actionTypes.setActiveMetadate]: (state, action) => state.map(metadaten => ({
        ...metadaten,
        metadatenId: metadaten.id === action.id,
    })),
    [actionTypes.searchMetadaten]: (state, action) => state.map(metadaten => ({
        ...metadaten,
        content: action.content
    })),

};

export default createReducer(initalState, actionsMap);
