const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}


function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/items': 
            return {
                ...state,
                cartItems: action.payload
            }
        default: 
            return state
    }
}

export default cartReducer