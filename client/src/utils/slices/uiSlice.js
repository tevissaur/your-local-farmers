const initialState = {
    drawerOpen: false,
    login: {
        modal: false,
        email: '',
        password: ''
    },
    signup: {
        modal: false, 
        email: '',
        password: '',
        firstName: '',
        username: ''
    },
    openFarm: {},
    openProduct: {},
    products: [],
    farms: []
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
                openFarm: action.payload
            }
        case 'ui/openProduct':
            return {
                ...state,
                openProduct: action.payload
            }
        case 'ui/login/modal':
            return {
                ...state,
                login: {
                    ...state.login,
                    modal: action.payload
                }
            }
        case 'ui/login/email':
            return {
                ...state,
                login: {
                    ...state.login,
                    email: action.payload
                }
            }
        case 'ui/login/password':
            return {
                ...state,
                login: {
                    ...state.login,
                    password: action.payload
                }
            }
        case 'ui/signup/modal':
            return {
                ...state,
                signup: {
                    ...state.login,
                    modal: action.payload
                }
            }
        case 'ui/signup/email':
            return {
                ...state,
                signup: {
                    ...state.login,
                    email: action.payload
                }
            }
        case 'ui/signup/password':
            return {
                ...state,
                signup: {
                    ...state.login,
                    password: action.payload
                }
            }
        case 'ui/signup/username':
            return {
                ...state,
                signup: {
                    ...state.login,
                    username: action.payload
                }
            }
        case 'ui/signup/firstName':
            return {
                ...state,
                signup: {
                    ...state.login,
                    firstName: action.payload
                }
            }
        default:
            return state
    }
}

export default uiReducer