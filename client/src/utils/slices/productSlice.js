const initialState = {
    products: [],
    product: {},
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'product/singleProduct':
            return {
                ...state,
                product: action.payload
            }
        case 'product/products':
            return {
                ...state,
                products: action.payload
            }
        default: 
            return state
    }
}

export default productReducer