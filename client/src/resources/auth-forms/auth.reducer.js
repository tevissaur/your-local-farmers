import { 
    SET_AUTH_FAILED,
    SHOW_LOGIN_MODAL, 
    SHOW_SIGNUP_MODAL, 
    UPDATE_LOGIN_FORM, 
    UPDATE_SIGNUP_FORM 
} from "./auth.types"

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
    authFailed: false
}


export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOGIN_MODAL:
            console.log(action)
            return {
                ...state,
                login: {
                    ...state.login,
                    modal: action.payload
                }
            }
        case SHOW_SIGNUP_MODAL:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    modal: action.payload
                }
            }
        case UPDATE_LOGIN_FORM:
            return {
                ...state,
                login: {
                    ...state.login,
                    [action.param]: action.payload
                }
            }
        case UPDATE_SIGNUP_FORM:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    [action.param]: action.payload
                }
            }
        case SET_AUTH_FAILED: 
            return {
                ...state,
                authFailed: action.payload
            }
        default:
            return state
    }
}