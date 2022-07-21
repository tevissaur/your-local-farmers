import { SET_MY_FARM, SET_OPEN_TAB, UPDATE_NEW_FARM_FORM, UPDATE_NEW_PRODUCT_FORM } from "./dashboard.types"

export const setOpenTab = (payload) => {
    return {
        type: SET_OPEN_TAB,
        payload
    }
}


export const setMyFarm = (payload) => {
    return {
        type: SET_MY_FARM,
        payload
    }
}

export const updateNewProductForm = (payload) => {
    return {
        type: UPDATE_NEW_PRODUCT_FORM,
        ...payload
    }
}

export const updateNewFarmForm = (payload) => {
    return {
        type: UPDATE_NEW_FARM_FORM,
        ...payload
    }
}