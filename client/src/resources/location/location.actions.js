import { SET_COORDS, SET_LATITUDE, SET_LONGITUDE } from "./location.types";

export const setLongitude = (payload) => {
    return {
        type: SET_LONGITUDE,
        payload
    }
}

export const setLatitude = (payload) => {
    return {
        type: SET_LATITUDE,
        payload
    }
}

export const setCoords = (payload) => {
    return {
        type: SET_COORDS,
        payload
    }
}