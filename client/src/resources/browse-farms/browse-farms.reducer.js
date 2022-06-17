const initialState = {
    farms: [],
    singleFarm: {},
    topFarms: [],
    myFarm: {}
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
        case 'farm/farms':
            return {
                ...state,
                farms: action.payload
            }
        case 'farm/myFarm':
            return {
                ...state,
                myFarm: action.payload
            }
        default: 
            return state
    }
}
