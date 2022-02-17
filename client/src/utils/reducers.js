import { combineReducers } from 'redux';
import auth from './auth'
import cartReducer from './slices/cartSlice';
import profileReducer from './slices/profileSlice';
import uiReducer from './slices/uiSlice';





const reducer = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    profile: profileReducer
})


export default reducer
