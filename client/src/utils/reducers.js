const initialState = {
    test1: 0
}



const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increase':
            
            return { ...state, test1: state.test1++ };
    
        default:
            break;
    }
}

export {
    testReducer
}