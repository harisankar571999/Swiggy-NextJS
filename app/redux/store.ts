import { configureStore } from "@reduxjs/toolkit";
import foodReducer from './slice/foodSlice';
import hotelReducer from './slice/restuarantSlice'
import menuReducer from "./slice/menuSlice";
import { thunk } from "redux-thunk";

const store=configureStore({
    reducer:{
        food:foodReducer,
        hotel:hotelReducer,
        menu:menuReducer

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk),
})

export default store;