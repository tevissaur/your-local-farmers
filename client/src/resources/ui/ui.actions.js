import { SET_ACTIVE_PAGE, SHOW_PROFILE_DROPDOWN } from "./ui.types"

export const setActivePage = (payload) => {
    return {
        type: SET_ACTIVE_PAGE,
        payload
    }
}

export const showProfileDropdown = (payload) => {
    return {
        type: SHOW_PROFILE_DROPDOWN,
        payload
    }
}