import { createStore, combineReducers } from "redux";
// import { persistReducer } from 'redux-persist'
import cart from '../utils/slices/cart-slice';
import search from './slices/search/search-slice'
import ui from '../utils/slices/ui-slice'
import user from './slices/user-slice'
import farmDashboard from '../utils/slices/farm-dashboard-slice'
import farmStore from '../utils/slices/farm-store-slice'
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { searchApi } from "./slices/search/search-api";


const store = configureStore({
  reducer: {
    cart,
    search,
    ui,
    user,
    farmDashboard,
    farmStore,
    [api.reducerPath]: api.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;
