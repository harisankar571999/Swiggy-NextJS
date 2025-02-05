import { configureStore } from "@reduxjs/toolkit";
import foodReducer from './slice/foodSlice';
import hotelReducer from './slice/restuarantSlice'
import menuReducer from "./slice/menuSlice";
import cartReducer  from "./slice/cartSlice";
import { thunk } from "redux-thunk";
import toggleReducer from "./slice/toggleSlice";

const store=configureStore({
    reducer:{
        food:foodReducer,
        hotel:hotelReducer,
        menu:menuReducer,
        cart:cartReducer,
        toggle:toggleReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}).concat(thunk),
})

export default store;