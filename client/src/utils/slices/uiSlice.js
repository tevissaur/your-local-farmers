const initialState = {
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
    nav: {
        activePage: '',
        profileDropdown: {
            anchorEl: null,
            open: false
        }
    },
    review: {
        inputText: '',
        rating: 0
    },
    newFarm: {
        name: '',
        address: '',
        story: ''
    },
    farmDash: {
        openTab: 0,
        newProduct: {
            name: '',
            price: 0,
            quantity: 0,
            categories: [],
            description: ''
        }
    }
}


function uiReducer(state = initialState, action) {
    switch (action.type) {
        case 'ui/drawer':
            return {
                ...state,
                drawerOpen: action.payload
            }
        case 'ui/nav/activePage':
            return {
                ...state,
                nav: {
                    activePage: action.payload
                }
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
                    ...state.signup,
                    modal: action.payload
                }
            }
        case 'ui/signup/email':
            return {
                ...state,
                signup: {
                    ...state.signup,
                    email: action.payload
                }
            }
        case 'ui/signup/password':
            return {
                ...state,
                signup: {
                    ...state.signup,
                    password: action.payload
                }
            }
        case 'ui/signup/username':
            return {
                ...state,
                signup: {
                    ...state.signup,
                    username: action.payload
                }
            }
        case 'ui/signup/firstName':
            return {
                ...state,
                signup: {
                    ...state.signup,
                    firstName: action.payload
                }
            }
        case 'ui/review/inputText':
            return {
                ...state,
                review: {
                    ...state.review,
                    inputText: action.payload
                }
            }
        case 'ui/review/rating':
            return {
                ...state,
                review: {
                    ...state.review,
                    rating: action.payload
                }
            }
        case 'ui/newFarm/name':
            return {
                ...state,
                newFarm: {
                    ...state.newFarm,
                    name: action.payload
                }
            }
        case 'ui/newFarm/address':
            return {
                ...state,
                newFarm: {
                    ...state.newFarm,
                    address: action.payload
                }
            }
        case 'ui/newFarm/story':
            return {
                ...state,
                newFarm: {
                    ...state.newFarm,
                    story: action.payload
                }
            }
        case 'ui/farmdash/tab': 
            return {
                ...state,
                farmDash: {
                    ...state.farmDash,
                    openTab: action.payload
                }
            }
        case 'ui/farmdash/newProdForm': 
            return {
                ...state,
                farmDash: {
                    ...state.farmDash,
                    newProdForm: action.payload
                }
            }
        default:
            return state
    }
}

export default uiReducer