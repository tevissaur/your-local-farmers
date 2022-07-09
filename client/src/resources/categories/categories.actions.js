import { SET_CATEGORIES } from "./categories.types"

export const setCategories = (payload) => {
    return {
        type: SET_CATEGORIES,
        payload
    }
}