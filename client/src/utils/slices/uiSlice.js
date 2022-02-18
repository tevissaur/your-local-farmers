const initialState = {
    drawerOpen: true,
    openFarm: {},
    openProduct: {}
}


function uiReducer(state = initialState, action) {
    switch (action.type) {
        case 'ui/drawer':
            return {
                ...state,
                drawerOpen: action.payload
            }
        case 'ui/openFarm':
            return {
                ...state,
                drawerOpen: action.payload
            }
        case 'ui/openProduct':
            return {
                ...state,
                drawerOpen: action.payload
            }
        default:
            return state
    }
}

export default uiReducer