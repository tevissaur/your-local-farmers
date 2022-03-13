import { combineReducers } from 'redux';
import auth from './auth'
import cartReducer from './slices/cartSlice';
import farmReducer from './slices/farmSlice';
import productReducer from './slices/productSlice';
import profileReducer from './slices/profileSlice';
import uiReducer from './slices/uiSlice';





const reducer = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    profile: profileReducer,
    farm: farmReducer,
    product: productReducer,
})


export default reducer
