import { createStore, combineReducers } from "redux";
// import { persistReducer } from 'redux-persist'
import cart from './slices/cart/cart-slice';
import search from './slices/search/search-slice'
import ui from './slices/ui/ui-slice'
import user from './slices/user/user-slice'
import farmDashboard from './slices/farm-dashboard/farm-dashboard-slice'
import farmStore from './slices/farm-store/farm-store-slice'
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { searchApi } from "./slices/search/search-api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userApi } from "./slices/user/user-api";
import { cartApi } from "./slices/cart/cart-api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


const store = configureStore({
  reducer: {
    cart,
    search,
    ui,
    user,
    farmDashboard,
    farmStore,
    [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware).concat(userApi.middleware).concat(cartApi.middleware)
    
});

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;


export default store;
