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
    console.log(payload)
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
    console.log(payload)
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
export const setTopFarms = (payload) => {
    return {
        type: 'farm/topFarms',
        payload
    }
}
export const setFarms = (payload) => {
    return {
        type: 'farm/farms',
        payload
    }
}
export const setSingleFarm = (payload) => {
    return {
        type: 'farm/singleFarm',
        payload
    }
}

export const setReviewContent = (payload) => {
    return {
        type: 'ui/review/inputText',
        payload
    }
}
export const setReviewRating = (payload) => {
    return {
        type: 'ui/review/rating',
        payload
    }
}

export const setSingleProduct = (payload) => {
    return {
        type: 'product/singleProduct',
        payload
    }
}

export const setIsFarmer = (payload) => {
    return {
        type: 'user/isFarmer', 
        payload
    }
}

export const setMyFarm = (payload) => {
    return {
        type: 'farm/myFarm',
        payload
    }
}