import { SHOW_LOGIN_MODAL, SHOW_SIGNUP_MODAL, UPDATE_LOGIN_FORM, UPDATE_SIGNUP_FORM } from "./auth.types"


export const showSignupModal = (payload) => {
    return {
        type: SHOW_SIGNUP_MODAL,
        payload
    }
}
export const showLoginModal = (payload) => {
    return {
        type: SHOW_LOGIN_MODAL,
        payload
    }
}
export const updateSignupForm = (payload) => {
    return {
        type: UPDATE_SIGNUP_FORM,
        ...payload
    }
}
export const updateLoginForm = (payload) => {
    return {
        type: UPDATE_LOGIN_FORM,
        ...payload
    }
}