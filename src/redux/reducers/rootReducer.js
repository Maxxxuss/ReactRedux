

export default (initalState, actionsMap) => (state = initalState, action) => {
    const reducerFn = actionsMap[action.type];
    if (reducerFn) {
        return reducerFn(state, action);
    }
    return state;
};

