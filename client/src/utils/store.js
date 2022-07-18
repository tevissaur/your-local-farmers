import { createStore, combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
import { cartReducer as cart } from '../resources/cart/cart.reducer';
import { farmReducer as browseFarms } from '../resources/browse-farms/browse-farms.reducer';
import { productReducer as product } from '../resources/product/product.reducer'
import { profileReducer as profile } from '../resources/profile/profile.reducer';
import { authReducer as auth } from '../resources/auth-forms/auth.reducer'
import { categoriesReducer as categories } from '../resources/categories/categories.reducer'
import { dashboardReducer as dashboard } from '../resources/farm-dashboard/dashboard.reducer';
import { uiReducer as ui } from '../resources/ui/ui.reducer'

const reducers = combineReducers({
    cart,
    auth,
    profile,
    browseFarms,
    product,
    categories,
    dashboard,
    ui
})

// const persistedReducer = persist

const store = createStore(reducers)

export default store