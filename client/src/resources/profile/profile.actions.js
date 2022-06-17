import { SET_OPEN_TAB_PROFILE, SET_PROFILE_DATA, SET_USER_COORDS } from "./profile.types"

export const setProfileData = (payload) => {
    return {
        type: SET_PROFILE_DATA,
        payload
    }
}

export const setCoords = (payload) => {
    return {
        type: SET_USER_COORDS,
        payload
    }
}

export const setOpenTabProfile = (payload) => {
    return {
        type: SET_OPEN_TAB_PROFILE,
        payload
    }
}