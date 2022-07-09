import { SET_MY_FARM, SET_OPEN_TAB, UPDATE_FARM_INFO, UPDATE_NEW_FARM_FORM, UPDATE_NEW_PRODUCT_FORM } from "./dashboard.types";

const initialState = {
    ui: {
        openTab: 0,
        newFarm: {
            name: '',
            story: '',
            address: ''
        },
        newProduct: {
            name: '',
            price: 0,
            quantity: 0,
            categories: [],
            description: ''
        },
        editFarm: {
            name: '',
            address: '',
            story: ''
        }
    },
    myFarm: {}
}

export function dashboardReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NEW_PRODUCT_FORM:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    newProduct: {
                        ...state.ui.newProduct,
                        [action.param]: action.payload
                    }
                }
            }
        case UPDATE_NEW_FARM_FORM: {
            return {
                ...state,
                ui: {
                    ...state.ui,
                    newFarm: {
                        ...state.ui.newFarm,
                        [action.param]: action.payload
                    }
                }
            }
        }
        case UPDATE_FARM_INFO: {
            return {
                ...state,
                ui: {
                    ...state.ui,
                    editFarm: {
                        ...state.ui.newFarm,
                        [action.param]: action.payload
                    }
                }
            }
        }
        case SET_OPEN_TAB:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    openTab: action.payload
                }
            }
        case SET_MY_FARM:
            return {
                ...state,
                myFarm: action.payload
            }
        default: 
            return state
    }
}