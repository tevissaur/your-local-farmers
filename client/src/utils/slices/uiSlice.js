const initialState = {
    drawerOpen: true,
}


function uiReducer(state = initialState, action) {
    switch (action.type) {
        case 'ui/drawer':
            return {
                ...state,
                drawerOpen: action.payload
            }
        default:
            return state
    }
}

export default uiReducer