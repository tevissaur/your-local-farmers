import { createStore, combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
import cartReducer from './slices/cartSlice';
import farmReducer from './slices/farmSlice';
import productReducer from './slices/productSlice';
import profileReducer from './slices/profileSlice';
import uiReducer from './slices/uiSlice';
import { categoriesReducer as categories } from '../resources/categories/categories.reducer'
import { dashboardReducer as dashboard } from '../resources/farm-dashboard/dashboard.reducer';
import { locationReducer as location } from '../resources/location/location.reducer'
const reducers = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    profile: profileReducer,
    farm: farmReducer,
    product: productReducer,
    categories,
    dashboard,
    location
})

// const persistedReducer = persist

const store = createStore(reducers)

export default store