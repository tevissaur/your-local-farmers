import { SET_COORDS, SET_LATITUDE, SET_LONGITUDE } from "./location.types"


const initialState = {
    coords: {
        latitude: 0,
        longitude: 0
    }
}


export function locationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LATITUDE:
            return {
                ...state,
                coords: {
                    ...state.coords,
                    latitude: action.payload
                }
            }
        case SET_LONGITUDE:
            return {
                ...state,
                coords: {
                    ...state.coords,
                    longitude: action.payload
                }
            }
        case SET_COORDS: 
            return {
                ...state,
                coords: {
                    ...state.coords,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                }
            }
        default:
            return {
                ...state
            }
    }
}