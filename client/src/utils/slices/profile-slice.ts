import AuthService from '../../services/authentication.service'
import { SET_OPEN_TAB_PROFILE, SET_PROFILE_DATA, SET_USER_COORDS } from './profile.types'

const initialState = {
    loggedIn: AuthService.loggedIn(),
    isFarmer: false,
    userData: {
        _id: '',
        firstName: '',
        lastName: '',
        username: '',
        address: '',
        email: '',
        isFarmer: false,
        orders: [],
        reviews: [],
        location: {
            coords: {
                latitude: 0,
                longitude: 0
            }
        }
    },
    ui: {
        openTab: 0,
        editProfile: {
            firstName: '',
            lastName: '',
            username: '',
            address: '',
            email: '',
            password: ''
        }
    }
}


export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/auth':
            return {
                ...state,
                loggedIn: action.payload
            }
        case 'user/isFarmer':
            return {
                ...state,
                isFarmer: action.payload
            }
        case SET_OPEN_TAB_PROFILE:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    openTab: action.payload
                }
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload
                }
            }
        case SET_USER_COORDS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    location: {
                        ...state.userData.location,
                        coords: action.payload
                    }
                }
            }
        default:
            return state
    }
}
