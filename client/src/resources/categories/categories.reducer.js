import { SET_CATEGORIES } from "./categories.types"

const initialState = {
    categories: []
}



export function categoriesReducer(state = initialState,
    action) {
        switch(action.type) {
            case SET_CATEGORIES:
                return {
                    ...state,
                    categories: action.payload
                }
            default: 
                return state
        }
    }

