import { SET_ACTIVE_PAGE } from "./ui.types"

export const setActivePage = (payload) => {
    return {
        type: SET_ACTIVE_PAGE,
        payload
    }
}