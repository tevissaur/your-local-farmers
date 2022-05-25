import { createStore, combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
import cartReducer from './slices/cartSlice';
import farmReducer from './slices/farmSlice';
import productReducer from './slices/productSlice';
import profileReducer from './slices/profileSlice';
import uiReducer from './slices/uiSlice';

const reducers = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    profile: profileReducer,
    farm: farmReducer,
    product: productReducer,
})

// const persistedReducer = persist

const store = createStore(reducers)

export default store