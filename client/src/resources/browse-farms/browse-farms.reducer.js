import { GET_FARMS, SET_SELECTED_CATEGORIES, SET_VISIBLE_FARMS } from "./browse-farms.types"

const initialState = {
    farms: [],
    singleFarm: {},
    topFarms: [],
    myFarm: {},
    ui: {
        visibleFarms: [],
        selectedCategories: []
    }
}


export function farmReducer(state = initialState, action) {
    switch (action.type) {
        case 'farm/topFarms':
            return {
                ...state,
                topFarms: action.payload
            }
        case 'farm/singleFarm':
            return {
                ...state,
                singleFarm: action.payload
            }
        case GET_FARMS:
            return {
                ...state,
                farms: action.payload
            }
        case 'farm/myFarm':
            return {
                ...state,
                myFarm: action.payload
            }
        case SET_VISIBLE_FARMS: 
            return {
                ...state,
                ui: {
                    ...state.ui,
                    visibleFarms: action.payload
                }
            }
        case SET_SELECTED_CATEGORIES:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    selectedCategories: action.payload
                }
            }
        default: 
            return state
    }
}
