import { createStore, combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
import { cartReducer as cart } from '../resources/cart/cart.reducer';
import { farmReducer as browseFarms } from '../resources/browse-farms/browse-farms.reducer';
import { productReducer as product } from '../resources/product/product.reducer'
import { profileReducer as profile } from '../resources/profile/profile.reducer';
import uiReducer from './slices/uiSlice';
import { categoriesReducer as categories } from '../resources/categories/categories.reducer'
import { dashboardReducer as dashboard } from '../resources/farm-dashboard/dashboard.reducer';

const reducers = combineReducers({
    cart,
    ui: uiReducer,
    profile,
    browseFarms,
    product,
    categories,
    dashboard
})

// const persistedReducer = persist

const store = createStore(reducers)

export default store