import { GET_FARMS, SET_SELECTED_CATEGORIES, SET_VISIBLE_FARMS } from "./browse-farms.types"

export const setFarms = (payload) => {
    return {
        type: GET_FARMS,
        payload
    }
}

export const setVisibleFarms = (payload) => {
    return {
        type: SET_VISIBLE_FARMS,
        payload
    }
}

export const setSelectedCategories = (payload) => {
    return {
        type: SET_SELECTED_CATEGORIES,
        payload
    }
}
