import auth from "../auth"

const initialState = {
    loggedIn: auth.loggedIn(),
    isFarmer: false
}


function profileReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/auth': 
            return {
                ...state,
                loggedIn: action.payload
            }
        case 'user/isFarmer': 
            return {
                ...state,
                isFarmer: action.payload
            }
        default: 
            return state
    }
}

export default profileReducer