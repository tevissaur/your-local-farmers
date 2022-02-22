export const setCartItems = (payload) => {
    return {
        type: 'cart/items',
        payload
    }
}

export const setLoginModal = (payload) => {
    return {
        type: 'ui/login/modal',
        payload
    }
}
export const setLoginEmail = (payload) => {
    return {
        type: 'ui/login/email',
        payload
    }
}
export const setLoginPass = (payload) => {
    return {
        type: 'ui/login/password',
        payload
    }
}
export const setSignupModal = (payload) => {
    return {
        type: 'ui/signup/modal',
        payload
    }
}
export const setSignupEmail = (payload) => {
    return {
        type: 'ui/signup/email',
        payload
    }
}
export const setSignupPass = (payload) => {
    return {
        type: 'ui/signup/password',
        payload
    }
}
export const setSignupUsername = (payload) => {
    return {
        type: 'ui/signup/username',
        payload
    }
}
export const setSignupFirstName = (payload) => {
    return {
        type: 'ui/signup/firstName',
        payload
    }
}
export const setActivePage = (payload) => {
    return {
        type: 'ui/nav/activePage',
        payload
    }
}