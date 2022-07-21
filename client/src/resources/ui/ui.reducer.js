import { SET_ACTIVE_PAGE, SHOW_PROFILE_DROPDOWN } from "./ui.types"

const initialState = {
    activePage: '',
    profileDropdown: false
}



export function uiReducer(state = initialState,
    action) {
        switch(action.type) {
            case SET_ACTIVE_PAGE:
                return {
                    ...state,
                    activePage: action.payload
                }
            case SHOW_PROFILE_DROPDOWN: 
                return {
                    ...state,
                    profileDropdown: action.payload
                }
            default: 
                return state
        }
    }

