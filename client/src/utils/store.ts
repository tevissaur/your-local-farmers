import { createStore, combineReducers } from "redux";
// import { persistReducer } from 'redux-persist'
import cart from '../utils/slices/cart-slice';
import { farmReducer as browseFarms } from "../resources/browse-farms/browse-farms.reducer";
import { productReducer as product } from "../resources/product/product.reducer";
import { profileReducer as profile } from "../resources/profile/profile.reducer";
import { authReducer as auth } from "../resources/auth-forms/auth.reducer";
import { categoriesReducer as categories } from "../resources/categories/categories.reducer";
import { dashboardReducer as dashboard } from "../resources/farm-dashboard/dashboard.reducer";
import { uiReducer as ui } from "../resources/ui/ui.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";


const store = configureStore({
  reducer: {
    cart,
    auth,
    profile,
    browseFarms,
    product,
    categories,
    dashboard,
    ui,
    [api.reducerPath]: api.reducer,
  },
});

export default store;
