import { SET_ACTIVE_PAGE } from "./ui.types"

const initialState = {
    activePage: ''
}



export function uiReducer(state = initialState,
    action) {
        switch(action.type) {
            case SET_ACTIVE_PAGE:
                return {
                    ...state,
                    activePage: action.payload
                }
            default: 
                return state
        }
    }

