import {v4 as uuidv4 }  from 'uuid';

import { metadaten as actionTypes } from './actionTypes';


const metadatenFactory = (initialContent = 'kein Content') => {
    return {
        //  Generate uuid here in the action creato
        id: uuidv4(),
        content: initialContent,
        buzwords: ''
    };
};

export const addMetadata = (id, initialContent = 'kein Content') => ({
    type: actionTypes.addMetadata,
    ...metadatenFactory(id, initialContent),
});

export const deleteMetadata = (id) => ({
    type: actionTypes.deleteMetadata,
    id
});

export const updateMetadateContent = (id, content) => ({
    type: actionTypes.updateMetadatenContent,
    id,
    content
});

export const setActiveMetadate = (id) => ({
    type: actionTypes.setActiveMetadate,
    id
});

