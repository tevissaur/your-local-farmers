import auth from "../auth"

const initialState = {
    loggedIn: auth.loggedIn()
}


function profileReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/auth': 
            return {
                ...state,
                loggedIn: action.payload
            }
        default: 
            return state
    }
}

export default profileReducer